import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  title: string;
  closeBtnName: string;
  list: any[] = [];
  recipe: Recipe;
  liked: boolean = false;

  constructor(public bsModalRef: BsModalRef) {}
 
  ngOnInit() {
    this.list.push(this.recipe.name);
    console.log(this.recipe.name);
  }

}
