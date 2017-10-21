import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDemoComponent } from './http-demo.component';

describe('HttpDemoComponent', () => {
  let component: HttpDemoComponent;
  let fixture: ComponentFixture<HttpDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
