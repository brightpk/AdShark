import { Component, Input, Output, EventEmitter, ViewEncapsulation, DoCheck } from '@angular/core';
import { AppData } from '../AppData';

declare const insertA1: any;
declare var $: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-preview-A1',
  templateUrl: './preview-A1.component.html',
  styleUrls: ['./preview-A1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PreviewA1Component implements DoCheck {
  @Input() data: AppData;
  @Input() altLogo: string;
  @Input() button: string;
  @Input() device: string;
  @Input() logoWidth: string;
  @Input() txtColor: any = [];
  @Output() A1Code = new EventEmitter();
  HTMLCode: string;
  showCode = false;

  ngDoCheck() {
    this.getHTML();
  }

  openWindow(data, event) {
    event.preventDefault();
    window.open(data.buttonURL);
  }

  getHTML() {
    let tmp: string;
    tmp = $('.A1-template').children().html();

    try {

      if (tmp.includes('btn--')) {
        const str = tmp.substring(tmp.search('btn--'), tmp.search('c-hero__action'));
        const res = tmp.replace(str, 'btn--' + this.button + ' ');
        tmp = res;
        this.HTMLCode = tmp;
      }

      if (tmp.includes('c-hero__title--')) {
        const str = tmp.substring(tmp.search('c-hero__title--'), tmp.indexOf('c-hero__title--') + 20);
        const res = tmp.replace(str, 'c-hero__title--' + this.txtColor[0].color + ' ');
        tmp = res;
        this.HTMLCode = tmp;
      }

      /* Subline Color */
      if (tmp.includes('c-hero__sub-title--')) {
        const str = tmp.substring(tmp.search('c-hero__sub-title--'), tmp.indexOf('c-hero__sub-title--') + 24);
        const res = tmp.replace(str, 'c-hero__sub-title--' + this.txtColor[1].color + ' ');
        tmp = res;
        this.HTMLCode = tmp;
      }

      // if no headline
      if (this.data.headline === '') {
        const start = tmp.indexOf('h2');
        const end = tmp.indexOf('h2>');
        const str = tmp.substring(start - 1, end + 3);
        const res = tmp.replace(str, '');
        tmp = res;
        this.HTMLCode = tmp;
      }

      // if no subline
      if (this.data.subline === '') {
        const start = tmp.indexOf('h3');
        const end = tmp.indexOf('h3>');
        const str = tmp.substring(start - 1, end + 3);
        const res = tmp.replace(str, '');
        tmp = res;
        this.HTMLCode = tmp;
      }

      this.HTMLCode = tmp;
      this.A1Code.emit(tmp);
      insertA1(this.HTMLCode);

    } catch (err) { }

  }

  addSrcset(src): string {
    let srcset = this.data.bgURL;
    const str = srcset.substring(srcset.search('widescreen'), srcset.search('widescreen') + 10);
    srcset = srcset.replace(str, src);
    return srcset;
  }
}

