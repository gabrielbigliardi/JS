import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent {

  animals: Animal[] = [
    {name: 'Aurora', type: 'dog', age: 8},
    {name: 'Bela', type: 'dog', age: 5},
    {name: 'Jimi', type: 'dog', age: 8},
    {name: 'Bojack', type: 'horse', age: 41},
  ]


  constructor(private listService: ListService) {}

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...');
    this.animals = this.listService.remove(this.animals, animal)
  }

  animalDetails!: string 

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name  } tem ${animal.age} anos.`
  }

}
