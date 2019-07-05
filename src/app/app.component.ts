import { element } from 'protractor';
import { Component } from '@angular/core';
import { AppData } from './AppData';
declare const replaceNewlineToBR: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AdShark';
  data = new AppData('', '', '', '', '', '', '', '');

  addLinebreak() {
    replaceNewlineToBR();
  }

  // (keydown.enter)="onKeydown($event, data, 'headline')"
  // onKeydown(e, data, field) {
  //   switch (field) {
  //     case 'headline': {
  //       console.log('Headline: ', data.headline);
  //       // this.data.headline = data.headline + '<br>';
  //       break;
  //     }

  //     default: {
  //       console.log('Event: ', e, '\nItem: ', data);
  //       break;
  //     }
  //   }
  // }


}
