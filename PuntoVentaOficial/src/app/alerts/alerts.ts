import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ProductsService } from '../logic/services/products/products.service';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private alertController: AlertController, private productsService: ProductsService) {  }

  async emptyForm(){
    const alert = await this.alertController.create({
      header: 'Datos incompletos',
      message: 'Tienes que llenar todos los campos.',
      buttons: ['Aceptar']
    });
    await alert.present();
    return;
  }

  async incorrectPassword(){
    const alert = await this.alertController.create({
      header: 'Datos incorrectos',
      message: 'El mail o la contrasela son incorrectos..',
      buttons: ['Aceptar']
    });
    await alert.present();
    return;
  }

  async createdSatisfactorily(type: string){
    const alert = await this.alertController.create({
      header: "Creacion exitosa",
      message:  type + ' creado exitosamente',
      buttons: ['Aceptar']
    });
    await alert.present();
    return;
  }

  async choiseProductoAction() {
    const alert = await this.alertController.create({
      header: '¿Que desea hacer?',
      buttons: [
        {
          text: 'Actualizar Stock',
          handler: () => {
            this.productsService.actionInProduct = 1;
          },
        },
        {
          text: 'Actualizar Precios',
          handler: () => {
            this.productsService.actionInProduct = 2;
          },
        },
        {
          text: 'Editar Producto',
          handler: () => {
            this.productsService.actionInProduct = 3;
          },
        },
      ],
    });

    await alert.present();

  }
  

  //fecha y nombre de usaurio
}
