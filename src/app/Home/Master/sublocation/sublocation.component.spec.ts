import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SublocationComponent } from './sublocation.component';

describe('SublocationComponent', () => {
  let component: SublocationComponent;
  let fixture: ComponentFixture<SublocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SublocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SublocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
