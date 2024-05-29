import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedAddressListComponent } from './confirmed-address-list.component';

describe('ConfirmedAddressListComponent', () => {
  let component: ConfirmedAddressListComponent;
  let fixture: ComponentFixture<ConfirmedAddressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmedAddressListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedAddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
