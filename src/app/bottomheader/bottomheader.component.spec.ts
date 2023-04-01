import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomheaderComponent } from './bottomheader.component';

describe('BottomheaderComponent', () => {
  let component: BottomheaderComponent;
  let fixture: ComponentFixture<BottomheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
