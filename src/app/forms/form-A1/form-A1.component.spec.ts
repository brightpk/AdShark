/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormA1Component } from './form-A1.component';

describe('FormA1Component', () => {
  let component: FormA1Component;
  let fixture: ComponentFixture<FormA1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormA1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
