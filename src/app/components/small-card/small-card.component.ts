import { Component, OnInit, Input } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{
  @Input()
  fotoCover: string = ""
  @Input()
  cardTitle: string = ""
  @Input()
  id: string = "0"

  constructor(){}

  ngOnInit(): void {

  }
}
