import { Component, Input, HostListener, Output, EventEmitter, ViewEncapsulation, DoCheck } from '@angular/core';
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
  @Output() A1Code = new EventEmitter();
  HTMLCode: string;
  showCode = false;

  ngDoCheck() {
    this.getHTML();
  }

  @HostListener('document:keyup', ['$event'])
  keyEvent(event) {
    this.getHTML();
  }

  openWindow(data, event) {
    event.preventDefault();
    window.open(data.buttonURL);
  }

  getHTML() {
    let tmp: string;
    tmp = $('#A1').children().html();

    try {

      if (tmp.includes('btn--')) {
        const str = tmp.substring(tmp.search('btn--'), tmp.search('c-hero__action'));
        const res = tmp.replace(str, 'btn--' + this.button + ' ');
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
      if (this.data.para === '') {
        const start = tmp.indexOf('h4');
        const end = tmp.indexOf('h4>');
        const str = tmp.substring(start - 1, end + 3);
        const res = tmp.replace(str, '');
        tmp = res;
        this.HTMLCode = tmp;
      }

      // erase addition code for resize-sensor
      if (tmp.includes('dir')) {
        const i = tmp.indexOf('dir');
        tmp = tmp.substring(0, i - 5) + '</div></div></div>';
        this.HTMLCode = tmp;
      }

      this.HTMLCode = tmp;
      this.A1Code.emit(tmp);
      insertA1(this.HTMLCode);

  } catch (err) { }

  }

    // copyCode() {
    //   if (this.HTMLCode == null) {
    //     alert('Please click "GENERATE CODE" before copying');
    //   }
    //   let txtarea: any;
    //   txtarea = document.createElement('textarea');
    //   txtarea.style.position = 'fixed';
    //   txtarea.style.left = '0';
    //   txtarea.style.top = '0';
    //   txtarea.style.opacity = '0';
    //   txtarea.value = this.HTMLCode;
    //   document.body.appendChild(txtarea);
    //   txtarea.focus();
    //   txtarea.select();
    //   document.execCommand('copy');
    //   document.body.removeChild(txtarea);
    // }
}

