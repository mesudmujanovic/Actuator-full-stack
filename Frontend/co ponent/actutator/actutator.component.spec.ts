import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActutatorComponent } from './actutator.component';

describe('ActutatorComponent', () => {
  let component: ActutatorComponent;
  let fixture: ComponentFixture<ActutatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActutatorComponent]
    });
    fixture = TestBed.createComponent(ActutatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
