import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspapperComponent } from './newspapper.component';

describe('NewspapperComponent', () => {
  let component: NewspapperComponent;
  let fixture: ComponentFixture<NewspapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewspapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
