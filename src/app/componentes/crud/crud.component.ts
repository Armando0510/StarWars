import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Filmes } from 'src/app/models/placeholder.model';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
})
export class CrudComponent implements OnInit {
  filmes : any; 
  erro: any;
  constructor(private crudService: CrudService) {
    this.getter();
  }

  ngOnInit() { }
  getter() {
    this.crudService.getFilmes().subscribe((data: Filmes) => {
      this.filmes = data;
      console.log('Os filmes recebidos', this.filmes);
      console.log('o data recebido', data);
    }, (error: any) => {
      this.erro = error;
      console.log("Erro", error);
    });
  }
}

