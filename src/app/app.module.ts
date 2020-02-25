import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { BehaviorSubjectService } from './services/behavior-subject.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { HttpDataService } from './services/http-data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule, RoutingModule, ReactiveFormsModule ],
  declarations: [ AppComponent, NavBarComponent, HomeComponent, MenuComponent, ProductsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BehaviorSubjectService, HttpDataService]
})
export class AppModule { }
