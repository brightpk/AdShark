import { Component, Input, ViewEncapsulation, HostListener } from '@angular/core';
import { AppData } from '../AppData';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-preview-D1',
  templateUrl: './preview-D1.component.html',
  styleUrls: ['./preview-D1.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class PreviewD1Component {
  @Input() data: AppData;
  @Input() altLogo: string;
  @Input() button: string;
  @Input() device: string;
  HTMLCode: string;
  showCode = false;

  // Generate code automatic
  @HostListener('window:keyup', ['$event'])
  keyEvent(event) {
    this.getHTML();
    console.log('some changes');
  }

  openWindow(data, event) {
    event.preventDefault();
    window.open(data.buttonURL);
  }

  getHTML() {
    // $('.resize-sensor').remove();
    let tmp: string;
    tmp = $('#D1').children().html();
    // console.log(tmp.includes('dir'));
    // if (tmp.includes('dir')) {
    //   const i = tmp.indexOf('dir');
    //   console.log(i);
    //   console.log(tmp.substring(0, i  - 2));
    // }

    this.HTMLCode = tmp;
  }

  copyCode() {
    if (this.HTMLCode == null) {
      alert('Please click "GENERATE CODE" before copying"');
    }
    let txtarea: any;
    txtarea = document.createElement('textarea');
    txtarea.style.position = 'fixed';
    txtarea.style.left = '0';
    txtarea.style.top = '0';
    txtarea.style.opacity = '0';
    txtarea.value = this.HTMLCode;
    document.body.appendChild(txtarea);
    txtarea.focus();
    txtarea.select();
    document.execCommand('copy');
    document.body.removeChild(txtarea);
  }
}
