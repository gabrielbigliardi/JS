import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userName = 'Luiza'
  userData = {
    email: 'jumba@lina.com',
    role: 'admin'
  }

  title = 'curso-angular';

  myNumber: number = 0

  summeNumber() {
    this.myNumber = this.myNumber + 1
  }
  minusNumber() {
    this.myNumber = this.myNumber - 1
  }

  // showEvent() {
  //   console.log(newEvent)
  // }
}
