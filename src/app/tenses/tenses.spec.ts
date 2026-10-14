import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tenses } from './tenses';

describe('Tenses', () => {
  let component: Tenses;
  let fixture: ComponentFixture<Tenses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tenses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tenses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
