import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MuralComponent } from './mural/mural.component';
import { FormNovoCartaoComponent } from './form-novo-cartao/form-novo-cartao.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BotaoSyncComponent } from './botao-sync/botao-sync.component';
import { CartaoComponent } from './cartao/cartao.component';


@NgModule({
  declarations: [
    AppComponent,
    MuralComponent,
    FormNovoCartaoComponent,
    CabecalhoComponent,
    BotaoSyncComponent,
    CartaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
