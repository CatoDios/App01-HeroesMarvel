import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe} from "../../../services/heroes.services"
import { Router } from "@angular/router"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private heroesServices:HeroesService,private router:Router) { }

  ngOnInit() {
  }
  buscarHeroe(heroe:string){
     this.router.navigate(['buscarHeroe',heroe]);
  }

}
