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
//  applicazioni;
  codice: string;
  nome: string;
  custom_o_pckg: string;
  pckg_verticalizzazioni: boolean;
  obsoleta: boolean;

  colonne: [
      { prop: 'nome', name: 'Nome' }
    ];

  constructor(private applicazioniService: ApplicazioniService) { }

  ngOnInit() {
    this.applicazioni = this.applicazioniService.getData();
  }

  // per click su pulsante
  clickHandler() {
    // manca valorizzazione dell'applicazione corrente !!! 
    // magari fatta come istanza di Applicazione ?!? :-)
//    this.applicazioniService.createApplicazione(   this.codice
//                                                 , this.nome
//                                                 , this.custom_o_pckg
//                                                 , this.pckg_verticalizzazioni
//                                                 , this.obsoleta);
    this.nome = '';
//    codice: string;
//    nome: string;
//    custom_o_pckg: string;
//    pckg_verticalizzazioni: boolean;
//    obsoleta: boolean;
  }

  saveNomeclickHandler(){}
}
