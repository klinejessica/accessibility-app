import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conjugations } from './conjugations';

describe('Conjugations', () => {
  let component: Conjugations;
  let fixture: ComponentFixture<Conjugations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conjugations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conjugations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
