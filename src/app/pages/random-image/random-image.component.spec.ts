import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomImageComponent } from './random-image.component';

describe('RandomImageComponent', () => {
  let component: RandomImageComponent;
  let fixture: ComponentFixture<RandomImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomImageComponent]
    });
    fixture = TestBed.createComponent(RandomImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
