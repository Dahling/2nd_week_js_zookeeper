
import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div id="header">
      <img id="giraffe" src='/resources/images/giraffe2.png'>
      <h1>Zookeeper</h1>
      <h2 id="date">{{month}}.{{day}}.{{year}}</h2>
  </div>
    <h3>{{currentAnimals}}</h3>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <hr>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
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
  // ageAnimal: number = 'Age:';
  locationDiet: string = 'Diet:';
  locationAnimal: string = 'Location:';
  // caretakersAnimal: number = 'Caretakers:';
  sexAnimal: string = 'Sex:';
  likesAnimal: string = 'Likes:';
  dislikesAnimal: string = 'Dislikes:';
  selectedAnimal = null;

  masterAnimalList: Animal [] = [
     new Animal("Pig", "Cutie", 4, "Gummy Bears", "PDX", 5, "Female", "Sunshine", "Rain"),
     new Animal("Elephant", "Pinky", 1, "Tortilla Chips", "SFO", 25, "Male", "Kids", "Clouds"),
     new Animal("Panda", "Hunk", 2, "Ice Cream", "LAX", 2, "Male", "Women", "Snobs"),
   ];

  editAnimal(clickedAnimal) {
   this.selectedAnimal = clickedAnimal;
 }

 finishedEditing() {
   this.selectedAnimal = null;
 }

 addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
