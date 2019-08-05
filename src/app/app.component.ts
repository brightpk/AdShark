import { Component, HostListener } from '@angular/core';
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
})

export class AppComponent {
  title = 'AdShark';
  data = new AppData('', '', '', '', '', '', '', ''); // object to store inputs and pass around inside ads
  altLogo = ''; button = ''; device = '';
  paneSize: number; rightWidth: number; leftWidth: number;
  OutputCode: string;
  showCode = true;
  tabClick = 0;
  logoWidth = 160;
  disabledButton = false;
  whiteBGLogo = false;
  previewCode: any = [];
  listofColor = ['blue', 'black', 'white'];

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

    /* -------- Show and Hide Sample bg and logo -----*/
    showSampleBg = false;
    showSampleLogo = false;
    onClickSample(field, ad) {
      if (field === 'bg') {
        if (ad === 'D1') {
          this.data.bgURL = 'https://images.americanhotel.com/images/banners/8754_1888Mills_AD_D1_061719_bg.jpg';
        } else if (ad === 'A1') {
          this.data.bgURL = 'https://images.americanhotel.com/images/banners/8713_hunter_A1_widescreen_overlay.jpg';
        } else { this.data.bgURL = 'https://images.americanhotel.com/images/emails/8743K_Inteplast_EML_061919_03.jpg'; }
      } else if (field === 'logo') {
        if (ad === 'D1') {
          this.data.logoURL = 'https://images.americanhotel.com/images/logos/suppliers/1888-mills-logo-white.svg';
        } else if (ad === 'A1') {
          this.data.logoURL = 'https://images.americanhotel.com/images/logos/suppliers/hunter-logo-overlay.png';
        } else { this.data.logoURL = 'https://images.americanhotel.com/images/emails/logos/RegistryNoTag.png'; }
      }
    }

    bgBorder(ad) {
      if (ad === 'D1') {
        $('.sample-bg-D1').css('border', 'groove');
        $('.sample-bg-A1').css('border', 'none');
        $('.sample-bg-email').css('border', 'none');
      } else if (ad === 'A1') {
        $('.sample-bg-D1').css('border', 'none');
        $('.sample-bg-A1').css('border', 'groove');
        $('.sample-bg-email').css('border', 'none');
      } else if (ad === 'email') {
        $('.sample-bg-D1').css('border', 'none');
        $('.sample-bg-A1').css('border', 'none');
        $('.sample-bg-email').css('border', 'groove');
      }
    }

    logoBorder(ad) {
      if (ad === 'D1') {
        $('.sample-logo-D1').css('border', 'groove');
        $('.sample-logo-A1').css('border', 'none');
        $('.sample-logo-email').css('border', 'none');
      } else if (ad === 'A1') {
        $('.sample-logo-D1').css('border', 'none');
        $('.sample-logo-A1').css('border', 'groove');
        $('.sample-logo-email').css('border', 'none');
      } else if (ad === 'email') {
        $('.sample-logo-D1').css('border', 'none');
        $('.sample-logo-A1').css('border', 'none');
        $('.sample-logo-email').css('border', 'groove');
      }
    }
    /* ------------------------------------------------*/


  @HostListener('document:keyup', ['$event'])
  keyEvent(event) {
    $('.copy-btn-txt').html(' Copy Code');
    this.copyButtonReact();
    console.log(this.logoWidth);
  }

  /* Check the text color */
  changeColor(value) {
    $('.copy-btn-txt').html(' Copy Code');
    this.copyButtonReact();

    if (this.tabClick === 2) {
    //   switch (this.txtColor[0]) {
    //     case this.txtColor[0]:
    //       if (this.txtColor[0].color === 'blue') {
    //         this.txtColor[0].color = '#005da3';
    //       } else if (this.txtColor[0].color === 'black') {
    //         this.txtColor[0].color = '#1e1e1e';
    //       } else if (this.txtColor[0].color === 'red') {
    //         this.txtColor[0].color = '#ed1a3b';
    //       }
    //       console.log('TxtColor: ', this.txtColor[0]);
    //   }
    // }
      console.log('TxtColor: ', this.txtColor[0]);
    }
  }

