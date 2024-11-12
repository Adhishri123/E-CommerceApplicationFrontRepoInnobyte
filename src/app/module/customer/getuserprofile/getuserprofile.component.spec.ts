import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetuserprofileComponent } from './getuserprofile.component';

describe('GetuserprofileComponent', () => {
  let component: GetuserprofileComponent;
  let fixture: ComponentFixture<GetuserprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetuserprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetuserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
