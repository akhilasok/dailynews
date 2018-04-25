import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslayoutComponent } from './newslayout.component';

describe('NewslayoutComponent', () => {
  let component: NewslayoutComponent;
  let fixture: ComponentFixture<NewslayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewslayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewslayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
