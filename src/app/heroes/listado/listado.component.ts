import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['Iroman','Spiderman','Hulk','Thor'];
  heroeBorrado: string = '';

  borrarHeroe(): void{
    console.log('Borrando.....');
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }

}
