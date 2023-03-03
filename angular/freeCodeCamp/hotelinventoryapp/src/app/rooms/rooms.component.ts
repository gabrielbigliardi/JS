import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName = 'Jumba Hotel'

  numberOfRooms = 10

  hiddenRooms = false

  toggle() {
    this.hiddenRooms = !this.hiddenRooms
  }

  
  rooms : Room = {
    totalRooms: 20,
    availableRooms: 0,
    bookedRooms: 5,
  }

  // constructor() {}

  // ngOnInit(): void { }

}
