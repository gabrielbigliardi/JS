// import { AppRoutingModule } from '@angular/router';
import { ComponentFixture, TestBed, waitForAsync, fakeAsync } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { Router, provideRouter } from '@angular/router';
import { IonicModule } from '@ionic/angular';
// import { AppRoutingModule } from 'src/app/app.routes';
// import { nextTick } from 'process';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderPage, IonicModule],
      providers: [provideRouter([])],
    }).compileComponents();
    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should go to login page after load', fakeAsync(() => {
    spyOn(router, 'navigate');

    component.ngOnInit();

    // // nextTick(1500)

    expect(router.navigate).toHaveBeenCalledWith(['login'])
  }))
});
