import { Component, Input, Output, EventEmitter, ViewEncapsulation, DoCheck } from '@angular/core';
import { AppData } from '../AppData';
import { MatSnackBar } from '@angular/material';

declare const insertEmail: any;
declare const insertbg: any;
declare const insertLogo: any;
declare const insertCalloutBar: any;
declare const download: any;
declare var $: any;

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
  @Input() calloutBar: string;
  // @Output() emailCode = new EventEmitter();
  emailiframeCode: string;
  outputCode: string;
  previousHeadColor = '';
  previousParaColor = '';
  bar = '';

  constructor(private snackBar: MatSnackBar) {}

  ngDoCheck() {
    insertbg(this.data.bgURL, 'email');
    insertLogo(this.data.logoURL, 'email');

    if (this.calloutBar === 'sale') {
      this.bar = $('.callout-sale').html();
    } else if (this.calloutBar === 'no sale') {
      this.bar = $('.callout-nosale').html();
    } else {
      this.bar = '';
    }
    insertCalloutBar(this.bar);

    if (this.txtColor[0].color !== this.previousHeadColor) {
      this.setHeadcolor(this.txtColor[0].color);
    }
    if (this.txtColor[2].color !== this.previousParaColor) {
      this.setParacolor(this.txtColor[2].color);
    }

    this.getHTML();
  }

  openSnackBar(msg: string, action: string, time: number) {
    this.snackBar.open(msg, '', { duration: time });
  }

  openWindow(data, event) {
    event.preventDefault();
    window.open(data.buttonURL);
  }

  getHTML() {
    let tmp: string;
    // tmp = $('div.preheader').parent().html();
    // tmp = $('div.preheader').parents('div#email').html();
    tmp = $('.email-template').find('tr').html();

    this.setHeadcolor(this.txtColor[0].color);
    this.setParacolor(this.txtColor[2].color);

    try {

      if ($('.headline').parent().html() !== undefined) {
        tmp = this.rgbToHexHeadline();
        tmp = this.rgbToHexPara(tmp);
      }

      /* Remove callout bar if not chosen  */
      if (this.calloutBar === 'none') {
        const str1 = tmp.substring(tmp.search('<tr class="callout-nosale'), tmp.search('<tr class="bg-image'));
        const str2 = tmp.substring(tmp.search('<tr class="callout-sale'), tmp.search('<tr class="callout-nosale'));
        tmp = tmp.replace(str1, '');
        tmp = tmp.replace(str2, '');

      } else if (this.calloutBar === 'sale') {
        const str = tmp.substring(tmp.search('<tr class="callout-nosale'), tmp.search('<tr class="bg-image'));
        tmp = tmp.replace(str, '');

      } else if (this.calloutBar === 'no sale') {
        const str = tmp.substring(tmp.search('<tr class="callout-sale'), tmp.search('<tr class="callout-nosale'));
        tmp = tmp.replace(str, '');
      }

      /* Remove button code if not chosen  */
      if (this.button === '' || this.button === 'none') {
        const str1 = tmp.substring(tmp.search('blue-btn') - 11, tmp.search('wht-btn') - 11);
        const str2 = tmp.substring(tmp.search('wht-btn') - 11, tmp.search('logo') - 11);
        tmp = tmp.replace(str1, '');
        tmp = tmp.replace(str2, '');

      } else if (this.button === 'default') {
        const str = tmp.substring(tmp.search('wht-btn') - 11, tmp.search('logo') - 11);
        tmp = tmp.replace(str, '');

      } else if (this.button === 'alternate') {
        const str = tmp.substring(tmp.search('blue-btn') - 11, tmp.search('wht-btn') - 11);
        tmp = tmp.replace(str, '');

      }

      this.outputCode = tmp;
      this.emailiframeCode = tmp;

      // this.emailCode.emit(tmp);

      if (this.emailiframeCode.includes('target="_blank"')) {
        this.emailiframeCode = this.emailiframeCode.replace(new RegExp('target="_blank"', 'g'), '');
        // this.HTMLCode = this.HTMLCode.replace(new RegExp('href="#"', 'g'), 'href=""');
      }

      this.emailiframeCode = this.emailiframeCode.substring(this.emailiframeCode.search('<tr class="start-headline"'), this.emailiframeCode.search('<tr class="logo"'));

      insertEmail(this.emailiframeCode);

    } catch (err) { }

  }

  /* Set headline color */
  setHeadcolor(color) {
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

  /* Set paragraph color */
  setParacolor(color) {
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

  rgbToHexHeadline() {
    const str = $('.headline').parent().html();
    let res: string;

    if ($('.headline').parent().html().includes('rgb(0, 93, 163)')) {
      const tmp = $('.headline').parent().html().replace('rgb(0, 93, 163)', '#005da3');
      res = $('.email-template').html().replace(str, tmp);

    } else if ($('.headline').parent().html().includes('rgb(30, 30, 30)')) {
      const tmp = $('.headline').parent().html().replace('rgb(30, 30, 30)', '#1e1e1e');
      res = $('.email-template').html().replace(str, tmp);

    } else if ($('.headline').parent().html().includes('rgb(237, 26, 59)')) {
      const tmp = $('.headline').parent().html().replace('rgb(237, 26, 59)', '#ed1a3b');
      res = $('.email-template').html().replace(str, tmp);
    }

    return res;

  }

  rgbToHexPara(output) {
    let paraHex: string;
    const paraTmp = output.substring( output.indexOf('p-medium') + 132, output.indexOf('p-medium') + 149 );

    if (paraTmp === 'rgb(0, 93, 163); ') {
      paraHex = output.replace(paraTmp, '#005da3; ');

    } else if (paraTmp === 'rgb(30, 30, 30); ') {
      paraHex = output.replace(paraTmp, '#1e1e1e; ');

    } else if (paraTmp === 'rgb(237, 26, 59);') {
      paraHex = output.replace(paraTmp, '#ed1a3b;');
    }

    return paraHex;
  }

  /* Copy code */
  onCopy(codeType) {
    let copyCode = '';
    if (codeType === 'plain') {
      copyCode = this.outputCode;
    } else if (codeType === 'silverpop') {
      copyCode = $('code#silverpop-code').text();
    }

    let txtarea: any;
    txtarea = document.createElement('textarea');
    txtarea.style.position = 'fixed';
    txtarea.style.left = '0';
    txtarea.style.top = '0';
    txtarea.style.opacity = '0';
    txtarea.value = copyCode;
    document.body.appendChild(txtarea);
    txtarea.focus();
    txtarea.select();
    document.execCommand('copy');
    document.body.removeChild(txtarea);
  }

  onDownload(filename, type) {
    if (type === 'html') {
      download(filename, this.outputCode);
    } else if (type === 'silverpop') {
      const impex = $('code#silverpop-code').text();
      download(filename, impex);
    }
  }


}
