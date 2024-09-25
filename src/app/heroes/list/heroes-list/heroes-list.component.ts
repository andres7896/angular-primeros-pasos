import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {

  public heroNames: string[] = ['Spiderman','Ironman','Hulk','Capitan America'];
  public deleteHero?: string;

  removeLatHero():void {
    const deleteHero = this.heroNames.pop();
    this.deleteHero = deleteHero;
  }

}
