import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JquaryComponent } from './jquary.component';

describe('JquaryComponent', () => {
  let component: JquaryComponent;
  let fixture: ComponentFixture<JquaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JquaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JquaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
