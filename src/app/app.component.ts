import { Component, HostListener } from '@angular/core';
import { AppData } from './AppData';

// import jquery = require('jquery');
// const $: JQueryStatic = jquery;

declare const openNewWindowLink: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AdShark';
  data = new AppData('', '', '', '', '', '', '', '');
  altLogo: string;
  paneSize = 1600;

  getMobilePane(event) {
    event.preventDefault();
    this.paneSize = 500;
  }

  getTabletPane(event) {
    event.preventDefault();
    this.paneSize = 1000;
  }

  getDesktopPane(event) {
    event.preventDefault();
    this.paneSize = 1500;
  }

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
    console.log(this.paneSize);
  }


}
