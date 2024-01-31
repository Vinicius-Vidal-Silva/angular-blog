import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
export class ConteudoComponent implements OnInit{
  conteudoCapa:string = "https://assets.pokemon.com/assets//cms2-pt-br/img/video-games/video-games/pokemon_unite/pokemon-unite-logo-169.jpg"
  conteudoTitle:string = "Meu artigo"
  conteudoTexto:string = "Meu texto sobre o artigo"

  constructor() {}

  ngOnInit(): void {

  }
}
