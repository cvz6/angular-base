import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyLoadJsComponent } from './asy-load-js.component';

describe('AsyLoadJsComponent', () => {
  let component: AsyLoadJsComponent;
  let fixture: ComponentFixture<AsyLoadJsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyLoadJsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyLoadJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
