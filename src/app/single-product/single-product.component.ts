import { Component } from '@angular/core';


import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import {  EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductRateComponent } from '../product-rate/product-rate.component';
import { ProductsService } from '../products.service';
import { Product } from '../product-list/product';



@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [CommonModule,ProductRateComponent],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  @Input() productId!: number;
  selectedProduct!: Product;
  constructor(private productSer:ProductsService){}


  ngOnInit(): void {
    this.selectedProduct = this.productSer.getProductById(this.productId) as Product;
}
}
