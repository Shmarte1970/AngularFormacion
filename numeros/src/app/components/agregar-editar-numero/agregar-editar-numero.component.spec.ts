import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarNumeroComponent } from './agregar-editar-numero.component';

describe('AgregarEditarNumeroComponent', () => {
  let component: AgregarEditarNumeroComponent;
  let fixture: ComponentFixture<AgregarEditarNumeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEditarNumeroComponent]
    });
    fixture = TestBed.createComponent(AgregarEditarNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
