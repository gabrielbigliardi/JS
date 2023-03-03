import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Jumba Hotel'

  // numberOfRooms = 10

  hiddenRooms = false

  toggle() {
    this.hiddenRooms = !this.hiddenRooms
  }


  rooms: Room = {
    totalRooms: 15,
    availableRooms: 30,
    bookedRooms: 5,
  }


  roomList: RoomList[] = []

  // constructor() {}

  ngOnInit(): void { 
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Suite',
        amenities: 'air conditioner, wi-fi, tv',
        price: 250,
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.5,
      }, {
        roomNumber: 3,
        roomType: 'Deluxe',
        amenities: 'air conditioner, wi-fi, tv, kitchen',
        price: 350,
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.732,
  
      }, {
        roomNumber: 2,
        roomType: 'Private Suite',
        amenities: 'air conditioner, wi-fi, tv, kitchen',
        price: 500,
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.8,
  
      }
    ]
  }

}
