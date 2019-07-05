import { Component } from '@angular/core';
import { AppData } from './AppData';

// import jquery = require('jquery');
// const $: JQueryStatic = jquery;

declare const replaceNewlineToBR: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AdShark';
  data = new AppData('', '', '', '', '', '', '', '');

}
