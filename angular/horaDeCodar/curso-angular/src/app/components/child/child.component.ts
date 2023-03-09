import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() nome : string = ''
  @Input() jumbaData! : {email: string, role: string}


  
  @Output() newEvent = new EventEmitter<any>()

  handleClick() {
    this.newEvent.emit()
  }

}
