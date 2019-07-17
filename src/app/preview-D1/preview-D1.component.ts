import { Component, Input, ViewContainerRef, ViewChild } from '@angular/core';
import { ElementRef, AfterViewInit } from '@angular/core';
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
  @Input() button: string;

  // htmlCode: string;

  // constructor(private view: ViewContainerRef) {
  //   setTimeout(() => this.htmlCode = (view.element.nativeElement as HTMLElement).outerHTML);
  // }

  openWindow(data, event) {
    event.preventDefault();
    window.open('https://www.americanhotel.com' + data.buttonURL);
  }
}
