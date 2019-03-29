import { Component, OnInit } from '@angular/core';
import { Recipe, Ingredient } from '../models/recipe.model';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { allocExpando } from '@angular/core/src/render3/instructions';
import { RecipeComponent } from '../recipe/recipe.component';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  recipe: Recipe;
  ingredients: Ingredient[];
  liked: boolean;
  allChecked: boolean;
  sum: number;
  
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
    this.liked = false;
    this.allChecked = false;
    this.ingredients = this.recipe.ingredients;
    this.sum = 0;
  }

  onChange() {
    if(this.allChecked) {
      this.ingredients.forEach((ingredient)=>{ingredient.isChecked=true;});
    }
    else {
      this.ingredients.forEach((ingredient)=>{ingredient.isChecked=false;});
    }
  }

  count(isChecked: boolean) {
    if(isChecked) {
      this.sum += 1;
      if(this.sum===this.ingredients.length){
        this.allChecked = true;
      }
    }
    else {
      this.sum -= 1;
      if(this.sum===this.ingredients.length-1) {
        this.allChecked = false;
      }
    }
  }

}
