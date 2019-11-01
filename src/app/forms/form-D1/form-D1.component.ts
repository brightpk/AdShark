import { Component, OnInit, Input } from '@angular/core';
import { D1Data } from 'src/app/models/D1Data';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-form-D1',
  templateUrl: './form-D1.component.html',
  styleUrls: ['./form-D1.component.css']
})
export class FormD1Component implements OnInit {
  @Input() d1Data: D1Data;

  constructor() { }

  ngOnInit() {
  }

  onClickImageSample() {
    // tslint:disable-next-line:max-line-length
    this.d1Data.data.parameterValues['DE:Image path for 1/3 banner'] = 'https://images.americanhotel.com/images/banners/D1_generic_foodservice.jpg';
  }



    // minusLogo(e) {
    //   this.d1Data.logoWidth = Number(this.d1Data.logoWidth);
    //   this.d1Data.logoWidth -= 5;
    // }

    // plusLogo(e) {
    //   this.d1Data.logoWidth = Number(this.d1Data.logoWidth);
    //   this.d1Data.logoWidth += 5;
    // }

    // addWhiteBgLogo() {
    //   this.d1Data.whiteBGLogo = !this.d1Data.whiteBGLogo;
    // }

}
