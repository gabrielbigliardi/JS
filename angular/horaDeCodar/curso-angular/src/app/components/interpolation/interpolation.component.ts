import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent {

  name: string = 'Jumba'
  age = 22
  job = 'Psicologa'
  hobbies = ['Celular', 'Cozinhar', 'Filmes']
  animals = {
    name: 'Aurora',
    age: 8,
  }

}
