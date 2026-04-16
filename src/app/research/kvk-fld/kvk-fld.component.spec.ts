import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvkFldComponent } from './kvk-fld.component';

describe('KvkFldComponent', () => {
  let component: KvkFldComponent;
  let fixture: ComponentFixture<KvkFldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KvkFldComponent]
    });
    fixture = TestBed.createComponent(KvkFldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
