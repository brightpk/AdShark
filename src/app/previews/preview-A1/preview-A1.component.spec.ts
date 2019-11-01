/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PreviewA1Component } from './preview-A1.component';

describe('PreviewA1Component', () => {
  let component: PreviewA1Component;
  let fixture: ComponentFixture<PreviewA1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewA1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
