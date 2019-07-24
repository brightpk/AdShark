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
  paneSize = 1500; // size in px for each icon that user clicks
  device: string; // type of screen
  realtimeWidth: number;
  buttonOptions: string[] = ['default', 'primary', 'alternate'];
  // Get realtime size of right pane
  onResized(event: ResizedEvent) {
    this.realtimeWidth = event.newWidth;
    // $('iframe').css('pointer-events: none;');
    // console.log('resizing..');
    //dragSmooth();

    if (this.realtimeWidth <= 500) {
      this.device = 'Mobile';
    } else if (this.realtimeWidth <= 750) {
      this.device = 'Tablet';
    } else if (this.realtimeWidth <= 1150) {
      this.device = 'Desktop';
    } else {
      this.device = 'Wide screen';
    }
  }
/*
  // Mobile: 500px
  getMobilePane(event) {
    event.preventDefault();
    this.paneSize = 500;
  }

  // Desktop: 750px
  getTabletPane(event) {
    event.preventDefault();
    this.paneSize = 750;
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
*/
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
