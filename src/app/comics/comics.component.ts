import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../services/peticion.service'

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
  providers: [PeticionService]
})
export class ComicsComponent implements OnInit {

  public listaComics

  constructor(
    private _peticionService: PeticionService
  ) { }

  ngOnInit() {
    this._peticionService.getComics().subscribe(
      result => {
        this.listaComics = result.data.results;
        console.log(this.listaComics);
      },
      error => {
        var errorMsj = <any>error;
        console.log(errorMsj);
      }
    );
  }

}
