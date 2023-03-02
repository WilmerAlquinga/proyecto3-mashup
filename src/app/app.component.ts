import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, MessageService, ConfirmationService]
})
export class AppComponent implements OnInit {
  products: Product[] = [];

  selectedProduct: Product = {} as Product;

  @ViewChild('dt') dt: Table | undefined;

  options: any;

  overlays: any[] = [];

  constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.getProducts();
    this.options = {
      center: {lat: 36.890257, lng: 30.707417},
      zoom: 12
    };
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }
}
