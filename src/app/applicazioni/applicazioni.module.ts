import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ApplicazioniListComponent } from './applicazioni-list/applicazioni-list.component';
//import { ApplicazioneDetailComponent } from './applicazione-detail/applicazione-detail.component';
import { ApplicazioniService } from './applicazioni.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule
  ],
  declarations: [ApplicazioniListComponent],
  providers: [ApplicazioniService]
})
export class ApplicazioniModule { }
//    , ApplicazioneDetailComponent
