import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsregComponent } from './lsreg.component';

describe('LsregComponent', () => {
  let component: LsregComponent;
  let fixture: ComponentFixture<LsregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LsregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
