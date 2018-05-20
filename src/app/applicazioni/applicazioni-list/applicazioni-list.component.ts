import { Component, OnInit } from '@angular/core';
import { ApplicazioniService } from '../applicazioni.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'applicazioni-list',
  templateUrl: './applicazioni-list.component.html',
  styleUrls: ['./applicazioni-list.component.scss']
})
export class ApplicazioniListComponent implements OnInit {

  applicazioni: Observable<any[]>;
  name: string;

  constructor(private applicazioniService: ApplicazioniService) { }

  ngOnInit() {
    this.applicazioni = this.applicazioniService.getData();
  }

  clickHandler() {
    this.applicazioniService.createApplicazione(this.name);
    this.name = '';
  }

}
