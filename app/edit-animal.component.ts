import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div>
    <div *ngIf="childSelectedAnimal">
      <div class='edit-animal'>
      <h3></h3>
      <h3>Edit the {{childSelectedAnimal.species}}</h3>
      <label>Species:</label>
      <input [(ngModel)]="childSelectedAnimal.species">
      <br>
      <label>Name:</label>
      <input [(ngModel)]="childSelectedAnimal.name">
      <br>
      <label>Age:</label>
      <input [(ngModel)]="childSelectedAnimal.age">
      <br>
      <label>Diet:</label>
      <input [(ngModel)]="childSelectedAnimal.diet">
      <br>
      <label>Location:</label>
      <input [(ngModel)]="childSelectedAnimal.location">
      <br>
      <br>
      <label>Sex:</label>
      <input [(ngModel)]="childSelectedAnimal.sex">
      <br>
      <label>Likes:</label>
      <input [(ngModel)]="childSelectedAnimal.likes">
      <br>
      <label>Dislikes:</label>
      <input [(ngModel)]="childSelectedAnimal.dislikes">
      <br>
      <br>
      <br>
      <button (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
 </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}
