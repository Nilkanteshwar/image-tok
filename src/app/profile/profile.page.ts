import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  constructor() { }

  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark');

    }
    else{ document.body.setAttribute('color-theme','light');}


  }}

