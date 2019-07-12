import { Component } from '@angular/core';
import { AppData } from './AppData';

// import jquery = require('jquery');
// const $: JQueryStatic = jquery;

// declare const changeButton: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  public innerWidth: any;
  title = 'AdShark';
  data = new AppData('', '', '', '', '', '', '', ''); // object to store inputs and pass around to ads
  altLogo: string; // variable for alternate logo
  button: string; // variable for changing button
  paneSize = 1600; // size in px for each icon that user clicks

  // size > 1350px
  getMobilePane(event) {
    event.preventDefault();
    this.paneSize = 500;
  }

  // 750px
  getTabletPane(event) {
    event.preventDefault();
    this.paneSize = 1000;
  }

  // 1150px
  getDesktopPane(event) {
    event.preventDefault();
    this.paneSize = 1500;
  }

  // 1350px
  getWideScreenPane(event) {
    event.preventDefault();
    this.paneSize = 2800;
  }

  // change the button style
  changeButton(value) {
    console.log(value);
    this.button = 'btn btn--' + value;
  }

  onDragStart({sizes}) {
    console.log('Start: ', sizes[1]);
  }

  onDragEnd({sizes}) {
    console.log('End: ', sizes[1]);
  }

  // get a logo name to insert in HTML
  getAlterLogo(data) {
    let lst: string[] = [];
    if (data.logoURL !== null) {
      let tmp = data.logoURL;
      lst = tmp.split('/');
      tmp = lst[lst.length - 1];
      const i = lst[lst.length - 1].indexOf('-logo');
      tmp = tmp.substring(0, i);
      this.altLogo = tmp.charAt(0).toUpperCase() + tmp.slice(1);
    }
    console.log('AltLogo: ', this.altLogo);
  }
}
