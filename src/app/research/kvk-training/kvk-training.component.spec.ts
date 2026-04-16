import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvkTrainingComponent } from './kvk-training.component';

describe('KvkTrainingComponent', () => {
  let component: KvkTrainingComponent;
  let fixture: ComponentFixture<KvkTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KvkTrainingComponent]
    });
    fixture = TestBed.createComponent(KvkTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
