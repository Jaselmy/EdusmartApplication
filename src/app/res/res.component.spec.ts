import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResComponent } from './res.component';

describe('ResComponent', () => {
  let component: ResComponent;
  let fixture: ComponentFixture<ResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
