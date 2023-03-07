import { Component, Input, Output, OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit, OnChanges {

  @Input() rooms : RoomList[] = []
  @Input() title : string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
    // if(changes['title']) this.title = changes['title'].currentValue.toUpperCase()
  }

  ngOnInit() { }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room)
  }

  

}
