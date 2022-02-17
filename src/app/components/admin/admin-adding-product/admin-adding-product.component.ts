import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ValidationService } from 'src/app/factory/validation.service';
import { Category, Product } from 'src/app/model/model';
import { DataService } from 'src/app/services/data.service';
import { Message } from 'src/app/utility/constant';

@Component({
  selector: 'app-admin-adding-product',
  templateUrl: './admin-adding-product.component.html',
  styleUrls: ['./admin-adding-product.component.css']
})
export class AdminAddingProductComponent implements OnInit {

  title = "Thêm Sản Phẩm Mới";
  categories: Category[];
  selectedCategory: Category;
  
  productCode: string;
  productName: string;
  productAmount: number;
  productCostPrice: number;
  productPrice: number
  productDescription: string;

  files: File[];

  tags = [
    {
      id: 1,
      title: 'NEW',
      checked: false,
    },
    {
      id: 2,
      title: 'HOT',
      checked: false,
    },
    {
      id: 3,
      title: 'SALE',
      checked: false,
    },
    {
      id: 4,
      title: 'SOLD',
      checked: false,
    },
  ];

  isShowMessage: boolean;
  message: string;

  mainImageUrl: string;
  optionalImages: string[] = [];

  constructor(private dataService: DataService, private validationService: ValidationService) { }

  ngOnInit(): void {
    this.getActiveCategories();
  }  

  getActiveCategories(){
    var url = "/no-auth/categories?status=ACTIVE";
    this.dataService.sendGetRequest(url).subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  createProduct(){

    var url = "/categories/"+this.selectedCategory.id+"/products";

    const product : Product = {
      name: this.productName,
      code: this.productCode,
      description: this.productDescription,
      amount: this.productAmount,
      costPrice: this.productCostPrice,
      price: this.productPrice,
      tags: this.filterTags()
    };

    this.isShowMessage = this.validateProduct(product);
    if(this.isShowMessage){
      return;
    }

    let formData = new FormData();    

    formData.append("product", JSON.stringify(product));

    if(this.files){
      for(let file of this.files){
        formData.append("images", file);
      }
    }

    this.dataService.sendFormDataRequest(url, formData).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        // TODO: will handle later
        //this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.isShowMessage = true;
        this.message = Message.SUCCESS;
        if(event.body.id){
          this.resetForm();
          setTimeout(() => {
            this.isShowMessage = false;
          }, 5000);
        }
      }
    },
    err => {
      console.log(err);
    });
  }

  onFileChange(event) {  
    if (event.target.files.length > 0) {
      this.files = event.target.files;
      this.buildMainImageUrl(this.files[0]);
      this.buildOptionalImageUrls(this.files);
    }
  }

  private filterTags(){
    return this.tags.filter(tag => tag.checked).map(tag => tag.title);
  }

  private validateProduct(product: Product): boolean {
    try {
		this.validationService.validateCategory(this.selectedCategory);
      	this.validationService.validateProductCreation(product);
    } catch (error) {
      	this.message = error.message;
      	return true;
    }
  }

  private buildMainImageUrl(file: File){
	  let reader = new FileReader();
	  reader.onload = (event: any) => {
		  this.mainImageUrl = event.target.result;
	  }
    reader.readAsDataURL(file)
  }

  private buildOptionalImageUrls(files: File[]){
	  this.optionalImages = [];
	  if(files.length < 2) {
		  return;
	  }

	  let size = files.length;
	  if(size > 6){
		  size = 6;
	  }

	  for(let i = 1; i<size; i++){
		let reader = new FileReader();
		reader.onload = (event: any) => {
			this.optionalImages.push(event.target.result);
		}
		reader.readAsDataURL(files[i]);
	  }
  }

  private resetForm(){
    this.productCode = '';
    this.productName = '';    
    this.productDescription = '';
    this.productAmount = null;
    this.productCostPrice = null;
    this.productPrice = null;

    this.tags.map(tag => tag.checked = false);

    this.resetImages();
  }

  private resetImages(){
    this.files = [];
    this.mainImageUrl = '';
    this.optionalImages = [];
  }
}
