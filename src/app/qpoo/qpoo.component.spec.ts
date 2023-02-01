import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QpooComponent } from './qpoo.component';

describe('QpooComponent', () => {
  let component: QpooComponent;
  let fixture: ComponentFixture<QpooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QpooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QpooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
