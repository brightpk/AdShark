import { Component, Input } from '@angular/core';
import { AppData } from '../AppData';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-preview-D1',
  templateUrl: './preview-D1.component.html',
  styleUrls: ['./preview-D1.component.css'],
})
export class PreviewD1Component {
  @Input() data: AppData;
  @Input() altLogo: string;

  openWindow(data, event) {
    event.preventDefault();
    window.open('https://www.americanhotel.com' + data.buttonURL);
  }
}
