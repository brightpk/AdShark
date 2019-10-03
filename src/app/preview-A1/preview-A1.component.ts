import { Component, Input, Output, EventEmitter, ViewEncapsulation, DoCheck } from '@angular/core';
import { AppData } from '../AppData';
import { AppCss } from '../AppCss';
import { MatSnackBar } from '@angular/material';

declare const insertA1: any;
declare const insertbg: any;
declare const insertLogo: any;
declare const insertWhiteBGLogo: any;
declare const insertGlobalcss: any;
declare const download: any;
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
  @Input() logoSize: string;
  @Input() txtColor: any = [];
  @Input() whiteBGLogo: boolean;
  @Input() textAlign: string;
  @Input() logoAlign: string;
  // @Output() A1Code = new EventEmitter();
  defaultBg = 'https://images.americanhotel.com/images/banners/A1-placeholder-widescreen.jpg';
  buttonLink: string;
  A1iframeCode: string;
  outputCode: string;
  impexCode: string;
  prevTextAlign = 'left'; prevLogoAlign = 'left'; prevLogoSize = 'small';
  css = new AppCss();

  constructor(private snackBar: MatSnackBar) {}

  ngDoCheck() {
    insertGlobalcss(this.css.getGlobalCSS);
    // this.data.bgURL === '' ? insertbg(this.defaultBg, 'A1') : insertbg(this.data.bgURL, 'A1');
    insertbg(this.data.bgURL, 'A1')

    insertLogo(this.data.logoURL, 'A1');
    insertWhiteBGLogo(this.whiteBGLogo, 'A1');

    $('.A1-iframe ').contents().find('#A1logo').removeClass(this.prevLogoAlign).addClass(this.logoAlign);
    $('.A1-iframe ').contents().find('#A1logo').removeClass(this.prevLogoSize).addClass(this.logoSize);

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
    tmp = $('.A1-template').html();
    let tmpButtonTxt = this.data.buttonTxt;

    try {

      /* Text alignment */
      if (this.textAlign !== this.prevTextAlign) {
        const len = this.prevTextAlign.length;
        const str = tmp.substring( tmp.search('c-hero__copy--align-') + 20, tmp.search('c-hero__copy--align-') + 20 + len);
        const res = tmp.replace(str, this.textAlign);
        this.prevTextAlign = this.textAlign;
        tmp = res;
      }

      /* Logo alignment */
      if (this.logoAlign !== this.prevLogoAlign) {
        // $('.A1-iframe ').contents().find('#A1logo').removeClass(this.prevLogoAlign).addClass(this.logoAlign);
        const str = $('.a1-supplier-logo').html();
        const str1 = $('.a1-supplier-logo').html().replace(this.prevLogoAlign, this.logoAlign);
        const res = $('.A1-template').html().replace(str, str1);
        this.prevLogoAlign = this.logoAlign;
        tmp = res;
      }

      /* Logo size class  */
      if (this.logoSize !== this.prevLogoSize) {
        const str = $('.a1-supplier-logo').html();
        const str1 = $('.a1-supplier-logo').html().replace(this.prevLogoSize, this.logoSize);
        const res = $('.A1-template').html().replace(str, str1);
        this.prevLogoSize = this.logoSize;
        tmp = res;
      }

      /* Button Type */
      if (tmp.includes('btn--')) {
        const str = tmp.substring(tmp.search('btn--'), tmp.search('c-hero__action'));
        const res = tmp.replace(str, 'btn--' + this.button + ' ');
        tmp = res;
      }

      /* If no button, comment out */
      if (this.button === 'none') {
        const str = tmp.substring(tmp.search('btn') - 28, tmp.search('/a') + 9);
        const res = tmp.replace(str, '');
        tmp = res;
        tmpButtonTxt = '';
      }

      /* Button link path */
      if (this.data.buttonURL.startsWith('https://www.americanhotel.com') || this.data.buttonURL.startsWith('www.americanhotel.com')) {
        const url = this.data.buttonURL;
        let lst: string[] = url.split('www.americanhotel.com');
        const str = tmp.substring(tmp.search('href') + 6, tmp.search('a1-supplier-logo') - 42);
        this.buttonLink = lst[1];
      } else {
        this.buttonLink = this.data.buttonURL;
      }

      /* Headline Color */
      if (tmp.includes('c-hero__title--')) {
        const str = tmp.substring(tmp.search('c-hero__title--'), tmp.indexOf('c-hero__title--') + 20);
        const res = tmp.replace(str, 'c-hero__title--' + this.txtColor[0].color + ' ');
        tmp = res;
      }

      /* Subline Color */
      if (tmp.includes('c-hero__sub-title--')) {
        const str = tmp.substring(tmp.search('c-hero__sub-title--'), tmp.indexOf('c-hero__sub-title--') + 24);
        const res = tmp.replace(str, 'c-hero__sub-title--' + this.txtColor[1].color + ' ');
        tmp = res;
      }

      /* if no headline, comment out */
      if (this.data.headline === '') {
        const start = tmp.indexOf('h2');
        const end = tmp.indexOf('h2>');
        const str = tmp.substring(start - 1, end + 3);
        const res = tmp.replace(str, '');
        tmp = res;
      }

      /* if no subline, comment out */
      if (this.data.subline === '') {
        const start = tmp.indexOf('h3');
        const end = tmp.indexOf('h3>');
        const str = tmp.substring(start - 1, end + 3);
        const res = tmp.replace(str, '');
        tmp = res;
      }

      this.outputCode = this.css.getA1CSS() + ' <!-- Homepage A1 Ad -->' + tmp + ' <!-- Homepage A1 Ad -->';
      // this.A1Code.emit(tmp);

      this.impexCode = tmp.replace(/"/g, '""');

      this.A1iframeCode =
      '<div class="c-hero__copy c-hero__copy--align-' + this.textAlign + '">' +
      '<h2 class="c-hero__title c-hero__title--' + this.txtColor[0].color + ' c-hero__title--weight-extrabold c-hero__title--size-large">' + this.data.headline + '</h2>' +
      '<h3 class="c-hero__sub-title c-hero__sub-title--' + this.txtColor[1].color + ' c-hero__sub-title--weight-regular c-hero__sub-title--size-normal">' + this.data.subline + '</h3>' +
      '<div class="mt-2"><a class="btn btn--' + this.button + ' c-hero__action" href="' + this.data.buttonURL + '">' + tmpButtonTxt + '</a></div></div>';
      
      this.A1iframeCode = this.getScript(this.A1iframeCode);
      insertA1(this.A1iframeCode);

    } catch (err) { }

  }

  /* add srcet in html for each breakpoint */
  addSrcset(src): string {
    let srcset = this.data.bgURL;
    const str = srcset.substring(srcset.search('widescreen'), srcset.search('widescreen') + 10);
    srcset = srcset.replace(str, src);
    return srcset;
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

