import { Component, Input, ViewEncapsulation, DoCheck  } from '@angular/core';
import { AppData } from '../AppData';
import { AppCss } from '../AppCss';
import { MatSnackBar } from '@angular/material';

declare const insertGlobalcss: any;
declare const insertLogo: any;
declare const insertHeadline: any;
declare const insertProductNames: any;
declare const insertProductImages: any;
declare const insertSeasonal: any;
declare const download: any;
declare var $: any;

@Component({
  selector: 'app-preview-seasonal',
  templateUrl: './preview-seasonal.component.html',
  styleUrls: ['./preview-seasonal.component.css']
})
export class PreviewSeasonalComponent implements DoCheck {
  @Input() data: AppData;
  @Input() seasonalData: any;
  @Input() altLogo: string;
  @Input() button: string;
  @Input() device: string;
  @Input() logoSize: string;
  @Input() txtColor: any = [];
  @Input() whiteBGLogo: boolean;
  @Input() textAlign: string;
  @Input() logoAlign: string;
  // @Output() SeasonalCode = new EventEmitter();
  buttonLink: string;
  SeasonaliframeCode: string;
  outputCode: string;
  impexCode: string;
  css = new AppCss();

  constructor(private snackBar: MatSnackBar) {}

  ngDoCheck() {
    insertGlobalcss(this.css.getGlobalCSS);
    insertLogo(this.data.logoURL, 'Seasonal');
    insertProductImages(this.seasonalData);
    insertHeadline(this.data.headline);
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
    tmp = $('.Seasonal-template').html();

    try {

      this.outputCode = tmp;

      // this.SeasonaliframeCode = this.outputCode;

      this.impexCode = tmp.replace(/"/g, '""');

      this.SeasonaliframeCode =
      '<h5 class="text-center">' + this.data.subline + '</h5>' +
      '<p class="text-white">' + this.data.para + '</p>' +
      '<a href="' + this.data.buttonURL + '" class="btn btn--secondary">' + this.data.buttonTxt + '</a>';

      this.SeasonaliframeCode = this.getScript(this.SeasonaliframeCode);
      insertSeasonal(this.SeasonaliframeCode);

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
