import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompilerComponent } from './compiler.component';

describe('CompilerComponent', () => {
  let component: CompilerComponent;
  let fixture: ComponentFixture<CompilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompilerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
