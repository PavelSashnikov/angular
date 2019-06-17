import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

data = {
  menu:{
    catalog: "каталог",
    service: "сервис",
    about: "о нас",
  }
}

  constructor() { }

}
