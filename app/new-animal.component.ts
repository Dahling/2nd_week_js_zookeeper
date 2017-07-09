import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `

    <div class='new-animal'>
    <h3>Enter a New Animal:</h3>
      <div>
       <label>Species:</label>
       <input #newSpecies>
      </div>

      <div>
        <label>Age:</label>
        <input type="number" #newAge>
      </div>

      <div>
        <label>Diet:</label>
        <input #newDiet>
      </div>

      <div>
        <label>Location:</label>
        <input #newLocation>
      </div>

      <div>
        <label>Caretakers:</label>
        <input type="number" #newCaretakers>
      </div>

      <div>
        <label>Sex:</label>
        <input #newSex>
      </div>

      <div>
        <label>Likes:</label>
        <input #newLikes>
      </div>

      <div>
        <label>Dislikes:</label>
        <input #newDislikes>
      </div>

      <button id='new-animal-button' (click)="submitForm(newSpecies.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Add</button>

    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
