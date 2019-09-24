import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewSeasonalComponent } from './preview-seasonal.component';

describe('PreviewSeasonalComponent', () => {
  let component: PreviewSeasonalComponent;
  let fixture: ComponentFixture<PreviewSeasonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewSeasonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewSeasonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
