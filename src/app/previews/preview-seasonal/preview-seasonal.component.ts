import { Component, Input, Output, EventEmitter, ViewEncapsulation, DoCheck } from '@angular/core';
import { SeasonalData } from 'src/app/models/SeasonalData';
import { MatSnackBar } from '@angular/material';
import { AppCss } from 'src/app/AppCss';
import { ISeasonalIframe } from 'src/app/interfaces/ISeasonalIframe';

declare const download: any;
declare const copy: any;
declare var $: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-preview-seasonal',
  templateUrl: './preview-seasonal.component.html',
  styleUrls: ['./preview-seasonal.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PreviewSeasonalComponent implements ISeasonalIframe, DoCheck {
  @Input() seasonalData: SeasonalData;
  @Input() altLogo: string;
  buttonLink: string;
  SeasonaliframeCode: string;
  outputCode: string;
  impexCode: string;
  css = new AppCss();

  constructor(private snackBar: MatSnackBar) {}

  ngDoCheck() {
    this.insertGlobalcss(this.css.getGlobalCSS());
    this.insertLogo(this.seasonalData.logoURL);
    this.insertLogoWidth(this.seasonalData.logoWidth);
    this.insertLogoWhiteBackground(this.seasonalData.whiteBGLogo);
    this.insertProductImages(this.seasonalData.products);
    this.insertHeadline(this.seasonalData.headline);
    this.insertProductNames(this.seasonalData.products);

    this.generateCode();
  }

  openSnackBar(msg: string, action: string, time: number) {
    this.snackBar.open(msg, '', { duration: time });
  }

  openWindow(data, event) {
    event.preventDefault();
    // window.open(data.buttonURL);
  }

  generateCode() {

    try {
      let tmp: string;

      /* If headline color is black */
      if (this.seasonalData.headlineColor === 'black') {
        $('h4').removeClass('c-carousel__headline c-carousel__headline--red');
        $('.seasonal-iframe').contents().find('h4').removeClass('c-carousel__headline c-carousel__headline--red');
      } else if (this.seasonalData.headlineColor === 'red') {
        $('h4').addClass('c-carousel__headline c-carousel__headline--red');
        $('.seasonal-iframe').contents().find('h4').addClass('c-carousel__headline c-carousel__headline--red');
      }

      tmp = $('.Seasonal-template').html();

      this.outputCode = this.outputCode = this.css.getSeasonalCSS() + tmp;

      this.impexCode = tmp.replace(/"/g, '""');

      this.SeasonaliframeCode =
      '<h5 class="text-center">' + this.seasonalData.subline + '</h5>' +
      '<p class="text-white">' + this.seasonalData.paragraph + '</p>' +
      '<a href="' + this.seasonalData.buttonURL + '" class="btn btn--secondary">' + this.seasonalData.buttonTxt + '</a>';

      this.SeasonaliframeCode = this.getScript(this.SeasonaliframeCode);
      this.insertCodeBlock(this.SeasonaliframeCode);

    } catch (err) { }

  }

  insertGlobalcss(css: string): void {
    $('.seasonal-iframe').contents().find('#globalcss').html(css);
  }

  insertCodeBlock(code: string): void {
    $('.seasonal-iframe').contents().find('#SeasonalHTML').html(code);
  }

  insertLogo(logo: string): void {
    $('.seasonal-iframe').contents().find('#Seasonallogo').attr('src', logo);
  }

  insertLogoWidth(width: number): void {
    $('.seasonal-iframe').contents().find('#Seasonallogo').attr('width', width);
  }

  insertLogoWhiteBackground(white: boolean): void {
    if (white) {
      $('.seasonal-iframe').contents().find('#Seasonallogo').addClass('bg-white-transparent');
      $('.seasonal-template').find('.mx-auto').addClass('bg-white-transparent');
    } else {
      $('.seasonal-iframe').contents().find('#Seasonallogo').removeClass('bg-white-transparent');
      $('.seasonal-template').find('.mx-auto').removeClass('bg-white-transparent');
    }
  }

  insertHeadline(headline: string): void {
    $('.seasonal-iframe').contents().find('.container').find('h4').text(headline);
  }

  insertProductNames(products: any): void {
    $('.seasonal-iframe').contents().find('#Seasonal-prod1').find('img').attr('src', products.prod1Img);
    $('.seasonal-iframe').contents().find('#Seasonal-prod2').find('img').attr('src', products.prod2Img);
    $('.seasonal-iframe').contents().find('#Seasonal-prod3').find('img').attr('src', products.prod3Img);
    $('.seasonal-iframe').contents().find('#Seasonal-prod4').find('img').attr('src', products.prod4Img);
  }

  insertProductImages(products: any): void {
    $('.seasonal-iframe').contents().find('#Seasonal-prod1').find('span').text(products.prod1Name);
    $('.seasonal-iframe').contents().find('#Seasonal-prod2').find('span').text(products.prod2Name);
    $('.seasonal-iframe').contents().find('#Seasonal-prod3').find('span').text(products.prod3Name);
    $('.seasonal-iframe').contents().find('#Seasonal-prod4').find('span').text(products.prod4Name);
  }

  /* Prevent default from clicking iframe button */
  getScript(html) {
    return '<script>$( document ).ready(function() { $(\'a.btn\').click(function(e) { e.preventDefault(); }); }); </script>' + html;
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

