import { Component, OnInit } from '@angular/core';
import * as Pubsub from 'pubsub-js'

@Component({
  selector: 'mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {

  cartoes = []

  constructor() { 
    Pubsub.subscribe('NOVO_CARTAO', (channel, dados) => {
      this.cartoes.push(dados)
    })
  }

  ngOnInit() {
    //this.cartoes.push({ conteudo: 'Bagulhos' })
  }

}
