import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe} from "../../../services/heroes.services"

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private heroesServices:HeroesService) { }

  ngOnInit() {
  }
  buscarHeroe(heroe:string){
     this.heroesServices.buscarHeroe(heroe);
  }

}
