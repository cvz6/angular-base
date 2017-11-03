import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzZorroTempComponent } from './nz-zorro-temp.component';

describe('NzZorroTempComponent', () => {
  let component: NzZorroTempComponent;
  let fixture: ComponentFixture<NzZorroTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzZorroTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzZorroTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
