import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiduMapComponent } from './baidu-map.component';

describe('BaiduMapComponent', () => {
  let component: BaiduMapComponent;
  let fixture: ComponentFixture<BaiduMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiduMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiduMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
