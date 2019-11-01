import { Component, ViewEncapsulation, Input, DoCheck } from '@angular/core';
import { D1Data } from 'src/app/models/D1Data';
import { ID1Iframe } from 'src/app/interfaces/ID1Iframe';
import { AppCss } from 'src/app/AppCss';
import { MatSnackBar } from '@angular/material';

declare const download: any;
declare const copy: any;

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-preview-D1',
  templateUrl: './preview-D1.component.html',
  styleUrls: ['./preview-D1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PreviewD1Component implements DoCheck, ID1Iframe {
  @Input() d1Data: D1Data;

  D1iframeCode: string;
  outputCode: string;
  css = new AppCss();

  constructor(private snackBar: MatSnackBar) { }

  ngDoCheck(): void {
    this.insertGlobalcss(this.css.getGlobalCSS());
    this.insertbg(this.d1Data.data.parameterValues['DE:Image path for 1/3 banner']);
    this.generateCode();
  }

  openSnackBar(msg: string, action: string, time: number) {
    this.snackBar.open(msg, '', { duration: time });
  }

  openWindow(data, event) {
    event.preventDefault();
    window.open(this.d1Data.data.parameterValues['DE:CTA URL']);
  }

  generateCode() {
    try {
      const tmp = $('.D1-template').html();

      this.outputCode = tmp;

      this.D1iframeCode = $('.text-wrap').html();
      this.insertCodeBlock(this.D1iframeCode);

    } catch (err) {}
  }

  insertGlobalcss(css: string): void {
    $('.D1-iframe').contents().find('#globalcss').html(css);
  }
  insertCodeBlock(code: string): void {
    $('.D1-iframe').contents().find('#D1HTML').html(code);
  }
  insertbg(img: string): void {
    const defaultImg = 'https://images.americanhotel.com/images/banners/D1-placeholder.jpg';
    if (img !== '') {
      $('.D1-iframe').contents().find('#D1bg').attr('src', img);
    } else {
      $('.D1-iframe').contents().find('#D1bg').attr('src', defaultImg);
    }
  }

    /* Copy code */
    onCopy(codeType) {
      let code = '';
      if (codeType === 'plain') {
        code = this.outputCode;
      } else if (codeType === 'impex') {
        code = $('code#impex-code').text();
      }
      copy(code);
    }

    onDownload(filename, type) {
      if (type === 'html') {
        download(filename, this.outputCode);
      } else if (type === 'impex') {
        const impex = $('code#impex-code').text();
        download(filename, impex);
      }
    }

}
