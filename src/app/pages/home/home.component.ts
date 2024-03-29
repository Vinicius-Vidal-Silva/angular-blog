import { Component, OnInit } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RouterOutlet, RouterModule, MenuTitleComponent, SmallCardComponent, BigCardComponent, MenuBarComponent]
})
export class HomeComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {

  }

}
