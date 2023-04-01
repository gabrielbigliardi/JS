import { ComponentFixture, TestBed, waitForAsync, fakeAsync, async } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Router, provideRouter } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';


describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [LoginPage, IonicModule],
      providers: [provideRouter([]), ReactiveFormsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router)

  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should create form on init', () => {
    component.ngOnInit()

    expect(component.form).not.toBeUndefined()
  })


  it('should go to home page on login', () => {
    spyOn(router, 'navigate')

    component.login()

    expect(router.navigate).toHaveBeenCalledWith(['home'])
  })


  it('should go to register page on register', () => {
    spyOn(router, 'navigate')

    component.register()

    expect(router.navigate).toHaveBeenCalledWith(['register'])
  })

  
});
