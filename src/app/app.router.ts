import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BurgerComponent } from './burger/burger.component';
import { DrinksComponent } from './drinks/drinks.component';
import { FriesComponent } from './fries/fries.component';
import { SaladsComponent } from './salads/salads.component';
import { ContactComponent } from './contact/contact.component';


const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'burgers', component: BurgerComponent },
    { path: 'drinks', component: DrinksComponent },
    { path: 'fries', component: FriesComponent },
    { path: 'salads', component: SaladsComponent },
    { path: 'contact', component: ContactComponent }
    
];

export const routing = RouterModule.forRoot(appRoutes);

