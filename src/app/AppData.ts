export class AppData {
  constructor(
    public callout: string,
    public headline: string,
    public subline: string,
    public para: string,
    public bgURL: string,
    public fgURL: string,
    public logoURL: string,
    public buttonTxt: string,
    public buttonURL: string
  ) {}

  public isEmpty(ad): any {
    switch (ad) {
      case 'D1':
        if (this.headline === '' && this.subline === '' && this.bgURL === '' &&
            this.buttonTxt === '' && this.buttonURL === '' && this.logoURL === '') {
              return true;
        }
        break;

      case 'A1':
        if (this.headline === '' && this.subline === '' && this.bgURL === '' &&
            this.buttonTxt === '' && this.buttonURL === '' && this.logoURL === '' &&
            this.para === '' && this.fgURL === '') {
              return true;
        }
        break;

      case 'email':
        if (this.headline === '' && this.para === '' && this.bgURL === '' &&
            this.buttonTxt === '' && this.buttonURL === '' && this.logoURL === '') {
              return true;
        }
        break;

      default:
        return false;
    }

  }
}
