import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourspooComponent } from './courspoo.component';

describe('CourspooComponent', () => {
  let component: CourspooComponent;
  let fixture: ComponentFixture<CourspooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourspooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourspooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
