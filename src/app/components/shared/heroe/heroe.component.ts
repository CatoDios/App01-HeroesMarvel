import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { HeroesService } from "../../../services/heroes.services"
import { Router } from "@angular/router"
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent  {

  heroe:any={};

  constructor(private activatedRoute:ActivatedRoute, private heroesService:HeroesService, private router:Router) { 
    this.activatedRoute.params.subscribe( params=>{
      
      this.heroe=this.heroesService.getHeroe(params["id"]);
      console.log(this.heroe);
    });
  }

  regresar(){
    this.router.navigate(["/heroes"]);
  }
  

}
