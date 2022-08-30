import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertsService } from 'src/app/alerts/alerts';
import { Client } from '../../entities/client/client';
import { ClientSId } from '../../entities/client/client-SId';
import { ClientRepoService } from '../../repositories/client/client-repo.service';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private formClient = new FormGroup({
    id: new FormControl(null),
    firstname: new FormControl("", Validators.required),
    lastname: new FormControl("",Validators.required),
    dni: new FormControl("",Validators.required),
  }) 

  constructor(private clientRepoService: ClientRepoService, private alertsService: AlertsService) { }
  
  getFormClient(){
    return this.formClient;
  }

  setFormClient(actualClient: Client){
    this.formClient.setValue({
      id: actualClient.id,
      firstname: actualClient.firstname,
      lastname: actualClient.lastname,
      dni: actualClient.dni
    })
    console.log(actualClient)
  }

  createClient(){
    var form = this.formClient.value;
    var client: ClientSId = {
      firstname: form.firstname,
      lastname: form.lastname,
      dni: form.dni,
      bussines_name: null,
      cuit: null,
      cuil: null
    };
    this.clientRepoService.createClient(client).subscribe(
      clientData =>{
        console.log(clientData);

      },
      error => console.log(error)
    );
    this.alertsService.createdSatisfactorily("Cliente");
    this.formClient.reset()
  }

  updateClient(id: bigint){
    var form = this.formClient.value;
    var client: ClientSId = {
      firstname: form.firstname,
      lastname: form.lastname,
      dni: form.dni,
      bussines_name: null,
      cuit: null,
      cuil: null
    };
    this.clientRepoService.updateClient(id, client).subscribe(
      clientData =>{
        console.log(clientData);

      },
      error => console.log(error)
    );
    this.formClient.reset()
  }

  deleteClient(id: bigint){
    this.clientRepoService.deleteClient(id).subscribe(
      clientData => {
        console.log(clientData)
      }
    )
  }

}
