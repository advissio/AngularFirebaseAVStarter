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

  deleteNote(id: string) {
    this.applicazioniService.deleteApplicazione(id);
  }

}
