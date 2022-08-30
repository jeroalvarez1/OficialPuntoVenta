import { Component, OnInit } from '@angular/core';
import { ClientService } from '../logic/services/client/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {

  constructor(private clientService: ClientService) { 
  
  }

  formAddClient = this.clientService.getFormClient();  
  
  ngOnInit() {

  }
  //JERO
  createClient(){
    this.clientService.createClient();
  }

  updateClient(){
    console.log(this.clientService.getFormClient().value.id)
    this.clientService.updateClient(this.clientService.getFormClient().value.id);

  }

  //CIRO
  currentFactura = undefined;

  facturas = [
    {
      id: 1,
      name: 'Factura A',
      type: 'factura'
    },
    {
      id: 2,
      name: 'Factura B',
      type: 'factura'
    },
    {
      id: 3,
      name: 'Factura C',
      type: 'factura'
    },
    {
      id: 4,
      name: 'Sin Factura',
      type: 'factura'
    }
  ];

  compareWith(o1, o2) {
    if(!o1 || !o2) {
      return o1 === o2;
    }

    if(Array.isArray(o2)) {
      return o2.some((o) => o.id === o1.id);
    }

    return o1.id === o2.id;
  }

  handleChange(ev) {
    this.currentFactura = ev.target.value;
  }
  cCuenta= undefined;

  cuentas = [
    {
      id: 1,
      name: 'Sin Cuenta Corriente',
      type: 'Cuenta corriente'
    },
    {
      id: 2,
      name: 'Con Cuenta corriente',
      type: 'Cuenta corriente'
    },
  ];

  compareWiths(o1, o2) {
    if(!o1 || !o2) {
      return o1 === o2;
    }

    if(Array.isArray(o2)) {
      return o2.some((o) => o.id === o1.id);
    }

    return o1.id === o2.id;
  }

  handleChanges(ev) {
    this.cCuenta = ev.target.value;
  }

}
