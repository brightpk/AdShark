import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AppData } from './AppData';
import { ResizedEvent } from 'angular-resize-event';
import { MatTabChangeEvent } from '@angular/material';

// import jquery = require('jquery');
// const $: JQueryStatic = jquery;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {
  title = 'AdShark';
  data = new AppData('', '', '', '', '', '', '', '', ''); // object to store inputs and pass around inside ads
  altLogo = ''; altImg = '';
  button = ''; device = '';
  paneSize: number; rightWidth: number; leftWidth: number;
  outputCode: string; textAlign = 'left'; logoAlign = 'left'; calloutBar = 'none'
  showCode = true;
  tabClick = 0;
  logoWidth = 150;
  logoSize = 'small';
  disabledButton = false;
  disabledcallout = false;
  whiteBGLogo = false;
  previewCode: any = [];
  listofColor = ['blue', 'black', 'white'];
  listofAlignment = ['left', 'center', 'right'];
  listofCalloutBar = ['none', 'sale', 'no sale'];

  txtColor: any = [
    { name: 'headline', color: 'blue'},
    { name: 'subline', color: 'blue'},
    { name: 'para', color: 'blue'}
  ];

  buttonOptions: any = [
    { type: 'default', name: 'Solid/Blue' },
    { type: 'primary', name: 'Clear/White' },
    { type: 'alternate', name: 'Clear/Blue' }
  ];

  logoSizeOptions: any = ['small', 'medium', 'large' ];

  seasonalData = {
    prod1Link: '', prod1Name: '', prod1Img: '',
    prod2Link: '', prod2Name: '', prod2Img: '' ,
    prod3Link: '', prod3Name: '', prod3Img: '' ,
    prod4Link: '', prod4Name: '', prod4Img: ''
  };

  showSampleBg = false;
  showSampleLogo = false;

  ngOnInit(): void {
    $('.text-alignment').hide();
    $('.logo-alignment').hide();
    $('.paragraph-form').hide();
    $('.foreground-form').hide();
    $('.logo-size').hide();
    $('.silverpop').hide();
    $('.callout-bar').hide();
    $('.seasonal-products-form').hide();
  }

    /* -------- Show and Hide Sample bg / logo / products  -----*/
    onClickSample(field, ad) {
      if (field === 'bg') {
        if (ad === 'D1') {
          this.data.bgURL = 'https://images.americanhotel.com/images/banners/8754_1888Mills_AD_D1_061719_bg.jpg';

        } else if (ad === 'A1Left') {
          this.data.bgURL = 'https://images.americanhotel.com/images/banners/8713_hunter_A1_widescreen_overlay.jpg';

        }  else if (ad === 'A1Right') {
          this.data.bgURL = 'https://images.americanhotel.com/images/banners/8865_1888Mills_080619_widescreen.jpg?q=123';

        } else { this.data.bgURL = 'https://images.americanhotel.com/images/emails/8743K_Inteplast_EML_061919_03.jpg'; }

      } else if (field === 'logo') {

        if (ad === 1) {
          this.data.logoURL = 'https://images.americanhotel.com/images/logos/suppliers/1888-mills-logo-white.svg';

        } else if (ad === 2) {
          this.data.logoURL = 'https://images.americanhotel.com/images/logos/suppliers/hunter-logo.svg';

        } else if (ad === 3) {
          this.data.logoURL = 'https://images.americanhotel.com/images/logos/suppliers/1888-mills-logo.png';

        } else if (ad === 4) {
          this.data.logoURL = 'https://images.americanhotel.com/images/emails/logos/RegistryNoTag.png'; 

        } else if (ad === 5) {
          this.data.logoURL = 'https://images.americanhotel.com/images/logos/suppliers/GE bw.svg';

        } else if (ad === 6) {
          this.data.logoURL = 'https://images.americanhotel.com/images/logos/suppliers/ForbesLogo.svg';

        } else if (ad === 7) {
          this.data.logoURL = 'https://images.americanhotel.com/images/logos/suppliers/1888-aura-logo-white.svg';
        }
      }
    }

    onClickProductSample() {
      this.seasonalData = {
        // tslint:disable-next-line: max-line-length
        prod1Link: '/1888-mills-aura-spa-collection-spa-towel-40x70-27lb-dz-white-herringbone/p/1078073?icid=1888-mills-c1-c5_hp_car_3_20190913_2_1078073',
        prod1Name: 'Aura Spa Towel, 40″ x 70″, White Herringbone',
        prod1Img: 'https://images.americanhotel.com/images/products/1078073_1.jpg',
        // tslint:disable-next-line: max-line-length
        prod2Link: '/1888-mills-aura-spa-collection-spa-towel-40x70-27lb-dz-white-diamond-velour/p/1078060?icid=1888-mills-c1-c5_hp_car_3_20190913_3_1078060',
        prod2Name: 'Aura Spa Towel, 40″ x 70″, White Diamond Velour',
        prod2Img: 'https://images.americanhotel.com/images/products/1078060_1.jpg',
        // tslint:disable-next-line: max-line-length
        prod3Link: '/1888-mills-aura-spa-collection-spa-towel-40x70-27lb-dz-solid-white-velour/p/1078059?icid=1888-mills-c1-c5_hp_car_3_20190913_4_1078059',
        prod3Name: 'Aura Spa Towel, 40″ x 70″, Solid White Velour',
        prod3Img: 'https://images.americanhotel.com/images/products/1078059_1.jpg',
        // tslint:disable-next-line: max-line-length
        prod4Link: '/1888-mills-aura-spa-towel-40-x-70-white--blue/p/1078065?icid=1888-mills-c1-c5_hp_car_3_20190913_5_1078065',
        prod4Name: 'Aura Spa Towel, 40″ x 70″, White & Blue',
        prod4Img: 'https://images.americanhotel.com/images/products/1078065_1.jpg'
      };
    }

    onClearProductSample() {
      this.seasonalData = {
        prod1Link: '', prod1Name: '', prod1Img: '',
        prod2Link: '', prod2Name: '', prod2Img: '' ,
        prod3Link: '', prod3Name: '', prod3Img: '' ,
        prod4Link: '', prod4Name: '', prod4Img: ''
      };
    }

    bgBorder(ad) {
      if (ad === 'D1') {
        $('.sample-bg-D1').css('background-color', 'lightgray');
        $('.sample-bg-A1Left').css('background-color', 'transparent');
        $('.sample-bg-A1Right').css('background-color', 'transparent');
        $('.sample-bg-email').css('background-color', 'transparent');
      } else if (ad === 'A1Left') {
        $('.sample-bg-D1').css('background-color', 'transparent');
        $('.sample-bg-A1Left').css('background-color', 'lightgray');
        $('.sample-bg-A1Right').css('background-color', 'transparent');
        $('.sample-bg-email').css('background-color', 'transparent');
      } else if (ad === 'A1Right') {
        $('.sample-bg-D1').css('background-color', 'transparent');
        $('.sample-bg-A1Left').css('background-color', 'transparent');
        $('.sample-bg-A1Right').css('background-color', 'lightgray');
        $('.sample-bg-email').css('background-color', 'transparent');
      } else if (ad === 'email') {
        $('.sample-bg-D1').css('background-color', 'transparent');
        $('.sample-bg-A1Left').css('background-color', 'transparent');
        $('.sample-bg-A1Right').css('background-color', 'transparent');
        $('.sample-bg-email').css('background-color', 'lightgray');
      }
    }

    logoBorder(ad) {
      if (ad === 1) {
        $('.sample-logo-1').css('background-color', 'lightgray');
        // tslint:disable-next-line: max-line-length
        $('.sample-logo-2, .sample-logo-3, .sample-logo-4, .sample-logo-5, .sample-logo-6, .sample-logo-7').css('background-color', 'transparent');
      } else if (ad === 2) {
        $('.sample-logo-2').css('background-color', 'lightgray');
        // tslint:disable-next-line: max-line-length
        $('.sample-logo-1, .sample-logo-3, .sample-logo-4, .sample-logo-5, .sample-logo-6, .sample-logo-7').css('background-color', 'transparent');

      } else if (ad === 3) {
        $('.sample-logo-3').css('background-color', 'lightgray');
        // tslint:disable-next-line: max-line-length
        $('.sample-logo-1, .sample-logo-2, .sample-logo-4, .sample-logo-5, .sample-logo-6, .sample-logo-7').css('background-color', 'transparent');

      } else if (ad === 4) {
        $('.sample-logo-4').css('background-color', 'lightgray');
        // tslint:disable-next-line: max-line-length
        $('.sample-logo-1, .sample-logo-2, .sample-logo-3, .sample-logo-5, .sample-logo-6, .sample-logo-7').css('background-color', 'transparent');

      } else if (ad === 5) {
        $('.sample-logo-5').css('background-color', 'lightgray');
        // tslint:disable-next-line: max-line-length
        $('.sample-logo-1, .sample-logo-2, .sample-logo-3, .sample-logo-4, .sample-logo-6, .sample-logo-7').css('background-color', 'transparent');

      } else if (ad === 6) {
        $('.sample-logo-6').css('background-color', 'lightgray');
        // tslint:disable-next-line: max-line-length
        $('.sample-logo-1, .sample-logo-2, .sample-logo-3, .sample-logo-4, .sample-logo-5, .sample-logo-7').css('background-color', 'transparent');

      } else if (ad === 7) {
        $('.sample-logo-7').css('background-color', 'lightgray');
        // tslint:disable-next-line: max-line-length
        $('.sample-logo-1, .sample-logo-2, .sample-logo-3, .sample-logo-4, .sample-logo-5, .sample-logo-6').css('background-color', 'transparent');

      }
    }
    /* ------------------------------------------------*/


  @HostListener('document:keyup', ['$event'])
  keyEvent(event) {
  }

  /* Check the text color */
  changeColor(value) {
    console.log(this.txtColor);
  }

  /* Check the button style */
  changeButton(event) {
    console.log(this.button);

    if (this.button === 'none') {
      this.disabledButton = true;
    } else {
      this.disabledButton = false;
    }
  }

  changeAlignment(e) {
    // console.log('Alignment: Text->', this.textAlign, ' Logo->', this.logoAlign); 
  }

  changeCalloutBar(e) {
    if (this.calloutBar === 'none') {
      this.disabledcallout = true;
    } else {
      this.disabledcallout = false;
    }
  }

  minusLogo(e) {
    this.logoWidth = Number(this.logoWidth);
    this.logoWidth -= 5;
  }

  plusLogo(e) {
    this.logoWidth = Number(this.logoWidth);
    this.logoWidth += 5;
  }

  /* Add a white transparent bg to a logo */
  addWhiteBgLogo() {
    this.whiteBGLogo = !this.whiteBGLogo;
    console.log('WhiteBGLogo: ', this.whiteBGLogo, ' tabClick: ', this.tabClick);
  }

  /* Check what tab is on */
  onTabClick(e: MatTabChangeEvent) {
    switch (e.index) {

      // D1 tab
      case 0:
        $('background-label').html('Background');
        this.listofColor[2] = 'white';
        // this.outputCode = this.previewCode.D1;
        this.tabClick = e.index;
        console.log(e.index);
        $('.callout-bar').hide();
        $('.text-alignment').hide();
        $('.logo-alignment').hide();
        $('.headline-color').show();
        $('.subheadline-form').show();
        $('.subheadline-color').show();
        $('.paragraph-form').hide();
        $('.paragraph-color').show();
        $('.background-form').show();
        $('.foreground-form').hide();
        $('.logo-size').hide();
        $('.checkbox-bg-white').show();
        $('.plus-minus-logoWidth').show();
        $('.button-link-form').show();
        $('.button-options-form').show();
        $('.seasonal-products-form').hide();

        if (this.txtColor[0].color === 'red') {
          this.txtColor[0].color = 'white';
          console.log('if red, change to wht');
        }

        break;

      // A1 tab
      case 1:
        $('.background-label').html('Background');
        $('.A1-iframe').css('height', 410);
        this.listofColor[2] = 'white';
        // this.outputCode = this.previewCode.A1;
        this.tabClick = e.index;
        console.log(e.index);
        $('.callout-bar').hide();
        $('.text-alignment').show();
        $('.logo-alignment').show();
        $('.headline-color').show();
        $('.subheadline-form').show();
        $('.subheadline-color').show();
        $('.paragraph-form').hide();
        $('.paragraph-color').show();
        $('.background-form').show();
        $('.foreground-form').hide();
        $('.logo-size').show();
        $('.checkbox-bg-white').show();
        $('.plus-minus-logoWidth').hide();
        $('.button-link-form').show();
        $('.button-options-form').show();
        $('.seasonal-products-form').hide();

        if (this.txtColor[0].color === 'red') {
          this.txtColor[0].color = 'white';
          console.log('if red, change to wht');
        }

        break;

        // Seasonal tab
        case 2:
          $('seasonal-iframe').css('height', 410);
          // this.outputCode = this.previewCode.seasonal;
          this.tabClick = e.index;
          console.log(e.index);
          $('.callout-bar').hide();
          $('.text-alignment').hide();
          $('.logo-alignment').hide();
          $('.headline-color').hide();
          $('.subheadline-form').show();
          $('.subheadline-color').hide();
          $('.paragraph-form').show();
          $('.paragraph-color').hide();
          $('.background-form').hide();
          $('.foreground-form').hide();
          $('.logo-size').hide();
          $('.checkbox-bg-white').hide();
          $('.plus-minus-logoWidth').show();
          $('.button-link-form').show();
          $('.button-options-form').hide();
          $('.seasonal-products-form').show();

          if (this.button === 'none') {
            this.button = '';
            this.disabledButton = false;
          }

          break;

        // Email tab
        case 3:
          $('.background-label').html('Hero Image');
          $('email-iframe').css('height', 530);
          this.listofColor[2] = 'red';
          // this.outputCode = this.previewCode.email;
          this.tabClick = e.index;
          console.log(e.index);
          $('.callout-bar').show();
          $('.text-alignment').hide();
          $('.logo-alignment').hide();
          $('.headline-color').show();
          $('.subheadline-form').hide();
          $('.subheadline-color').show();
          $('.paragraph-form').show();
          $('.paragraph-color').show();
          $('.background-form').show();
          $('.foreground-form').hide();
          $('.logo-size').hide();
          $('.checkbox-bg-white').hide();
          $('.plus-minus-logoWidth').hide();
          $('.button-link-form').hide();
          $('.button-options-form').show();
          $('.seasonal-products-form').hide();

          if (this.txtColor[0].color === 'white') {
            this.txtColor[0].color = 'red';
            console.log('if wht, change to red');
          } else if (this.txtColor[2].color === 'white') {
            this.txtColor[2].color = 'red';
          } else if (this.button === 'primary') {
            this.button = '';
          }

          break;

      default:
          this.outputCode = '';
      }
    }

  /* Size right pane */
  onResizedRight(event: ResizedEvent) {
    this.rightWidth = event.newWidth;
    $('iframe').css('width', this.rightWidth);

    if (this.rightWidth <= 500) {
      this.device = 'Mobile';
      $('.btn-mobile').addClass('current');
      $('.btn-tablet,.btn-desktop,.btn-widescreen').removeClass('current');
      $('iframe').css('height', 1150);

      if (this.tabClick === 1) {
        $('iframe').css('height', 410);
      } else if (this.tabClick === 3) {
        $('iframe').css('height', 600);
      }

    } else if (this.rightWidth <= 1024) {
      this.device = 'Tablet';
      $('.btn-tablet').addClass('current');
      $('.btn-mobile,.btn-desktop,.btn-widescreen').removeClass('current');
      $('iframe').css('height', 1150);

      if (this.tabClick === 1) {
        $('iframe').css('height', 410);
      } else if (this.tabClick === 3) {
        $('iframe').css('height', 600);
      }

    } else if (this.rightWidth <= 1280) {
      this.device = 'Desktop';
      $('.btn-desktop').addClass('current');
      $('.btn-tablet,.btn-mobile,.btn-widescreen').removeClass('current');
      $('iframe').css('height', 410);

      if (this.tabClick === 3) {
        $('iframe').css('height', 600);
      }

    } else {
      this.device = 'Wide Screen';
      $('.btn-widescreen').addClass('current');
      $('.btn-tablet,.btn-desktop,.btn-mobile').removeClass('current');

      if (this.tabClick === 1) {
        $('iframe').css('height', 410);
      } else if (this.tabClick === 3) {
        $('iframe').css('height', 600);
      }
    }

    // seasonal iframe size
    if (this.tabClick === 2 && this.rightWidth <= 1200) {
      $('iframe').css('height', 700);
    }
    if (this.tabClick === 2 && this.rightWidth <= 768) {
      $('iframe').css('height', 950);
    }

  }

  /* Size left pane */
  onResizedLeft(event: ResizedEvent) {
    this.leftWidth = event.newWidth;
  }

  /* Set size of pane each device */
  setPaneSize(event, device) {
    switch (device) {
      case 'mobile':
        this.paneSize = 500;
        break;

      case 'tablet':
        event.preventDefault();
        this.paneSize = 700;
        break;

      case 'desktop':
        event.preventDefault();
        this.paneSize = 1150;
        break;

      case 'widescreen':
        event.preventDefault();
        this.paneSize = 1350;
        break;

      default:
    }
  }

  /* Get an alternate logo name */
  getAlterLogo(data) {
    let lst: string[] = [];
    let tmp = data.logoURL;
    if (data.logoURL !== null) {
      lst = tmp.split('/');
      tmp = lst[lst.length - 1];
      const i = lst[lst.length - 1].indexOf('-logo');
      tmp = tmp.substring(0, i);
      // console.log(tmp.slice(1));
      // console.log(tmp.replace('-', ' '));
      this.altLogo = tmp.charAt(0).toUpperCase() + tmp.slice(1);
      this.altLogo = this.altLogo.replace('-', ' ');
    }
    if (data.logoURL.includes('Registry')) {
      this.altLogo = 'Registry';
    }
    console.log('AltLogo: ', this.altLogo);
  }

  /* Get an alternate img name */
  getAlterImg(data) {
    let lst: string[] = [];
    let tmp = data.bgURL;
    if (data.bgURL !== null) {
      lst = tmp.split('/');
      tmp = lst[lst.length - 1];
      tmp = tmp.substring(0, tmp.search('.jpg'));
      this.altImg = tmp;
    }
  }

}
