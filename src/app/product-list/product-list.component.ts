import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProductRateComponent } from '../product-rate/product-rate.component';
import { Product } from './product';
import { SingleProductComponent } from '../single-product/single-product.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [CommonModule,FormsModule,SingleProductComponent, MatFormFieldModule, MatInputModule, ReactiveFormsModule,ProductRateComponent]
})
export class ProductListComponent implements OnInit{

  allProducts: Product[] = [];
  filteredProducts: Product[] = [];
  categorySearch: string = '';
  sortDirection: string = 'asc';

 constructor(private productsService: ProductsService) {}


  ngOnInit(): void {
    this.allProducts = this.productsService.getAllProducts();
    this.filteredProducts = this.allProducts; 
   }

   onCategorySearch(): void {
    this.filteredProducts = this.categorySearch
      ? this.allProducts.filter(product => 
          product.category.toLowerCase().includes(this.categorySearch.toLowerCase()))
      : this.allProducts;
    this.sortProducts();
  }

  sortProducts(): void {
    this.filteredProducts.sort((a, b) => {
      return this.sortDirection === 'asc' ? a.price - b.price : b.price - a.price;
    });
  }

  onSortDirectionChange(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.sortProducts();
  }
}

