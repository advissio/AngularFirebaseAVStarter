import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicazioniListComponent } from './applicazioni-list.component';

xdescribe('ApplicazioniListComponent', () => {
  let component: ApplicazioniListComponent;
  let fixture: ComponentFixture<ApplicazioniListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicazioniListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicazioniListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
