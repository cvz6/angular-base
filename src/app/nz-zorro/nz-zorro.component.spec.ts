import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzZorroComponent } from './nz-zorro.component';

describe('NzZorroComponent', () => {
  let component: NzZorroComponent;
  let fixture: ComponentFixture<NzZorroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzZorroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzZorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
