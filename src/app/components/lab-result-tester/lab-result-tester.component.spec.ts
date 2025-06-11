import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabResultTesterComponent } from './lab-result-tester.component';

describe('LabResultTesterComponent', () => {
  let component: LabResultTesterComponent;
  let fixture: ComponentFixture<LabResultTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabResultTesterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabResultTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
