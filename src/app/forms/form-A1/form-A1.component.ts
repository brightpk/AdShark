import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { A1Data } from 'src/app/models/A1Data';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-form-A1',
  templateUrl: './form-A1.component.html',
  styleUrls: ['./form-A1.component.css']
})
export class FormA1Component implements OnInit {
  @Input() a1Data: A1Data;
  @Output() a1LogoSize = new EventEmitter();
  logoSize: string;
  listofLogoSize = ['small', 'medium', 'large'];

  constructor() { }

  ngOnInit(): void {
    this.logoSize = 'large';
  }

  onChangeLogoSize() {
    this.a1LogoSize.emit(this.logoSize);
  }

  onChangeLogo() {
    if (this.a1Data.data.parameterValues['DE:Logo required?'] === 'No') {
      this.a1Data.data.parameterValues['DE:Image path for logo'] = '';
    }
  }

  onChangeCallout() {
    if (this.a1Data.data.parameterValues['DE:Sale Call-Out'] === 'Yes') {
      this.a1Data.data.parameterValues['DE:Background color behind text'] = 'White';
      this.a1Data.data.parameterValues['DE:Hex #'] = '#FFFFFF';
      this.a1Data.data.parameterValues['DE:Text for Sale Call-Out'] = 'call out goes here!';
    } else if (this.a1Data.data.parameterValues['DE:Sale Call-Out'] === 'No') {
      this.a1Data.data.parameterValues['DE:Text for Sale Call-Out'] = '';
    }
  }

  getBackgroundColor() {
    if (this.a1Data.data.parameterValues['DE:Background color behind text'] === 'White') {
      this.a1Data.data.parameterValues['DE:Hex #'] = '#FFFFFF';
    } else {
      this.a1Data.data.parameterValues['DE:Hex #'] = '#9e876b';
    }
  }



  /* ---------------------------------------------------------------------------------------------------------------------------------- */




  onClickImageSample(){
    this.a1Data.data.parameterValues['DE:Image for desktop - 960px x 410px'] = 'https://images.americanhotel.com/images/banners/8962k_Westpoint_A1_100919-960.jpg?123';
    this.a1Data.data.parameterValues['DE:Image for mobile - 480px x 205px'] = 'https://images.americanhotel.com/images/banners/8962k_Westpoint_A1_100919-480.jpg?123';
  }

  onClickLogoSample(ad) {
    if (ad === 1) {
      this.a1Data.data.parameterValues['DE:Image path for logo'] = 'https://images.americanhotel.com/images/logos/suppliers/1888-mills-logo-white.svg';

    } else if (ad === 2) {
      this.a1Data.data.parameterValues['DE:Image path for logo'] = 'https://images.americanhotel.com/images/logos/suppliers/hunter-logo.svg';

    } else if (ad === 3) {
      this.a1Data.data.parameterValues['DE:Image path for logo'] = 'https://images.americanhotel.com/images/logos/suppliers/1888-mills-logo.png';

    } else if (ad === 4) {
      this.a1Data.data.parameterValues['DE:Image path for logo'] = 'https://images.americanhotel.com/images/emails/logos/RegistryNoTag.png';

    } else if (ad === 5) {
      this.a1Data.data.parameterValues['DE:Image path for logo'] = 'https://images.americanhotel.com/images/logos/suppliers/GE bw.svg';

    } else if (ad === 6) {
      this.a1Data.data.parameterValues['DE:Image path for logo'] = 'https://images.americanhotel.com/images/logos/suppliers/ForbesLogo.svg';

    } else if (ad === 7) {
      this.a1Data.data.parameterValues['DE:Image path for logo'] = 'https://images.americanhotel.com/images/logos/suppliers/1888-aura-logo-white.svg';
    }
    else if (ad === 8) {
      this.a1Data.data.parameterValues['DE:Image path for logo'] = 'https://images.americanhotel.com/images/logos/suppliers/westpoint-martex-logo.svg';
    }
  
  }


  logoBorder(ad) {
    if (ad === 1) {
      $('.sample-logo-1').css('background-color', 'lightgray');
      // tslint:disable-next-line: max-line-length
      $('.sample-logo-2, .sample-logo-3, .sample-logo-4, .sample-logo-5, .sample-logo-6, .sample-logo-7, .sample-logo-8').css('background-color', 'transparent');
    } else if (ad === 2) {
      $('.sample-logo-2').css('background-color', 'lightgray');
      // tslint:disable-next-line: max-line-length
      $('.sample-logo-1, .sample-logo-3, .sample-logo-4, .sample-logo-5, .sample-logo-6, .sample-logo-7, .sample-logo-8').css('background-color', 'transparent');

    } else if (ad === 3) {
      $('.sample-logo-3').css('background-color', 'lightgray');
      // tslint:disable-next-line: max-line-length
      $('.sample-logo-1, .sample-logo-2, .sample-logo-4, .sample-logo-5, .sample-logo-6, .sample-logo-7, .sample-logo-8').css('background-color', 'transparent');

    } else if (ad === 4) {
      $('.sample-logo-4').css('background-color', 'lightgray');
      // tslint:disable-next-line: max-line-length
      $('.sample-logo-1, .sample-logo-2, .sample-logo-3, .sample-logo-5, .sample-logo-6, .sample-logo-7, .sample-logo-8').css('background-color', 'transparent');

    } else if (ad === 5) {
      $('.sample-logo-5').css('background-color', 'lightgray');
      // tslint:disable-next-line: max-line-length
      $('.sample-logo-1, .sample-logo-2, .sample-logo-3, .sample-logo-4, .sample-logo-6, .sample-logo-7, .sample-logo-8').css('background-color', 'transparent');

    } else if (ad === 6) {
      $('.sample-logo-6').css('background-color', 'lightgray');
      // tslint:disable-next-line: max-line-length
      $('.sample-logo-1, .sample-logo-2, .sample-logo-3, .sample-logo-4, .sample-logo-5, .sample-logo-7, .sample-logo-8').css('background-color', 'transparent');

    } else if (ad === 7) {
      $('.sample-logo-7').css('background-color', 'lightgray');
      // tslint:disable-next-line: max-line-length
      $('.sample-logo-1, .sample-logo-2, .sample-logo-3, .sample-logo-4, .sample-logo-5, .sample-logo-6, .sample-logo-8').css('background-color', 'transparent');

    } else if (ad === 8) {
      $('.sample-logo-8').css('background-color', 'lightgray');
      // tslint:disable-next-line: max-line-length
      $('.sample-logo-1, .sample-logo-2, .sample-logo-3, .sample-logo-4, .sample-logo-5, .sample-logo-6, .sample-logo-7').css('background-color', 'transparent');

    }
  }

}