  /* Check the button style */
  changeButton(event) {
    $('.copy-btn-txt').html(' Copy Code');
    this.copyButtonReact();
  }

  minusLogo(e) {
    this.logoWidth -= 5;
    console.log(this.logoWidth);
  }

  plusLogo(e) {
    this.logoWidth += 5;
    console.log(this.logoWidth);
  }

  /* Add a white transparent bg to a logo */
  addWhiteBgLogo() {
    this.whiteBGLogo = !this.whiteBGLogo;

    switch (this.whiteBGLogo) {
      case true:
        $('.D1-template').find('img.pb-2').addClass('bg-white-transparent');
        $('.A1-template').find('.a1-supplier-logo').find('img').addClass('bg-white-transparent');
        break;

      case false:
        $('.D1-template').find('img.pb-2').removeClass('bg-white-transparent');
        $('.A1-template').find('div.a1-supplier-logo').find('img').removeClass('bg-white-transparent');
        break;

    }
  }

  /* Receive code from children */
  receiveCode(section, code) {
    switch (section) {
      case 'D1':
        this.previewCode.D1 = code;
        this.OutputCode = code;
        break;

      case 'A1':
        this.previewCode.A1 = code;
        this.OutputCode = code;
        break;

      case 'email':
        this.previewCode.email = code;
        this.OutputCode = code;
        break;

      default:
        this.OutputCode = '';
    }
  }

  /* Check what tab is on */
  onTabClick(e: MatTabChangeEvent) {
    switch (e.index) {
      case 0:
        // $('.copy-button').html('COPY CODE');
        $('.copy-btn-txt').html(' Copy Code');
        this.copyButtonReact();
        this.listofColor[2] = 'white';
        this.OutputCode = this.previewCode.D1;
        this.tabClick = e.index;
        console.log(e.index);
        $('.subheadline-form').show();
        $('.button-link-form').show();
        $('.paragraph-form').hide();
        $('.foreground-form').hide();

        if (this.txtColor[0].color === 'red') {
          this.txtColor[0].color = 'white';
        }

        break;

      case 1:
        // $('.copy-button').html('COPY CODE');
        $('.copy-btn-txt').html(' Copy Code');
        this.copyButtonReact();
        this.listofColor[2] = 'white';
        this.OutputCode = this.previewCode.A1;
        this.tabClick = e.index;
        console.log(e.index);
        $('.subheadline-form').show();
        $('.button-link-form').show();
        $('.paragraph-form').hide();
        $('.foreground-form').hide();

        if (this.txtColor[0].color === 'red') {
          this.txtColor[0].color = 'white';
        }

        break;

      case 2:
        // $('.copy-button').html('COPY CODE');
        $('.copy-btn-txt').html(' Copy Code');
        this.copyButtonReact();
        $('iframe').css('height', 520);
        this.listofColor[2] = 'red';
        this.OutputCode = this.previewCode.email;
        this.tabClick = e.index;
        console.log(e.index);
        $('.paragraph-form').show();
        $('.subheadline-form').hide();
        $('.button-link-form').hide();
        $('.foreground-form').hide();

        if (this.txtColor[0].color === 'white') {
          this.txtColor[0].color = 'red';
          console.log('if wht, change to red');
        } else if (this.txtColor[2].color === 'white') {
          this.txtColor[2].color = 'red';
        }

        break;

      default:
          this.OutputCode = '';
      }
    }

