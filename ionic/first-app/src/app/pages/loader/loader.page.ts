import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
// import { FolderPage } from "../../folder/folder.page";
// import { LoaderPageRoutingModule } from '@angular';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.page.html',
    styleUrls: ['./loader.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule ] 
})
export class LoaderPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // setTimeout(()=> {
      this.router.navigate(['login'])

    // }, 1000)
  }

}
