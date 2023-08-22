import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() onRecipeChange = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'Lorem ipsum dolar situm',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545'
    ),

    new Recipe(
      'A Test Recipe 1',
      'Lorem ipsum dolar situm',
      'https://www.seriouseats.com/thmb/uH_msyHurzKTDRzc4c_goGoLANI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-classic-panzanella-salad-recipe-hero-03-74d7b17dde8f498795387ef0c22d7215.jpg'
    ),
  ];

  onRecipeSelected(recipe: Recipe) {
    this.onRecipeChange.emit(recipe);
  }
}

// https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg
// https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/63O2DBTTTEI6VKN5T6FVSMYA2A.jpg&w=860
