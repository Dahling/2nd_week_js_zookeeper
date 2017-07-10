import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `


  <select (change)="onChange($event.target.value)">
        <option value="allAnimals" selected="selected">All Animals</option>
        <option value="babyAnimals">Baby Animals (i.e., younger than 2)</option>
        <option value="grownAnimals">Grown Animals (i.e., 2 and above)</option>
  </select>


    <ul>
      <li (click)="isAge(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
      <span class="animal">
          <span class="labels">Species:</span> <span class="responses">{{currentAnimal.species}}</span>
          <br>
          <span class="labels">Name:</span> <span class="responses">{{currentAnimal.name}}</span>
          <br>
          <span class="labels">Age:</span> <span class="responses">{{currentAnimal.age}}</span>
          <br>
          <span class="labels">Diet:</span> <span class="responses">{{currentAnimal.diet}}</span>
          <br>
          <span class="labels">Location:</span> <span class="responses">{{currentAnimal.location}}</span>
          <br>
          <span class="labels">Sex:</span> <span class="responses">{{currentAnimal.sex}}</span>
          <br>
          <span class="labels">Caretakers:</span> <span class="responses">{{currentAnimal.caretakers}}</span>
          <br>
          <span class="labels">Likes:</span> <span class="responses">{{currentAnimal.likes}}</span>
          <br>
          <span class="labels">Dislikes:</span> <span class="responses">{{currentAnimal.dislikes}}</span>
          <br>
      </span>

        <button id="first-buttons" (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>

      </li>
    </ul>


  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "allAnimals";

  onChange(optionFromMenu) {
  this.filterByAge = optionFromMenu;
}

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
