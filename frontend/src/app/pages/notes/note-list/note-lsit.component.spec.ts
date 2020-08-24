import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteLsitComponent } from './note-lsit.component';

describe('NoteLsitComponent', () => {
  let component: NoteLsitComponent;
  let fixture: ComponentFixture<NoteLsitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteLsitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteLsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
