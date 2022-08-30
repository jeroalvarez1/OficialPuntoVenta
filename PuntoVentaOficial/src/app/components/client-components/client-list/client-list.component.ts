import { Component, Renderer2, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Client } from 'src/app/logic/entities/client/client';
import { ClientRepoService } from 'src/app/logic/repositories/client/client-repo.service';
import { ClientService } from 'src/app/logic/services/client/client.service';
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit {

  rows: Client[];
  filterTerm!: string;

  constructor(private clientService: ClientService, private clientRepoService: ClientRepoService, private modalCtrl: ModalController) { }
  presentingElement = null;

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  currentClient(id: bigint): void {
    let actualClient: Client;
    this.clientRepoService.getClientById(id).subscribe(
      clientData => {
        actualClient = clientData;
        this.clientService.setFormClient(actualClient);
      }
    )
    this.modalCtrl.dismiss()
  }

  getClients(){
    this.clientRepoService.findAllClients().subscribe(
      clientData => {
        this.rows = clientData
      }
    )
  }
  
  updateTable(){
    this.getClients();
  }

  deleteClient(id: bigint){
    this.clientService.deleteClient(id);
    setTimeout(() => {
      this.updateTable();
    }, 1000);
  }
}
