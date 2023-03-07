import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsComponent implements OnInit {

  hotelName = 'Jumba Hotel'

  // numberOfRooms = 10

  hiddenRooms = false

  title = 'Room List'

  toggle() {
    this.hiddenRooms = !this.hiddenRooms
    this.title = "Lista de Quartos"
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
        roomNumber: 2,
        roomType: 'Deluxe',
        amenities: 'air conditioner, wi-fi, tv, kitchen',
        price: 350,
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.732,
  
      }, {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'air conditioner, wi-fi, tv, kitchen',
        price: 500,
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating: 4.8,
  
      }
    ]
  }

  selectedRoom!: RoomList

  selectRoom(room: RoomList) {
    // console.log(room)
    this.selectedRoom = room
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Regular',
      amenities: 'Air Conditioner', 
      price: 500,
      rating: 4.0
    }
    this.roomList = [ ...this.roomList, room]
  }


 
  


}
