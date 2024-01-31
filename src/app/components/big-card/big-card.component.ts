import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit {
  @Input()
  fotoCover: string = "";
  @Input()
  cardTitle: string = "";
  @Input()
  cardConteudo: string = "";
  @Input()
  id: string = "0";

  constructor() {}

  ngOnInit(): void {

  }

}
