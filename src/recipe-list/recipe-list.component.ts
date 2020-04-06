import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  {

 recipes:Recipe[];


 constructor(){
   this.recipes=[new Recipe("Banana Bread","A beautiful banana bread recipe",null,null,null),new Recipe("Farsted Tofu","A beautifulFarsted Tofu recipe",null,null,null),new Recipe("Pasta Carbonara","A beautiful Pasta Carbonara recipe",null,null,null)];
 }

}