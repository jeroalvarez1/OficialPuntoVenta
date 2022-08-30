import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Client } from '../../entities/client/client';
import { ClientSId } from '../../entities/client/client-SId';

@Injectable({
  providedIn: 'root'
})
export class ClientRepoService {

  private _refresh$ = new Subject<void>();

  //guardamos la url del backend
  baseURL = 'http://localhost:8888/api/clients';

  constructor(private httpClient: HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }

  //GET CLIENT BY ID
  getClientById(id: bigint): Observable<Client> {
    return this.httpClient.get<Client>(this.baseURL + '/' + id);
  }

  //GET ALL CLIENTS
  findAllClients(): Observable<Client[]>{
    return this.httpClient.get<Client[]>(this.baseURL);
  }

  //POST CLIENT
  createClient(client: ClientSId): Observable<Object>{
    return this.httpClient.post(this.baseURL, client)
  }

  //PUT
  updateClient(id: bigint, client: ClientSId): Observable<Object>{
    return this.httpClient.put(this.baseURL + '/' + id, client);
  }

  //DELETE
  deleteClient(id: bigint): Observable<Object>{
    return this.httpClient.delete(this.baseURL + '/' + id);
  }
}
