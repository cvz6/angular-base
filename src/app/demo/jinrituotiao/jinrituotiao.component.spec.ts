import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JinrituotiaoComponent } from './jinrituotiao.component';

describe('JinrituotiaoComponent', () => {
  let component: JinrituotiaoComponent;
  let fixture: ComponentFixture<JinrituotiaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JinrituotiaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JinrituotiaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
