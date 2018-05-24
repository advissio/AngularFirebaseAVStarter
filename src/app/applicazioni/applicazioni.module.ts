import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { BrowserModule }      from "@angular/platform-browser";
import {
  FormsModule,
  ReactiveFormsModule,
  NG_VALIDATORS,
  FormControl
}                             from "@angular/forms";
import { ApplicazioniListComponent } from './applicazioni-list/applicazioni-list.component';
//import { ApplicazioneDetailComponent } from './applicazione-detail/applicazione-detail.component';
import { RouterModule }                 from '@angular/router';
import { ProductsRoutingModule }        from './products-routing.module';
//import { ApplicazioniComponent }        from './products.component';
import { ApplicazioneDetailComponent }  from './applicazione-detail/applicazione-detail.component';
import { ApplicazioniSandbox }          from './applicazioni.sandbox';
import { ApplicazioniApiClient }        from './applicazioniApiClient.service';
import { ApplicazioniService }          from './applicazioni.service';
//import { ApplicazioniResolver }         from './products.resolver';
import { ComponentsModule }             from '../shared/components';
import { ContainersModule }             from '../shared/containers';

//import { TranslateModule }              from 'ng2-translate';
import { NgxDatatableModule }           from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  ],
  declarations: [ApplicazioniListComponent],
  providers: [ApplicazioniService]
})
export class ApplicazioniModule { }
//    , ApplicazioneDetailComponent
