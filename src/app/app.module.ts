import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TripsComponent } from './trips/trips.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { TripDetailComponent } from './trips/trip-detail/trip-detail.component';
import { ItemListComponent } from './trips/item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TripsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    TripDetailComponent,
    ItemListComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
