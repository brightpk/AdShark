export class SeasonalData {
  public callout: string;
  public headline: string;
  public subline: string;
  public paragraph: string;
  public logoURL: string;
  public logoWidth: number;
  public whiteBGLogo: boolean;
  public buttonTxt: string;
  public buttonURL: string;
  public headlineColor: string;
  public products: {
    prod1Link: string, prod1Name: string, prod1Img: string,
    prod2Link: string, prod2Name: string, prod2Img: string ,
    prod3Link: string, prod3Name: string, prod3Img: string ,
    prod4Link: string, prod4Name: string, prod4Img: string
  };

  constructor() {
    this.callout = '';
    this.headline = '';
    this.subline = '';
    this.paragraph = '';
    this.logoURL = '';
    this.logoWidth = 150;
    this.whiteBGLogo = false;
    this.buttonTxt = '';
    this.buttonURL = '';
    this.headlineColor = 'black';
    this.products = {
      prod1Link: '', prod1Name: '', prod1Img: '',
      prod2Link: '', prod2Name: '', prod2Img: '' ,
      prod3Link: '', prod3Name: '', prod3Img: '' ,
      prod4Link: '', prod4Name: '', prod4Img: ''
    };
  }

}
