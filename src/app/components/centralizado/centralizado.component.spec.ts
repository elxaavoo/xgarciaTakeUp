import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralizadoComponent } from './centralizado.component';

describe('CentralizadoComponent', () => {
  let component: CentralizadoComponent;
  let fixture: ComponentFixture<CentralizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CentralizadoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CentralizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
