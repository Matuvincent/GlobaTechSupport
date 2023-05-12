import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDMComponent } from './mdm.component';

describe('MDMComponent', () => {
  let component: MDMComponent;
  let fixture: ComponentFixture<MDMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MDMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MDMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
