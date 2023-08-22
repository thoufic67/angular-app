import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() onAddIngridient = new EventEmitter<Ingredient>();

  onAdd() {
    const ingNamed = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    if (ingNamed && ingAmount) {
      const newIngredient = new Ingredient(ingNamed, +ingAmount);
      this.onAddIngridient.emit(newIngredient);
    }
  }
}
