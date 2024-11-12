import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproducttocartComponent } from './addproducttocart.component';

describe('AddproducttocartComponent', () => {
  let component: AddproducttocartComponent;
  let fixture: ComponentFixture<AddproducttocartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddproducttocartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddproducttocartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
