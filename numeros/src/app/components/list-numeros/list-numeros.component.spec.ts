import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNumerosComponent } from './list-numeros.component';

describe('ListNumerosComponent', () => {
  let component: ListNumerosComponent;
  let fixture: ComponentFixture<ListNumerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListNumerosComponent]
    });
    fixture = TestBed.createComponent(ListNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
