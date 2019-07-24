import { Component, HostListener } from '@angular/core';
import { AppData } from './AppData';
import { ResizedEvent } from 'angular-resize-event';

// import jquery = require('jquery');
// const $: JQueryStatic = jquery;

declare const dragSmooth: any;

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
  button = ''; // variable for changing button
  paneSize: number; // size in px for each icon that user clicks
  device: string; // type of screen
  rightWidth: number;
  leftWidth: number;
  buttonOptions: string[] = ['default', 'primary', 'alternate'];

  /* Size right pane */
  onResizedRight(event: ResizedEvent) {
    this.rightWidth = event.newWidth;
    $('iframe').css('width', this.rightWidth);

    if (this.rightWidth <= 500) {
      this.device = 'Mobile';
      $('iframe').css('height', 1150);

    } else if (this.rightWidth <= 750) {
      this.device = 'Tablet';
      $('iframe').css('height', 1150);

    } else if (this.rightWidth <= 1025) {
      this.device = 'Desktop';
      $('iframe').css('height', 1150);

    } else {
      this.device = 'Wide screen';
      $('iframe').css('height', 400);
    }

  }

  /* Size right pane */
  onResizedLeft(event: ResizedEvent) {
    this.leftWidth = event.newWidth;
  }

  // Mobile: 500px
  getMobilePane(event) {
    event.preventDefault();
    this.paneSize = 500;
  }

  // Desktop: 750px
  getTabletPane(event) {
    event.preventDefault();
    this.paneSize = 700;
  }

  // Tablet: 1150px
  getDesktopPane(event) {
    event.preventDefault();
    this.paneSize = 1150;
  }

  // Widescreen: 1350px
  getWideScreenPane(event) {
    event.preventDefault();
    this.paneSize = 1350;
  }

  // change the button style
  changeButton(value) {
    console.log('Button type: ' , value);
    this.button = 'btn btn--' + value;
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
