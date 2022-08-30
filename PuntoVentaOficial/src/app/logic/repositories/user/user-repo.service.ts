import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../../entities/model/user';
import { UserSId } from '../../entities/model/userSId';
import { UserEmPw } from '../../entities/model/userEmPw';

@Injectable({
  providedIn: 'root'
})
export class UserRepoService {

  //Url back
  baseURL = 'http://localhost:8888/api/users';

  constructor(private httpClient: HttpClient) { }

  //METHODS

  //GET ALL
  findAllUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseURL);
  }
  
  //GET BY ID
  getUserById(id: bigint): Observable<User>{
    return this.httpClient.get<User>(this.baseURL + '/' + id);
  }

  //GET BY MAIL - CONFIRM PASSWORD
  findByEmailCP(user: UserEmPw){
    
  }

  //POST
  createUser(user: UserSId): Observable<Object>{
    return this.httpClient.post(this.baseURL, user);
  }

  //PUT
  updateUser(id: bigint, user: UserSId): Observable<Object>{
    return this.httpClient.put(this.baseURL + '/' + id, user);
  }

  //DELETE
  deleteUser(id: bigint): Observable<Object> {
    return this.httpClient.delete(this.baseURL + '/' + id);
  }
}
