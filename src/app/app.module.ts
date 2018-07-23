import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/shared/about/about.component';
import { HeroesComponent } from './components/shared/heroes/heroes.component';

//rutas
import {APP_ROUTING} from  "./app.routes"

//services
import {HeroesService} from "./services/heroes.services";
import { HeroeComponent } from './components/shared/heroe/heroe.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
