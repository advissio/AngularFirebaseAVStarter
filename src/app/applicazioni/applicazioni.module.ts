import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ApplicazioniListComponent } from './applicazioni-list/applicazioni-list.component';
import { ApplicazioneDetailComponent } from './applicazione-detail/applicazione-detail.component';
import { ApplicazioniService } from './applicazioni.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ApplicazioniListComponent, ApplicazioneDetailComponent],
  providers: [ApplicazioniService]
})
export class ApplicazioniModule { }
