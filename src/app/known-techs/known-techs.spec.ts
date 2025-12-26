import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnownTechs } from './known-techs';

describe('KnownTechs', () => {
  let component: KnownTechs;
  let fixture: ComponentFixture<KnownTechs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnownTechs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnownTechs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
