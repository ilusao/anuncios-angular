import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AnuncioService } from '../anuncio.service';
import { Anuncio } from './../anuncio';
@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit{

  anuncio: Anuncio[] = [];
  formGroupAnuncio : FormGroup;
  isEditing: boolean = false;

 constructor(
             private anuncioService: AnuncioService,
             private formBuilder: FormBuilder
 ){
  this.formGroupAnuncio = formBuilder.group({
    id : [''],
    empresa : [''],
    email : [''],
  style:[''],
    url : ['']
   });

 }

  ngOnInit(): void {
    this.loadAnuncios();
  }

  loadAnuncios(){
      this.anuncioService.getAnuncios().subscribe(
        {
            next:  data =>  this.anuncio = data,
            error: msg  => console.log("Erro ao chamar o endpont " + msg)
        }
      )
  }

}
