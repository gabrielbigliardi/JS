import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
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

  constructor() { }

  getRooms() {
    return this.roomList
  }
}
