import { Component, Input, Output, EventEmitter, ViewEncapsulation, DoCheck } from '@angular/core';
import { AppData } from '../AppData';

declare const insertEmail: any;

@Component({
  selector: 'app-preview-email',
  templateUrl: './preview-email.component.html',
  styleUrls: ['./preview-email.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PreviewEmailComponent implements DoCheck {
  @Input() data: AppData;
  @Input() altLogo: string;
  @Input() button: string;
  @Input() device: string;
  @Input() txtColor: any = [];
  @Output() emailCode = new EventEmitter();
  HTMLCode: string;
  showCode = false;
  headlineColor = '';

  ngDoCheck() {
    this.getHTML();
  }

  openWindow(data, event) {
    event.preventDefault();
    window.open(data.buttonURL);
  }

  getHTML() {
    let tmp: string;
    // tmp = $('div.preheader').parent().html();
    // tmp = $('div.preheader').parents('div#email').html();
    tmp = $('.email-template').html();
    this.getHEXColor(this.txtColor[0].color);
    // $('.headline').css('color', this.txtColor[0].color);

    try {

      if (tmp.includes('btn--')) {
        const str = tmp.substring(tmp.search('btn--'), tmp.search('c-hero__action'));
        const res = tmp.replace(str, 'btn--' + this.button + ' ');
        tmp = res;
        this.HTMLCode = tmp;
      }

      this.HTMLCode = tmp;
      this.emailCode.emit(tmp);
      insertEmail(this.HTMLCode);

    } catch (err) { }

  }

  getHEXColor(color) {
    switch (color) {
      case 'blue':
        $('td').css('color', '#005da3');
        console.log('#005da3');
        this.headlineColor = '#005da3';
        break;
      case 'black':
        $('td').css('color', '#1e1e1e');
        console.log('#1e1e1e');
        this.headlineColor = '#1e1e1e';
        break;
      case 'red':
        $('td').css('color', '#ed1a3b');
        console.log('#ed1a3b');
        this.headlineColor = '#ed1a3b';
        break;
    }

  }

}
