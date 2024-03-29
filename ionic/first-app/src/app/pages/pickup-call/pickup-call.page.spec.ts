import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PickupCallPage } from './pickup-call.page';
import { Router } from '@angular/router';

describe('PickupCallPage', () => {
  let component: PickupCallPage;
  let fixture: ComponentFixture<PickupCallPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(PickupCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router)
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to home on create new pickup call', () => {
    spyOn(router, 'navigate')

    component.newPickupCall()

    expect(router.navigate).toHaveBeenCalledWith(['home'])
  })
});
