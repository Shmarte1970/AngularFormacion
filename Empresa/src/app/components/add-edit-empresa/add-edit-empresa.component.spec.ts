import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEmpresaComponent } from './add-edit-empresa.component';

describe('AddEditEmpresaComponent', () => {
  let component: AddEditEmpresaComponent;
  let fixture: ComponentFixture<AddEditEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditEmpresaComponent]
    });
    fixture = TestBed.createComponent(AddEditEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
