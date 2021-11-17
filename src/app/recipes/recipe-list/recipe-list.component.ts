import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'desc = this is a test', 'https://www.grizzlybearmodern.com/wp-content/uploads/2020/01/fdddd.jpeg')];


  constructor() { }

  ngOnInit(): void {
  }

}
