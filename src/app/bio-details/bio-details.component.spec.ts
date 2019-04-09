import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BioDetailsComponent } from './bio-details.component';
import {  HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('BioDetailsComponent', () => {
  let component: BioDetailsComponent;
  let fixture: ComponentFixture<BioDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BioDetailsComponent ],
      providers: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
