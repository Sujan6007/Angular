import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { DressComponent } from './category/dress/dress.component';
import { MenComponent } from './category/dress/men/men.component';
import { PipesComponent } from './pipes/pipes.component';
import { SquarePipe } from './square.pipe';
import { CubePipe } from './cube.pipe';
import { PowerPipe } from './power.pipe';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    DressComponent,
    MenComponent,
    PipesComponent,
    SquarePipe,
    CubePipe,
    PowerPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
