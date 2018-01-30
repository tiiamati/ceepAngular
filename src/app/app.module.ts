import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MuralComponent } from './mural/mural.component';
import { FormNovoCartaoComponent } from './form-novo-cartao/form-novo-cartao.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';


@NgModule({
  declarations: [
    AppComponent,
    MuralComponent,
    FormNovoCartaoComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
