import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidComponent } from './mid.component';

describe('MidComponent', () => {
  let component: MidComponent;
  let fixture: ComponentFixture<MidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
