import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomePage } from './home.page';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router)
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to pickup-calls page on see all', () => {
    spyOn(router, 'navigate');

    component.goToPickupCalls()

    expect(router.navigate).toHaveBeenCalledWith(['pickup-calls'])
  })

  it('should go to new pickup-calls page on create pickup call', () => {
    spyOn(router, 'navigate');

    component.newPickupCall()

    expect(router.navigate).toHaveBeenCalledWith(['pickup-call'])
  })
});
