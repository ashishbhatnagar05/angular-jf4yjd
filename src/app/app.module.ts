import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeSummaryComponent } from '../recipe-summary/recipe-summary.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,RecipeListComponent,RecipeSummaryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
