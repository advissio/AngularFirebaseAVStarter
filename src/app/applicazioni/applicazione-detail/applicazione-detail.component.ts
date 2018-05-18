import { Component, Input } from '@angular/core';

import { ApplicazioniService } from '../applicazioni.service';

@Component({
  selector: 'applicazione-detail',
  templateUrl: './applicazione-detail.component.html',
  styleUrls: ['./applicazione-detail.component.scss'],
})
export class ApplicazioneDetailComponent {

  @Input() applicazione: any;

  constructor(private applicazioniService: ApplicazioniService) { }

  addHeartToNote(val: number) {
    if (this.applicazione.id) {
      this.applicazioniService.updateApplicazione(this.applicazione.id, { hearts: val + 1 });
    } else {
      console.error('Note missing ID!');
    }
  }

  deleteNote(id: string) {
    this.applicazioniService.deleteApplicazione(id);
  }

}
