import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li (click)="isDone(currentAnimal)" *ngFor="let currentAnimal of masterAnimalList"><br>{{currentAnimal.species}}  <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit Animal!</button></li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

   isDone(clickedAnimal: Animal) {
     if(clickedAnimal.done === true) {
       alert("This animal is edited!");
     } else {
       alert("This animal has not been edited. Better edit it!");
     }
   }

   editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

   ageColor(currentAnimal){
     if (currentAnimal.age < 2) {
      return "bg-danger";
    } else if (currentAnimal.age >= 2) {
       return  "bg-warning";
     } else {
       return "bg-info";
     }
   }

}
