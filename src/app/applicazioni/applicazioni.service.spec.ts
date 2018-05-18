import { TestBed, inject } from '@angular/core/testing';

import { NotesService } from './applicazioni.service';

xdescribe('ApplicazioniService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicazioniService]
    });
  });

  it('should be created', inject([ApplicazioniService], (service: ApplicazioniService) => {
    expect(service).toBeTruthy();
  }));
});
