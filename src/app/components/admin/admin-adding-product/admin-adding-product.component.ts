import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-adding-product',
  templateUrl: './admin-adding-product.component.html',
  styleUrls: ['./admin-adding-product.component.css']
})
export class AdminAddingProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "Thêm Sản Phẩm Mới"
}
