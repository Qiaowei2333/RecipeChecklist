import { Component, OnInit } from '@angular/core';
import { Recipe, Ingredient } from '../models/recipe.model';
import { BsModalRef } from 'ngx-bootstrap/modal';

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
  sumOfCheckedIngredients: number;
  
  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
    this.liked = false;
    this.sumOfCheckedIngredients = 0;
    this.ingredients = this.recipe.ingredients;
    // this.ingredients.forEach((ingredient)=>{
    //   if(ingredient.isChecked===true)
    //   this.sum++;
    // });
    // this.sum===this.ingredients.length ? this.allChecked = true : this.allChecked = false;
  }

  toggleLike() {
    this.liked =!this.liked;
  }

  toggleAll() {
    if(this.allChecked) {
      this.sumOfCheckedIngredients = this.ingredients.length;
      this.ingredients.forEach((ingredient)=>{ingredient.isChecked=true;});
    }
    else {
      this.sumOfCheckedIngredients = 0;
      this.ingredients.forEach((ingredient)=>{ingredient.isChecked=false;});
    }
  }

  countCheckedIngredients(isChecked: boolean) {
    if(isChecked) {
      this.sumOfCheckedIngredients += 1;
      if(this.sumOfCheckedIngredients === this.ingredients.length){
        this.allChecked = true;
      }
    }
    else {
      this.sumOfCheckedIngredients -= 1;
      if(this.sumOfCheckedIngredients === this.ingredients.length-1) {
        this.allChecked = false;
      }
    }
  }

}
