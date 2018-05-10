import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../services/peticion.service'

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
  providers: [PeticionService]
})
export class ComicsComponent implements OnInit {

  public listaComics: any;
  public likeComics: Array<number>;

  constructor(
    private _peticionService: PeticionService
  ) { }

  ngOnInit() {
    this._peticionService.getComics().subscribe(
      result => {
        this.listaComics = result.data.results;
        console.log(this.listaComics);
        this.inicializarLikes();
      },
      error => {
        var errorMsj = <any>error;
        console.log(errorMsj);
      }
    );
  }

  inicializarLikes(){
    this.likeComics = [];
    for (let i = 0; i < this.listaComics.length; i++) {
      this.likeComics.push(0);  
    }
  }

  gestionarLike(index, parametro){
    if(parametro){
      this.likeComics[index]++;
    }else{
      this.likeComics[index]--;      
    }
  }

}
