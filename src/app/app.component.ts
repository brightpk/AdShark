import { Component } from '@angular/core';
import { AppData } from './AppData';
import { ResizedEvent } from 'angular-resize-event';
import { MatTabChangeEvent } from '@angular/material';

// import jquery = require('jquery');
// const $: JQueryStatic = jquery;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'AdShark';
  data = new AppData('', '', '', '', '', '', '', '#'); // object to store inputs and pass around inside ads
  altLogo = ''; // variable for alternate logo
  button = ''; // variable for changing button
  device = ''; // type of screen
  headColor = 'blue';
  subColor = 'blue';
  paneSize: number; // size in px for each icon that users click
  rightWidth: number;
  leftWidth: number;
  OutputCode: string;
  showCode = false;
  tabClick = 0;

  listofColor = ['blue', 'black', 'white'];

  previewCode: any = [
    { section: 'D1', code: '' },
    { section: 'A1', code: '' }
    // { section: 'email', code: '' }
  ];

  buttonOptions: any = [
    { type: 'default', name: 'Solid/Blue' },
    { type: 'primary', name: 'Clear/White' },
    { type: 'alternate', name: 'Clear/Blue' }
  ];

  /* Check the text color */
  changeColor(value) {
    console.log('Headline color: ', this.headColor);
    console.log('Subline color: ', this.subColor);
  }

  /* Check the button style */
  changeButton(event) {
    console.log('Button type: ' , event.value);
  }

  /* Receive code from children */
  receiveCode(section, code) {
    switch (section) {
      case 'D1':
        this.previewCode.D1 = code;
        this.OutputCode = code;
        break;

      case 'A1':
        this.previewCode.A1 = code;
        this.OutputCode = code;
        break;

      default:
        this.OutputCode = '';
    }
  }

  /* Check what tab is on */
  onTabClick(e: MatTabChangeEvent) {
    switch (e.index) {
      case 0:
        this.OutputCode = this.previewCode.D1;
        this.tabClick = e.index;
        console.log(e.index);
        break;

      case 1:
        this.OutputCode = this.previewCode.A1;
        this.tabClick = e.index;
        console.log(e.index);
        break;

      default:
          this.OutputCode = '';
      }
    }

  /* Size right pane */
  onResizedRight(event: ResizedEvent) {
    this.rightWidth = event.newWidth;
    $('iframe').css('width', this.rightWidth);

    if (this.rightWidth <= 500) {
      this.device = 'Mobile';

      $('iframe').css('height', 1150);
      if (this.tabClick === 1) {
        $('iframe').css('height', 420);
      }

    } else if (this.rightWidth <= 1024) {
      this.device = 'Tablet';

      $('iframe').css('height', 1150);
      if (this.tabClick === 1) {
        $('iframe').css('height', 420);
      }

    } else if (this.rightWidth <= 1280) {
      this.device = 'Desktop';
      $('iframe').css('height', 400);

    } else {
      this.device = 'Wide screen';
      $('iframe').css('height', 400);
    }

  }

  /* Size left pane */
  onResizedLeft(event: ResizedEvent) {
    this.leftWidth = event.newWidth;
  }

  /* Set size of pane each device */
  setPaneSize(event, device) {
    switch (device) {
      case 'mobile':
        this.paneSize = 500;
        break;

      case 'tablet':
        event.preventDefault();
        this.paneSize = 700;
        break;

      case 'desktop':
        event.preventDefault();
        this.paneSize = 1150;
        break;

      case 'widescreen':
        event.preventDefault();
        this.paneSize = 1350;
        break;

      default:
    }
  }

  /* Get a alternate logo name */
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

  /* Copy code */
  copyCode() {
    if (this.OutputCode == null) {
      alert('Please click "GENERATE CODE" before copying');
    }
    let txtarea: any;
    txtarea = document.createElement('textarea');
    txtarea.style.position = 'fixed';
    txtarea.style.left = '0';
    txtarea.style.top = '0';
    txtarea.style.opacity = '0';
    txtarea.value = this.OutputCode;
    document.body.appendChild(txtarea);
    txtarea.focus();
    txtarea.select();
    document.execCommand('copy');
    document.body.removeChild(txtarea);
  }
}
