import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbosIrregulares } from './verbos-irregulares';

describe('VerbosIrregulares', () => {
  let component: VerbosIrregulares;
  let fixture: ComponentFixture<VerbosIrregulares>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerbosIrregulares]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerbosIrregulares);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
