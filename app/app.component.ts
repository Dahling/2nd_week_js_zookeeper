
import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1 id="header">Zookeeper</h1>
    <h2 id="date">{{month}}.{{day}}.{{year}}</h2>
    <h3>{{currentAnimals}}</h3>

    <hr>
        <div>
          <div *ngIf="selectedAnimal">
            <h3>{{selectedAnimal.species}}</h3>
            <p>Animal Inputted? {{selectedAnimal.done}}</p>
            <h3>Edit Animal</h3>
            <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
            <label>Enter Animal Species:</label>
            <input [(ngModel)]="selectedAnimal.species">
            <br>
            <label>Enter Animal's AGE:</label>
            <br>
            <input type="radio" [(ngModel)]="selectedAnimal.age" [value]="1"><span id="words"> Below the Age of 2 </span><br>
            <input type="radio" [(ngModel)]="selectedAnimal.age" [value]="2"><span id="words"> 2 years old and Above</span><br>
            <button (click)="finishedEditing()">Done</button>
          </div>
       </div>
  </div> <!--container-->
  `
})


export class AppComponent {
  currentAnimals: string = 'Current Animals';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  speciesAnimal: string = 'Species:';
  ageAnimal: string = 'Age:';
  selectedAnimal = null;

  masterAnimalList: Animal [] = [
     new Animal("Pig", 4, "Carnivore", "Portland"),
     new Animal("Elephant", 1, "Herbivore", "San Francisco"),
     new Animal("Panda", 2, "Herbivore", "Japan"),
   ];

  editAnimal(clickedAnimal) {
   this.selectedAnimal = clickedAnimal;
 }

 finishedEditing() {
   this.selectedAnimal = null;
 }

}
