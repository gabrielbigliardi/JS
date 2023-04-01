import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoaderPage } from './pages/loader/loader.page';
import { LoginPage } from './pages/login/login.page';
// import { AppRoutingModule } from 'aoo'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule, RouterModule, LoaderPage, LoginPage],
})

export class AppComponent {
  // public appPages = [];
  constructor(private route: ActivatedRoute) {}
}




// { 
  //   path: 'loader', 
  //   pathMatch: 'prefix',
  //   loadComponent: () => import('./pages/loader/loader.page').then(m => m.LoaderPage),
  //   children: [
  //     { path: 'login', loadChildren: () => import('./pages/login/login.page').then(m => m.LoginPage) }
  //   ] 
  
