import { Component } from '@angular/core';
import { Recipe } from './model/recipe';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 recipe:Recipe;


 constructor(){
   this.recipe=new Recipe("Banana Bread","A beautiful banan bread recipe",null,null,null);
 }
}
