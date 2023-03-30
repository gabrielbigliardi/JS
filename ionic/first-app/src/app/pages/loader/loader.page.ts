import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
// import { FolderPage } from "../../folder/folder.page";
// import { LoaderPageRoutingModule } from './loader.routes';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.page.html',
    styleUrls: ['./loader.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule,  ] //LoaderPageRoutingModule
})
export class LoaderPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('hello world')
  }

}
