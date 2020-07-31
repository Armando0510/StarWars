import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filmes } from '../models/placeholder.model';
import { HttpClient } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }
  public getFilmes() : Observable<any>{
   return this.http.get(`https://swapi.dev/api/films/`);
  }
}
