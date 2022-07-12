import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'prueba1';
  age = 8;
  img = 'https://cdn.memegenerator.es/imagenes/memes/full/30/85/30850280.jpg';
  btnDisable = true;
  teksto = "Más texto ):<";
  person={
    name: 'Felix',
    age: 50
  }

  togglebutton(){
    this.btnDisable = !this.btnDisable;
  }

  moreage(){
    this.person.age += 1;
  }

  onScroll(event:Event){
    const element = event.target as HTMLElement
    console.log(element.scrollTop)
  }

  changename(event:Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