  /* Size right pane */
  onResizedRight(event: ResizedEvent) {
    this.rightWidth = event.newWidth;
    $('iframe').css('width', this.rightWidth);

    if (this.rightWidth <= 500) {
      this.device = 'Mobile';
      $('iframe').css('height', 1150);
      if (this.tabClick === 2) {
        $('iframe').css('height', 520);
      }

      if (this.tabClick === 1) {
        $('iframe').css('height', 420);
      } else if (this.tabClick === 2) {
        $('iframe').css('height', 520);
      }

    } else if (this.rightWidth <= 1024) {
      this.device = 'Tablet';
      $('iframe').css('height', 1150);

      if (this.tabClick === 1) {
        $('iframe').css('height', 420);
      } else if (this.tabClick === 2) {
        $('iframe').css('height', 520);
      }

    } else if (this.rightWidth <= 1280) {
      this.device = 'Desktop';
      $('iframe').css('height', 400);
      if (this.tabClick === 2) {
        $('iframe').css('height', 520);
      }

    }
    // tslint:disable-next-line:one-line
    else {
      this.device = 'Wide Screen';
      if (this.tabClick === 1) {
        $('iframe').css('height', 400);
      } else if (this.tabClick === 2) {
        $('iframe').css('height', 520);
      }
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

  /* Get a alternate logo name */
  getAlterLogo(data) {
    let lst: string[] = [];
    let tmp = data.logoURL;
    if (data.logoURL !== null) {
      // let tmp = data.logoURL;
      lst = tmp.split('/');
      tmp = lst[lst.length - 1];
      const i = lst[lst.length - 1].indexOf('-logo');
      tmp = tmp.substring(0, i);
      console.log(tmp.slice(1));
      console.log(tmp.replace('-', ' '));
      this.altLogo = tmp.charAt(0).toUpperCase() + tmp.slice(1);
      this.altLogo = this.altLogo.replace('-', ' ');
    }
    console.log('AltLogo: ', this.altLogo);
  }

  /* Copy code */
  copyCode() {
      if (this.tabClick === 0 && this.data.isEmpty('D1')) {
        alert('One-Third Banner (D1) form is empty! Please fill up the form!');
      } else if (this.tabClick === 1 && this.data.isEmpty('A1')) {
        alert('Hero Banner (A1) form is empty! Please fill up the form!');
      } else if (this.tabClick === 2 && this.data.isEmpty('email')) {
        alert('Email Banner form is empty! Please fill up the form!');
      } else {
        let txtarea: any;
        txtarea = document.createElement('textarea');
        txtarea.style.position = 'fixed';
        txtarea.style.left = '0';
        txtarea.style.top = '0';
        txtarea.style.opacity = '0';
        txtarea.value = this.OutputCode;
        document.body.appendChild(txtarea);
        txtarea.focus();
        txtarea.select();
        document.execCommand('copy');
        document.body.removeChild(txtarea);
        $('.copy-btn-txt').html(' Copied!');
        this.copyButtonReact();
      }
  }

  /* Change color when COPIED! is completed */
  copyButtonReact() {
    if ($('.copy-btn-txt').html() === ' Copied!') {
      $('.copy-button').css('background-color', 'rgb(228, 229, 230)');
      $('.fa-code').css('color' , 'rgb(134, 134, 134)');
      $('.copy-btn-txt').css('color' , 'rgb(134, 134, 134)');

      $('.copy-button').hover(() => {
        $('.copy-button').css('background-color', 'rgb(228, 229, 230)');
        $('.fa-code').css('color' , 'rgb(134, 134, 134)');
        $('.copy-btn-txt').css('color' , 'rgb(134, 134, 134)');
      // }, () => {
      //   $('.copy-button').css('background-color', 'rgb(228, 229, 230)');
      //   $('.fa-code').css('color' , 'rgb(134, 134, 134)');
      //   $('.copy-btn-txt').css('color' , 'rgb(134, 134, 134)');
      });

    } else if ($('.copy-btn-txt').html() === ' Copy Code') {
      $('.copy-button').css('background-color', 'rgb(8, 164, 236)');
      $('.fa-code').css('color' , 'white');
      $('.copy-btn-txt').css('color' , 'white');

      $('.copy-button').hover(() => {
        $('.copy-button').css('background-color', 'rgb(3, 125, 182)');
        $('.fa-code').css('color', 'white');
        $('.copy-btn-txt').css('color', 'white');
      }, () => {
        $('.copy-button').css('background-color', 'rgb(8, 164, 236)');
        $('.fa-code').css('color' , 'white');
        $('.copy-btn-txt').css('color' , 'white');
      });
    }
  }

}
