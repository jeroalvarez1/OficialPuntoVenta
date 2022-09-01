import { Component, OnInit } from '@angular/core';
import { AlertsService } from 'src/app/alerts/alerts';
import { ProductsService } from 'src/app/logic/services/products/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  rows = [
    {
      'cod': 3478873424,
      'category':'Fideos',
      'trademark': 'Lucketti',
      'name': 'Ultra finos',
      'amount': 22
    },
    {
      'cod': 8723418732,
      'category':'Shampoo',
      'trademark': 'Avon',
      'name': 'Mansanilla',
      'amount': 50
    },
    {
      'cod': 28984932323,
      'category':'Te',
      'trademark': 'La Virginia',
      'name': 'Tilo',
      'amount': 1
    },
  ]

  actionValue = this.productsService.actionInProduct;

  constructor(private productsService: ProductsService, private alertsService: AlertsService) { }

  ngOnInit() { 
    this.alertsService.choiseProductoAction()
  }

  clicll(){
    this.actionValue = 2;
  }

}
