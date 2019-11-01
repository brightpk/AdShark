/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PreviewD1Component } from './preview-D1.component';

describe('PreviewD1Component', () => {
  let component: PreviewD1Component;
  let fixture: ComponentFixture<PreviewD1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewD1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewD1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
