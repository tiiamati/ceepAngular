import { Component, OnInit, Input } from '@angular/core';
import * as Pubsub from 'pubsub-js'
import {FormGroup, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'form-novo-cartao',
  templateUrl: './form-novo-cartao.component.html',
  styleUrls: ['./form-novo-cartao.component.css']
})
export class FormNovoCartaoComponent implements OnInit {

  formCadastro: FormGroup

  constructor(private formBuilder: FormBuilder) {
      this.formCadastro = formBuilder.group({
        cartaoConteudo: ['', Validators.required]
      })
   }

  salvar(event) {
    event.preventDefault();

    Pubsub.publish('NOVO_CARTAO', { conteudo: this.formCadastro.controls.cartaoConteudo.value })
  }

  ngOnInit() {
  }

}
