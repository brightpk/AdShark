import { Component, Input } from '@angular/core';
import { AppData } from '../AppData';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-preview-A1',
  templateUrl: './preview-A1.component.html',
  styleUrls: ['./preview-A1.component.css']
})
export class PreviewA1Component {
  @Input() data: AppData;
  @Input() altLogo: string;

}
