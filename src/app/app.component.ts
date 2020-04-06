import { Component } from '@angular/core';
import { Recipe } from './model/recipe';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 recipes:Recipe[];


 constructor(){
   this.recipes=[new Recipe("Banana Bread","A beautiful banana bread recipe",null,null,null),new Recipe("Farsted Tofu","A beautifulFarsted Tofu recipe",null,null,null),new Recipe("Pasta Carbonara","A beautiful Pasta Carbonara recipe",null,null,null)];
 }
}
