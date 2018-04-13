import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { HomeComponent } from './home/home.component';
import { BurgerComponent } from './burger/burger.component';

import { routing } from './app.router';
import { DrinksComponent } from './drinks/drinks.component';
import { FriesComponent } from './fries/fries.component';
import { SaladsComponent } from './salads/salads.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuBarComponent,
    SlideshowComponent,
    HomeComponent,
    BurgerComponent,
    DrinksComponent,
    FriesComponent,
    SaladsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
