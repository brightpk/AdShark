export class D1Data {
  data: {
    ID: string;
    name: string;
    objCode: string;
    parameterValues: {
        ['DE:Select Ad Type:']: string;
        ['DE:Sale Call-Out']: string;
        ['DE:Logo required?']: string;
        ['DE:Image provided?']: string;
        ['DE:Image path for 1/3 banner']: string;
        ['DE:Background color behind text']: string;
        ['DE:Headline']: string;
        ['DE:Sub-Headline']: string;
        ['DE:CTA text']: string;
        ['DE:CTA URL']: string;
    };
  };

    constructor() {
      this.data = {
        ID: '',
        name: '',
        objCode: '',
        parameterValues: {
          ['DE:Select Ad Type:']: '',
          ['DE:Sale Call-Out']: 'No',
          ['DE:Logo required?']: 'No',
          ['DE:Image provided?']: 'No',
          ['DE:Image path for 1/3 banner']: '',
          ['DE:Background color behind text']: 'White',
          ['DE:Headline']: '',
          ['DE:Sub-Headline']: '',
          ['DE:CTA text']: '',
          ['DE:CTA URL']: ''
        }
      };
    }

}
