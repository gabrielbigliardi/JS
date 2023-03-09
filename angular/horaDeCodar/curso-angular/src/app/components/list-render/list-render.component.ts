import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent {


  animals: Animal[] = []


  constructor(private listService: ListService) {
    this.getAnimals()
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((ani) => (this.animals = ani))
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter(ani => animal.name !== ani.name)
     this.listService.remove(animal.id).subscribe()
  }

  animalDetails!: string 

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name  } tem ${animal.age} anos.`
  }

}
