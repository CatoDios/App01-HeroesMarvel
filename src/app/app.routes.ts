import {RouterModule,Routes} from "@angular/router";
import {HomeComponent} from "./components/shared/home/home.component"
import {HeroesComponent} from "./components/shared/heroes/heroes.component"
import {AboutComponent} from "./components/shared/about/about.component"
import {HeroeComponent} from "./components/shared/heroe/heroe.component"
import {BusquedaHeroeComponent} from "./components/shared/busqueda-heroe/busqueda-heroe.component"

const APP_ROUTE:Routes=[
    {path:"home",component:HomeComponent},
    {path:"heroes",component:HeroesComponent},
    {path:"about",component:AboutComponent},
    {path:"heroe/:id",component:HeroeComponent},
    {path:"buscarHeroe/:busqueda",component:BusquedaHeroeComponent},
    {path:"**",pathMatch:"full",redirectTo:"home"}
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTE);