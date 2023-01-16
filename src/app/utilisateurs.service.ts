import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  constructor(private _httpClient: HttpClient) { }

  getUsers() {
    return this._httpClient.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }
}