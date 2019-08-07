import { Component, Input, ViewEncapsulation, Output, EventEmitter, DoCheck } from '@angular/core';
import { AppData } from '../AppData';

declare const insertD1: any;
declare var $: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-preview-D1',
  templateUrl: './preview-D1.component.html',
  styleUrls: ['./preview-D1.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class PreviewD1Component implements DoCheck {
  @Input() data: AppData;
  @Input() altLogo: string;
  @Input() button: string;
  @Input() device: string;
  @Input() logoWidth: number;
  @Input() disabledButton: boolean;
  @Input() txtColor: any = [];
  @Output() D1Code = new EventEmitter();
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
    // $('.resize-sensor').remove(); // this.D1Code.emit(tmp);
    let tmp: string;
    tmp = $('.D1-template').children().html();

    try {
      /* Button Type */
      if (tmp.includes('btn--')) {
        const str = tmp.substring(tmp.search('btn--'), tmp.search('c-hero__action'));
        const res = tmp.replace(str, 'btn--' + this.button + ' ');
        tmp = res;
        this.HTMLCode = tmp;
      }

      /* If no button, comment out */
      if (this.button === 'none') {
        const str = tmp.substring(tmp.search('btn') - 12, tmp.search('/a') + 9);
        const res = tmp.replace(str, '');
        tmp = res;
      }

      /* Headline Color */
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

      /* if no headline, comment out */
      if (this.data.headline === '') {
        const start = tmp.indexOf('h2');
        const end = tmp.indexOf('h2>');
        const str = tmp.substring(start - 1, end + 3);
        const res = tmp.replace(str, '');
        tmp = res;
        this.HTMLCode = tmp;
      }

      /* if no subline, comment out */
      if (this.data.subline === '') {
        const start = tmp.indexOf('h3');
        const end = tmp.indexOf('h3>');
        const str = tmp.substring(start - 1, end + 3);
        const res = tmp.replace(str, '');
        tmp = res;
        this.HTMLCode = tmp;
      }

    // if no paragraph
      // if (this.data.para === '') {
      //   const start = tmp.indexOf('h4');
      //   const end = tmp.indexOf('h4>');
      //   const str = tmp.substring(start - 1, end + 3);
      //   const res = tmp.replace(str, '');
      //   tmp = res;
      //   this.HTMLCode = tmp;
      // }

      // erase addition code for resize-sensor
      // if (tmp.includes('dir')) {
      //   const i = tmp.indexOf('dir');
      //   tmp = tmp.substring(0, i - 5) + '</div></div></div>';
      //   this.HTMLCode = tmp;
      // }

      // this.HTMLCode = tmp;
      // this.HTMLCode = this.addHTTP(this.HTMLCode);
      // insertD1(this.HTMLCode);
      // this.HTMLCode = this.removeTarget(tmp);
      // this.D1Code.emit(this.HTMLCode);

      this.HTMLCode = tmp;
      this.HTMLCode = this.changeHref(this.HTMLCode);
      insertD1(this.HTMLCode);
      this.D1Code.emit(tmp);

  } catch (err) { }

  }

  changeHref(html) {
    let res: string;
    // console.log(html.substring(html.search('href'), html.search('title="') - 1));
    const str = html.substring(html.search('href'), html.search('title="') - 1);
    res = html.replace(str, 'href="#"');
    return res;
  }

    /* Remove target="_new" */
  // removeTarget(html) {
  //   let res: string;
  //   const target = html.substring(html.search('target') , html.search('target') + 13);
  //   res = html.replace(target, '');
  //   return res;
  // }

  // addHTTP(html) {
  //   let res: string;
  //   if (this.data.buttonURL.startsWith('www.')) {
  //     const tmp = 'https://' + this.data.buttonURL;
  //     const link = html.substring(html.search('www.') , html.search('le=') - 5);
  //     res = html.replace(link, tmp);
  //   }
  //   return res;
  // }

}
