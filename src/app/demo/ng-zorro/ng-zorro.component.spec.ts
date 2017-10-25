import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgZorroComponent } from './ng-zorro.component';

describe('NgZorroComponent', () => {
  let component: NgZorroComponent;
  let fixture: ComponentFixture<NgZorroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgZorroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgZorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
