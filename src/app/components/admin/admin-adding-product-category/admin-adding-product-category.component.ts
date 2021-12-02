import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-adding-product-category',
  templateUrl: './admin-adding-product-category.component.html',
  styleUrls: ['./admin-adding-product-category.component.css']
})
export class AdminAddingProductCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = "Thêm Mới Danh Mục Sản Phẩm";
}
