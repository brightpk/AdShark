export class AppCss {
  public css: string;
  
  getGlobalCSS() {
    this.css = 
    '      <style >' + 
    '.body .c-search__suggestions.ui-menu-item {display:none!important;}' +
    '.searchSpellingSuggestionPrompt {display:none;}' +
    '.c-hero.c-hero--one_third.onethirdcol img { height: auto;}' +
    'button.c-header__search-btn {background-color: transparent;}' +
    '.prop65icon[data-toggle=tooltip]:after {display:none}' +
    'span.prop65icon[data-toggle=tooltip] {    display: inline;}' +
    'span.prop65icon[data-toggle=tooltip]:after {display:none;}' +
    '.loggedinuser .flyout,  .asm_mode .flyout {display:none;}' +
    '.asm_mode .sub-navigation-list .subNav__content {display:none;}' +

    '.loggedinuser .sub-navigation-list .subNav__content, .americanfuneral .sub-navigation-list .subNav__content, .americanhealthcare .sub-navigation-list .subNav__content,' +
'.americaneducation .sub-navigation-list .subNav__content, .canadianhotel .sub-navigation-list .subNav__content  {display:none;}' +
   '.flyout{ 	cursor: auto; 	}' +
    '.flyout a {padding-left:0!important}' +
    '.flyout.col-md-4{ 	padding: 0 !important; }' +
    '.flyout p{ 	color: #000000; font-family: proxima-nova,sans-serif; 	font-size: 14px !important;' +
      'line-height: 18px; 	font-weight: 500; 	} .flyout p:hover{ 	color: #005da4 !important; }' +
    '.flyout a:hover{ 	background-color: transparent !important; 	}' +
    '.flyout .flyoutheader {      color: #ffffff;     font-size: 28px;     font-family: proxima-nova,sans-serif;     font-weight: 800;  }' +
    '.flyout .flyoutsubheader {      font-weight: 600;     line-height: 20px;     font-size: 14px;     margin-top: 5px !important;  }' +
    '.flyoutdiv.c-hero{ 		width: 315px; 	} .flyout div.c-hero img{ 	width: 100%; } 	.flyout	.featurebrand {font-size:18px;}' +
     '@media (max-width: 768px) { .flyout{     display: none; } }' +

     '.canadianhotel a[title~=Clearance] { display:none; }' +
     'img.bg-white-transparent {' +
        'background-color: rgba(255,255,255,0.9);' +
        'padding: 10px;' +
    '}' 

    '</style>';
    return this.css; 
  }
  
  getStyleLeft() { 
    this.css = 
    '<style type="text/css">' + 
      'div.home-a1-ad .c-hero--full .c-hero__image-wrap .c-hero__image {      height: 410px !important; }  ' +
      'div.home-a1-ad .c-hero__copy.c-hero__copy--align-left {      text-align: left;      max-width: 44%;      margin-left: 40px; } ' +
      '/*div.home-a1-ad .c-hero__copy {      max-width: 45%; } */  ' +
      'div.home-a1-ad .c-hero__action {      margin-top: 18px; } ' +
      '/*.a1-supplier-logo {      position: relative;      width: 100%;      height: 100%; }  .a1-supplier-logo img {      position: absolute;      bottom: 0;      left: 1px;      padding-bottom: 15px;      padding-right: 0px;      max-width: 90px; } */  ' +
      '.a1-supplier-logo img {      position: absolute;      bottom: 0;      right: 1px;      margin-bottom: 15px;      padding-right: 0px; }  .a1-supplier-logo img.bg-white {      background-color: rgba(255,255,255,0.9) !important;      padding: 10px; } ' +
      '/*div.home-a1-ad .c-hero__copy {      padding-left: 80px !important; }  */ /*div.home-a1-ad img {      max-width: 280px;      padding-bottom: 20px; } */  ' +
      'div.home-a1-ad div.c-hero__copy h2, div.home-a1-ad div.c-hero__copy p {      line-height: 1;     /* text-shadow: 0 6px 20px #fff;     */ }  ' +
      'div.home-a1-ad h2.c-hero__title--size-large {      font-size: 66px; }  ' +
      'div.home-a1-ad h2.c-hero__title--blue {      color: #005da3;      text-shadow: none; }  ' +
      'div.home-a1-ad .c-hero__sub-title--blue {      color: #005da3; }  ' +
      'div.home-a1-ad a.c-hero__action.btn--primary {      border-color: #fff;      background-color: rgba(0, 0, 0,.15); }  ' +
      'div.home-a1-ad a.btn--primary:hover {      background-color: #fff; } ' +
      '/*div.home-a1-ad a.c-hero__action.btn--primary {      border-color: #005da3;      background-color: #fff; }  div.home-a1-ad .btn--primary {      color: #005da3 !important; }  div.home-a1-ad a.btn--primary:hover {      border: border: 2px solid #005da3;      background-color: transparent; }  */  ' +
      'div.home-a1-ad .c-hero__sub-title--size-normal {      font-size: 18px;      line-height: 25px; } ' +
      '/* div.home-a1-ad h2.c-hero__title--white {      color: #fff;      text-shadow: 0 6px 20px rgba(0,0,0,.75); } */ ' +
      '/********* QUERIES ********/  ' +
      '@media (max-width: 1370px) { }  ' +
      '@media (max-width: 1090px) {     /* div.home-a1-ad .c-hero__copy {          padding-left: 43px !important;     }     */ }  ' +
      '@media (max-width: 1024.98px) {      div.home-a1-ad h2.c-hero__title--size-large {          font-size: 60px !important;     }     ' +
      '/*.a1-supplier-logo img {          max-width: 80px;     }     */      ' +
      'div.home-a1-ad .c-hero__copy.c-hero__copy--align-left {          text-align: left;          max-width: 43%;          margin-left: 40px;     } }  ' +
      '@media only screen and (max-width: 768px) {      div.home-a1-ad div.c-hero__copy h2 {         /*font-size: 42px !important;         */     }      ' +
      'div.home-a1-ad .c-hero__sub-title--size-normal {          font-size: 17px;          line-height: 25px;     }      ' +
      'div.home-a1-ad .c-hero__copy.c-hero__copy--align-left {          text-align: left;          max-width: 55%;     }     ' +
      '/* div.home-a1-ad h2.c-hero__title{          color: #fff;          text-shadow: 0 6px 20px rgba(0,0,0,.75);     }     */ }  ' +
      '@media only screen and (max-width: 600px) {      div.home-a1-ad div.c-hero__copy.c-hero__copy--align-left, div.home-a1-ad div.c-hero__copy.c-hero__copy--align-left {          max-width: 65%;          margin-left: 20px;          top: 7%;          transform: translate(-3%, 0%);     }      ' +
      'div.home-a1-ad div.c-hero__copy p {          line-height: 1.4;     }      ' +
      'div.home-a1-ad .c-hero__sub-title--size-normal {          font-size: 17px;          line-height: 25px;     }      ' +
      'div.home-a1-ad div.c-hero__copy h2 {          font-size: 42px !important;     }      ' +
      'div.home-a1-ad .padding {          padding-bottom: 40px;     }      ' +
      'div.home-a1-ad div.c-hero__copy {          padding-left: 30px;     }      ' +
      '.a1-supplier-logo img {          max-width: 120px;     } }  ' +
    '</style>';

    return this.css;
  }

  getStyleRight() {
    this.css = 
    '<style type="text/css"> ' +
      'div.home-a1-ad .c-hero--full .c-hero__image-wrap .c-hero__image {   height: 410px !important; } ' +
      'div.home-a1-ad .c-hero__copy.c-hero__copy--align-right {     text-align: right;     max-width: 55%; }  ' +
      'div.home-a1-ad .c-hero__action {   margin-top: 18px; } .a1-supplier-logo {   position: relative;   width: 100%;   height: 100%; } ' +
      '.a1-supplier-logo img {   position: absolute;   bottom: 0;   left: 1px;   padding-bottom: 15px;   padding-right: 0px;     max-width:110px; } ' +
      '/*div.home-a1-ad .c-hero__copy {   padding-left: 80px !important; }	*/ /*div.home-a1-ad img {   max-width: 280px;   padding-bottom: 20px; }*/   ' +
      'div.home-a1-ad div.c-hero__copy h2, div.home-a1-ad div.c-hero__copy p {   line-height: 1;  /* text-shadow: 0 6px 20px #fff;*/ }  ' +
      'div.home-a1-ad h2.c-hero__title--size-large {   font-size: 56px; } ' +
      'div.home-a1-ad h2.c-hero__title--blue {     color: #005da3; 	text-shadow: none; } ' +
      'div.home-a1-ad .c-hero__sub-title--blue {     color: #005da3; } ' +
      'div.home-a1-ad a.c-hero__action.btn--primary {     border-color: #005da3;     background-color: #fff; }  ' +
      'div.home-a1-ad .btn--primary {     color: #005da3 !important; } ' +
      'div.home-a1-ad a.btn--primary:hover {  border: 2px solid #005da3; 	background-color: transparent; } ' +
      'div.home-a1-ad .c-hero__sub-title--size-normal { 	 font-size: 18px;     line-height: 25px;   } ' +
      '/*     div.home-a1-ad h2.c-hero__title--white {     color: #fff;     text-shadow: 0 6px 20px rgba(0,0,0,.75); }*/  ' +
      '/********* QUERIES ********/ ' +
      '@media (max-width: 1370px) {  } ' + 
      '@media (max-width: 1090px) {  div.home-a1-ad .c-hero__copy {     padding-left: 43px !important; }  } ' +
      '@media (max-width: 1024.98px) { div.home-a1-ad h2.c-hero__title--size-large {     font-size: 40px; }       ' +
      '.a1-supplier-logo img {         max-width:80px;         } ' +
      'div.home-a1-ad .c-hero__copy.c-hero__copy--align-right {     text-align: right;     max-width: 55%; } }' +
      '@media only screen and (max-width: 768px) { ' +
      'div.home-a1-ad div.c-hero__copy h2 {     font-size: 42px !important; } ' +
      'div.home-a1-ad .c-hero__sub-title--size-normal {     font-size: 17px;     line-height: 25px; }     ' +
      'div.home-a1-ad .c-hero__copy.c-hero__copy--align-right {     text-align: right;     max-width: 50%; } ' +
      '/*         div.home-a1-ad h2.c-hero__title{     color: #fff;     text-shadow: 0 6px 20px rgba(0,0,0,.75); }*/      }' +
      '@media only screen and (max-width: 600px) { div.home-a1-ad div.c-hero__copy.c-hero__copy--align-left, div.home-a1-ad div.c-hero__copy.c-hero__copy--align-right {     max-width: 90%; 	top: 7%;     transform: translate(-3%, 0%);   }  ' +
      'div.home-a1-ad div.c-hero__copy p {     line-height: 1.4;   } ' +
      'div.home-a1-ad .c-hero__sub-title--size-normal { 	font-size: 17px;     line-height: 25px;   } ' +
      'div.home-a1-ad div.c-hero__copy h2 {     font-size: 37px !important; }  ' +
      'div.home-a1-ad .padding{ 	padding-bottom: 40px; } ' +
      'div.home-a1-ad div.c-hero__copy {     padding-left: 30px;   }  ' +
      '.a1-supplier-logo img {         max-width:80px;         }  } ' +
    '</style>';

    return this.css;
  }

}