import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test recipe', 'desc = this is a test', 'https://www.grizzlybearmodern.com/wp-content/uploads/2020/01/fdddd.jpeg'),
    new Recipe('Test recipe', 'desc = this is another test', 'https://www.grizzlybearmodern.com/wp-content/uploads/2020/01/fdddd.jpeg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
