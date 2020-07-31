import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router : Router,private http : HttpClient) {
    this.API_URL = 'https://swapi.dev/api/films/';
  }
  readonly API_URL : string;


  verSobre(){
    console.log("teste página sobre");
    
    this.router.navigate(['/sobre']);
   }
   verFilmes(){
    //método que traz as informações da API
    this.router.navigate(['/filmes']);
    // this.http.get(`${ this.API_URL }`)
    //          .subscribe(resultado => console.log(resultado));
   }
}


