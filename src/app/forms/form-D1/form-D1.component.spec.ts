/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormD1Component } from './form-D1.component';

describe('FormD1Component', () => {
  let component: FormD1Component;
  let fixture: ComponentFixture<FormD1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormD1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormD1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
