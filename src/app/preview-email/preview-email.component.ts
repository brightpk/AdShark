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
  previousHeadColor = '';
  previousParaColor = '';

  ngDoCheck() {
    if (this.txtColor[0].color !== this.previousHeadColor) {
      this.getHeadColor(this.txtColor[0].color);
    }
    if (this.txtColor[2].color !== this.previousParaColor) {
      this.getParaColor(this.txtColor[2].color);
    }
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
    this.getHeadColor(this.txtColor[0].color);
    this.getParaColor(this.txtColor[2].color);

    try {

      if (tmp.includes('btn--')) {
        const str = tmp.substring(tmp.search('btn--'), tmp.search('c-hero__action'));
        const res = tmp.replace(str, 'btn--' + this.button + ' ');
        tmp = res;
        this.HTMLCode = tmp;
      }

      tmp = this.rgbToHex(tmp);
      this.HTMLCode = tmp;
      this.emailCode.emit(tmp);
      insertEmail(this.HTMLCode);

    } catch (err) { }

  }

  /* Headline color */
  getHeadColor(color) {
    switch (color) {
      case 'blue':
        $('td').find('.headline').css('color', '#005da3'); // rgb(0, 93, 163)
        this.previousHeadColor = 'blue';
        break;
      case 'black':
        $('td').find('.headline').css('color', '#1e1e1e'); // rgb(30, 30, 30)
        this.previousHeadColor = 'black';
        break;
      case 'red':
        $('td').find('.headline').css('color', '#ed1a3b'); // rgb(237, 26, 59)
        this.previousHeadColor = 'red';
        break;
    }

  }

  /* Paragraph color */
  getParaColor(color) {
    switch (color) {
      case 'blue':
        $('td').find('.p-medium').css('color', '#005da3');
        this.previousParaColor = 'blue';
        break;
      case 'black':
        $('td').find('.p-medium').css('color', '#1e1e1e');
        this.previousParaColor = 'black';
        break;
      case 'red':
        $('td').find('.p-medium').css('color', '#ed1a3b');
        this.previousParaColor = 'red';
        break;
    }
  }

  rgbToHex(output) {
    let res: string;
    for (let i = 0; i < 4; i++) {
      const hdTmp = output.substring( output.indexOf('headline') + 279, output.indexOf('headline') + 296 );
      // console.log('Headline Color', hdTmp);

      const paraTmp = output.substring( output.indexOf('p-medium') + 131, output.indexOf('p-medium') + 148 );
      // console.log('Paragraph Color:', paraTmp);

      // console.log(hdTmp.includes('rgb(0, 93, 163)'));
      // console.log(hdTmp.includes('rgb(30, 30, 30)'));
      // console.log(hdTmp.includes('rgb(237, 26, 59)'));

      if (hdTmp.includes('rgb(0, 93, 163)')) {
        res = output.replace(hdTmp, '#005da3; ');
        // console.log('HEAD:', res.substring( res.indexOf('headline') + 279, res.indexOf('headline') + 296 ));
      } else if (hdTmp.includes('rgb(30, 30, 30)')) {
        res = output.replace(hdTmp, '#1e1e1e; ');
        // console.log('HEAD:', res.substring( res.indexOf('headline') + 279, res.indexOf('headline') + 296 ));
      } else if (hdTmp.includes('rgb(237, 26, 59)')) {
        res = output.replace(hdTmp, '#ed1a3b;');
        // console.log('HEAD:', res.substring( res.indexOf('headline') + 279, res.indexOf('headline') + 296 ));
      }

      return res;
    }
  }


}
