import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthLogComponent } from './health-log.component';

describe('HealthLogComponent', () => {
  let component: HealthLogComponent;
  let fixture: ComponentFixture<HealthLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
