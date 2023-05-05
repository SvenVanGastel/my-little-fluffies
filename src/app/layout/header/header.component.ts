import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  private _title: string;
  constructor() {
    this._title ='My little fluffies'
  }

  get title(){
    return this._title;
  }
}
