import { Component, OnInit} from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { IngredientComponent } from '../ingredient/ingredient.component';
 
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes: Recipe[];
  bsModalRef: BsModalRef;

  constructor(private recipeService: RecipeService, private modalService: BsModalService) { }

  ngOnInit() {
    this.recipeService.getRecipes().
      subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
        console.log(this.recipes);
      });
  }
  
  
 
  openModalWithComponent(selectedrecipe: Recipe) {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component',
      recipe: selectedrecipe
    };
    this.bsModalRef = this.modalService.show(IngredientComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
