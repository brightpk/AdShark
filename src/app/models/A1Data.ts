export class A1Data {
  data: {
    ID: string;
    name: string;
    objCode: string;
    parameterValues: {
      ['DE:Select Ad Type']: string;
      ['DE:Image provided?']: string;
      ['DE:Image needed']: string;
      ['DE:Image type']: string;
      ['DE:Image for desktop - 960px x 410px']: string;
      ['DE:Image for mobile - 480px x 205px']: string;
      ['DE:Logo required?']: string;
      ['DE:Image path for logo']: string;
      ['DE:Sale Call-Out']: string;
      ['DE:Text for Sale Call-Out']: string;
      ['DE:Background color behind text']: string;
      ['DE:Hex #']: string;
      ['DE:Headline']: string;
      ['DE:Sub-Headline']: string;
      ['DE:CTA text']: string;
      ['DE:CTA URL']: string;
      ['DE:Start Date']: string;
      ['DE:End Date']: string
    };
  };

  constructor() {
    this.data = {
      ID: '',
      name: '',
      objCode: '',
      parameterValues: {
        ['DE:Select Ad Type']: 'A1 Hero Banner',
        ['DE:Image provided?']: 'No',
        ['DE:Image needed']: '',
        ['DE:Image type']: '',
        ['DE:Image for desktop - 960px x 410px']: '',
        ['DE:Image for mobile - 480px x 205px']: '',
        ['DE:Logo required?']: 'No',
        ['DE:Image path for logo']: '',
        ['DE:Sale Call-Out']: 'No',
        ['DE:Text for Sale Call-Out']: '',
        ['DE:Background color behind text']: 'White',
        ['DE:Hex #']: '',
        ['DE:Headline']: '',
        ['DE:Sub-Headline']: '',
        ['DE:CTA text']: '',
        ['DE:CTA URL']: '',
        ['DE:Start Date']: '',
        ['DE:End Date']: ''
      }
    };
  }

}
