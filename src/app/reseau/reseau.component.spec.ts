import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseauComponent } from './reseau.component';

describe('ReseauComponent', () => {
  let component: ReseauComponent;
  let fixture: ComponentFixture<ReseauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReseauComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReseauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
