import { PreviewD1Component } from './preview-D1/preview-D1.component';
import { PreviewA1Component } from './preview-A1/preview-A1.component';
import { Component, HostListener, ViewChild } from '@angular/core';
import { AppData } from './AppData';
import { ResizedEvent } from 'angular-resize-event';
import { MatTabChangeEvent } from '@angular/material';

// import jquery = require('jquery');
// const $: JQueryStatic = jquery;
declare var $: any;

// declare const insertD1: any;
// declare const insertA1: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  @ViewChild(PreviewD1Component, {static: false}) D1Component: PreviewD1Component;
  @ViewChild(PreviewA1Component, {static: false}) A1Component: PreviewA1Component;
  title = 'AdShark';
  data = new AppData('', '', '', '', '', '', '', ''); // object to store inputs and pass around to ads
  altLogo = ''; // variable for alternate logo
  button = ''; // variable for changing button
  device = ''; // type of screen
  paneSize: number; // size in px for each icon that user clicks
  rightWidth: number;
  leftWidth: number;
  showCode = false;
  OutputCode: string;
  D1Code = '';
  A1Code = '';
  tabClick = 0;

  buttonOptions: any = [
    { type: 'default', name: 'Solid/Blue' },
    { type: 'primary', name: 'Clear/White' },
    { type: 'alternate', name: 'Clear/Blue' }
  ];

  getD1Code(code) {
    this.D1Code = code;
    this.OutputCode = code;
  }

  getA1Code(code) {
    this.A1Code = code;
    this.OutputCode = code;
  }

  onTabClick(e: MatTabChangeEvent) {
    if (e.index === 0) {
      this.OutputCode = this.D1Code;
      this.tabClick = e.index;
      console.log(e.index);

    } else if (e.index === 1) {
      this.OutputCode = this.A1Code;
      this.tabClick = e.index;
      console.log(e.index);
    }
  }

  /* Size right pane */
  onResizedRight(event: ResizedEvent) {
    this.rightWidth = event.newWidth;
    $('iframe').css('width', this.rightWidth);

    if (this.rightWidth <= 500) {
      this.device = 'Mobile';
      $('iframe').css('height', 1150);

    } else if (this.rightWidth <= 1024) {
      this.device = 'Tablet';
      $('iframe').css('height', 1150);

    } else if (this.rightWidth <= 1280) {
      this.device = 'Desktop';
      $('iframe').css('height', 400);

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
