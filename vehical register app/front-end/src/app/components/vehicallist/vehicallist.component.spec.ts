import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicallistComponent } from './vehicallist.component';

describe('VehicallistComponent', () => {
  let component: VehicallistComponent;
  let fixture: ComponentFixture<VehicallistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicallistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
