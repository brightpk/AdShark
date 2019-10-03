import { Component, Input, Output, EventEmitter, ViewEncapsulation, DoCheck } from '@angular/core';
import { AppData } from '../AppData';
import { AppCss } from '../AppCss';
import { MatSnackBar } from '@angular/material';

declare const insertGlobalcss: any;
declare const insertCodeBlock: any;
declare const insertLogo: any;
declare const insertWidth: any;
declare const insertWhiteBGLogo: any;
declare const insertSeasonalHeadline: any;
declare const insertProductNames: any;
declare const insertProductImages: any;
declare const download: any;
declare var $: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-preview-seasonal',
  templateUrl: './preview-seasonal.component.html',
  styleUrls: ['./preview-seasonal.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PreviewSeasonalComponent implements DoCheck {
  @Input() data: AppData;
  @Input() seasonalData: any;
  @Input() altLogo: string;
  @Input() button: string;
  @Input() device: string;
  @Input() logoWidth: number;
  @Input() txtColor: any = [];
  @Input() whiteBGLogo: boolean;
  // @Output() SeasonalCode = new EventEmitter();
  buttonLink: string;
  seasonaliframeCode: string;
  outputCode: string;
  impexCode: string;
  css = new AppCss();

  constructor(private snackBar: MatSnackBar) {}

  ngDoCheck() {
    insertGlobalcss(this.css.getGlobalCSS);
    insertLogo(this.data.logoURL, 'seasonal');
    insertWidth(this.logoWidth);
    insertWhiteBGLogo(this.whiteBGLogo, 'seasonal');
    insertProductImages(this.seasonalData);
    insertSeasonalHeadline(this.data.headline);
    insertProductNames(this.seasonalData);

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
    tmp = $('.seasonal-template').html();

    try {

      this.outputCode = tmp;

      // this.SeasonaliframeCode = this.outputCode;

      this.impexCode = tmp.replace(/"/g, '""');

      this.seasonaliframeCode =
      '<h5 class="text-center">' + this.data.subline + '</h5>' +
      '<p class="text-white">' + this.data.para + '</p>' +
      '<a href="' + this.data.buttonURL + '" class="btn btn--secondary">' + this.data.buttonTxt + '</a>';

      this.seasonaliframeCode = this.getScript(this.seasonaliframeCode);
      insertCodeBlock(this.seasonaliframeCode, 'seasonal');

    } catch (err) { }

  }

  /* Prevent default from clicking iframe button */
  getScript(html) {
    return '<script>$( document ).ready(function() { $(\'a.btn\').click(function(e) { e.preventDefault(); }); }); </script>' + html;
  }

  /* Copy code */
  onCopy(codeType) {
    let copyCode = '';
    if (codeType === 'plain') {
      copyCode = this.outputCode;
    } else if (codeType === 'impex') {
      copyCode = $('code#impex-code').text();
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
    } else if (type === 'impex') {
      const impex = $('code#impex-code').text();
      download(filename, impex);
    }
  }

}

