import { RoomsComponent } from './rooms/rooms.component';
import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  title = 'hotelinventoryapp';

  role = 'Admin'

  @ViewChild('name' , { static : true } ) name!: ElementRef;

  ngOnInit() {
    this.name.nativeElement.innerText = 'Gabe'
    console.log(this.name)
  }



  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent)
  //   console.log(componentRef)
  // }

  // @ViewChild('user' , { read: ViewContainerRef } ) vcr!: ViewContainerRef;

  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent)
  //   console.log(componentRef)
  // }


}
