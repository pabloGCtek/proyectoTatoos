import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artistas2Component } from './artistas2.component';

describe('Artistas2Component', () => {
  let component: Artistas2Component;
  let fixture: ComponentFixture<Artistas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Artistas2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Artistas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
