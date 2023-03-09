import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {

  toggle: boolean = true

  toggleMessage(): void {
    this.toggle = !this.toggle
  }

}
