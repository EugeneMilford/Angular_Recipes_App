import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  //private recipes: Recipe[] = [
  //  new Recipe(
  //    'Delicious Fish',
  //    'desc = Home made style fish',
  //    'https://img.etimg.com/thumb/msid-68495044,width-650,imgsize-1335371,,resizemode-4,quality-100/fish.jpg',
  //    [
  //      new Ingredient('Fish', 2),
  //      new Ingredient('Lemons', 2)
  //    ]),

  //  new Recipe(
  //    'Cheese Burger',
  //    'desc = This is a recipe from epicurious',
  //    'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_1920,c_limit/Smashburger-recipe-120219.jpg',
  //    [
  //    new Ingredient('Meat', 1),
  //    new Ingredient('Buns', 2)
  //    ])
  //];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.AddIngs(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
