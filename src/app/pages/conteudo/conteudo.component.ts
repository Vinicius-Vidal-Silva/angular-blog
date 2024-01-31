import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule, ActivatedRoute } from '@angular/router';
import { dataFake } from "../../dados/dataFake";

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
export class ConteudoComponent implements OnInit{
  conteudoCapa:string|null = ""
  conteudoTitle:string|null = ""
  conteudoTexto:string|null = ""
  private id:any = ""

  constructor(private route:ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id"))

    this.setValuesToComponent(this.id)
  }
  setValuesToComponent(id:string){
    const resultado = dataFake.filter(article =>
      article.id === id)[0]
      this.conteudoTitle = resultado.title
      this.conteudoTexto = resultado.description
      this.conteudoCapa = resultado.foto
  }
}
