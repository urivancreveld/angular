import { Component } from '@angular/core';
import { Hero } from './heros'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'HEROS OF UVC!';

  myHeros=[new Hero("Shimon","Rousso")];
  heros = [{name  : 'beltazar', heroclass : 'thief'},
           {name  : 'natasha', heroclass : 'barbarian'}];

  newHero = {name : '', heroclass : ''};
  console.log(myHeros);

  addHero() {
    this.heros.push(Object.assign({}, this.newHero));
  };

  removeHero(hero) {
    let index=this.heros.indexOf(hero);
    this.heros.splice(index , 1);
  };



}
