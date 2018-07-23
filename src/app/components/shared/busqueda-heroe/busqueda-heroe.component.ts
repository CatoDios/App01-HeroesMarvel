import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe} from "../../../services/heroes.services"
import { Router } from "@angular/router"
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-busqueda-heroe',
  templateUrl: './busqueda-heroe.component.html',
  styleUrls: ['./busqueda-heroe.component.css']
})
export class BusquedaHeroeComponent implements OnInit {

  heroes:Heroe[]=[];
  constructor(private _heroesService:HeroesService , private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params=>{
      
      this.heroes=this._heroesService.buscarHeroe(params["busqueda"]);
      
    });

  }
  verHeroe(i:number){
    console.log(i);
      this.router.navigate(['/heroe',i]);
  }
}
