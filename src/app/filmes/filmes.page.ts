import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/app/services/crud.service';
import { Filmes } from 'src/app/models/placeholder.model';
@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.page.html',
  styleUrls: ['./filmes.page.scss'],
})
export class FilmesPage implements OnInit {
  filmes : Filmes;
  erro: any;
  readonly API_URL : string;
  constructor(public navCtrl:NavController, private http : HttpClient, private crudService:CrudService) {
    this.getter(); 
  }
   ngOnInit(){
    console.log("entrou na página lista de filmes")
   }
  getter(){
    this.crudService.getFilmes().subscribe((data: Filmes) => {
      this.filmes = data.results
    console.log('Os filmes recebidos',this.filmes);
    //console.log('o data recebido',data);
    }, (error: any) => {
    this.erro = error;
    console.log("Erro",error);
    });
  }  
}
