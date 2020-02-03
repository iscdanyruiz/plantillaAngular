import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarPokemonComponent } from './seleccionar-pokemon.component';

describe('SeleccionarPokemonComponent', () => {
  let component: SeleccionarPokemonComponent;
  let fixture: ComponentFixture<SeleccionarPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionarPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
