import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {

  constructor(private navCtrl: NavController,private platform: Platform) { }

  ngOnInit() {
    console.log("Entrou na página sobre");

  }
  voltar(){
    console.log("Clicou em voltar");
  }
 
}

