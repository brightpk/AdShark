import { Component, Input, ViewEncapsulation, HostListener, Output, EventEmitter, DoCheck } from '@angular/core';
import { AppData } from '../AppData';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

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
  @Input() headColor: string;
  @Input() subColor: string;
  @Output() D1Code = new EventEmitter();
  HTMLCode: string;
  showCode = false;

  ngDoCheck() {
    this.getHTML();
  }

  // @HostListener('document:keyup', ['$event'])
  // keyEvent(event) {
  //   this.getHTML();
  // }

  openWindow(data, event) {
    event.preventDefault();
    window.open(data.buttonURL);
    console.log('trigger');
  }

  getHTML() {
    // $('.resize-sensor').remove();
    let tmp: string;
    tmp = $('#D1').children().html();
    // this.D1Code.emit(tmp);

    try {
      /* Button Type */
      if (tmp.includes('btn--')) {
        const str = tmp.substring(tmp.search('btn--'), tmp.search('c-hero__action'));
        const res = tmp.replace(str, 'btn--' + this.button + ' ');
        tmp = res;
        this.HTMLCode = tmp;
      }

      /* Headline Color */
      if (tmp.includes('c-hero__title--')) {
        const str = tmp.substring(tmp.search('c-hero__title--'), tmp.indexOf('c-hero__title--') + 20);
        const res = tmp.replace(str, 'c-hero__title--' + this.headColor + ' ');
        tmp = res;
        this.HTMLCode = tmp;
      }

      /* Subline Color */
      if (tmp.includes('c-hero__sub-title--')) {
        const str = tmp.substring(tmp.search('c-hero__sub-title--'), tmp.indexOf('c-hero__sub-title--') + 24);
        const res = tmp.replace(str, 'c-hero__sub-title--' + this.subColor + ' ');
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
      if (tmp.includes('dir')) {
        const i = tmp.indexOf('dir');
        tmp = tmp.substring(0, i - 5) + '</div></div></div>';
        this.HTMLCode = tmp;
      }

      this.HTMLCode = tmp;
      this.D1Code.emit(tmp);
      insertD1(this.HTMLCode, this.button);

  } catch (err) { }

  }

}
