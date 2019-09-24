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
    '}' +

    '</style>';
    return this.css;
  }

  getA1CSS() {
    this.css =
    '<style type="text/css">' +
          ' div.home-a1-ad .c-hero--full .c-hero__image-wrap .c-hero__image {height: 410px !important;}' +
          ' div.home-a1-ad .c-hero__copy.c-hero__copy--align-right {text-align: right;max-width: 55%;}' +
          ' div.home-a1-ad .c-hero__copy.c-hero__copy--align-left {text-align: left;max-width: 55%;}' +
          ' div.home-a1-ad .c-hero__copy.c-hero__copy--align-center {text-align: center;max-width: 70%;}' +
          ' div.home-a1-ad .c-hero__action {margin-top: 18px;}' +
          ' .a1-supplier-logo {position: relative;width: 100%;height: 100%;}' +
          ' .a1-supplier-logo img {position: absolute;bottom: 10px;max-width:110px;}' +
               ' .a1-supplier-logo img.left {left: 1px;}' +
               ' .a1-supplier-logo img.right {right: 1px;}' +
               ' .a1-supplier-logo img.small {width: 50px;}' +
               ' .a1-supplier-logo img.medium {width: 100px;}' +
               ' .a1-supplier-logo img.large {width: 150px;}' +

          ' div.home-a1-ad div.c-hero__copy h2, div.home-a1-ad div.c-hero__copy p {line-height: 1;}' +

          ' div.home-a1-ad h2.c-hero__title--size-large {font-size: 56px;}' +
          ' div.home-a1-ad h2.c-hero__title--blue {color: #005da3;text-shadow: none;}' +
          ' div.home-a1-ad .c-hero__sub-title--blue {color: #005ad3;}' +
          ' div.home-a1-ad a.c-hero__action.btn--primary {border-color: #005da3;background-color: #fff;}' +

          ' div.home-a1-ad .btn--primary {color: #005da3 !important;}' +
          ' div.home-a1-ad a.btn--primary:hover {border: 2px solid #005da3;background-color: transparent;}' +
          ' div.home-a1-ad .c-hero__sub-title--size-normal {font-size: 18px;line-height: 25px;}' +

          ' /********* QUERIES ********/' +
          ' @media (max-width: 1370px) {}' +
          ' @media (max-width: 1090px) {div.home-a1-ad .c-hero__copy {padding-left: 4%;padding-right: 4%;}}' +
          ' @media (max-width: 1024.98px) {' +
          ' div.home-a1-ad h2.c-hero__title--size-large {font-size: 40px;}' +
                ' .a1-supplier-logo img {max-width:80px;}' +
          ' div.home-a1-ad .c-hero__copy.c-hero__copy--align-right {text-align: right;max-width: 55%;}}' +
          ' @media only screen and (max-width: 768px) {div.home-a1-ad div.c-hero__copy h2 {font-size: 42px !important;}' +
          ' div.home-a1-ad .c-hero__sub-title--size-normal {font-size: 17px;line-height: 25px;}' +
              ' div.home-a1-ad .c-hero__copy.c-hero__copy--align-right {text-align: right;max-width: 50%;}}' +
          ' @media only screen and (max-width: 600px) {div.home-a1-ad div.c-hero__copy.c-hero__copy--align-left, div.home-a1-ad div.c-hero__copy.c-hero__copy--align-right {max-width: 90%;top: 7%;transform: translate(-3%, 0%);}' +
          ' div.home-a1-ad div.c-hero__copy.c-hero__copy--align-center {max-width: 90%;top: 7%;transform: translate(-50%, 0%)}' +
          ' div.home-a1-ad div.c-hero__copy p {line-height: 1.4;}' +
          ' div.home-a1-ad .c-hero__sub-title--size-normal {font-size: 17px;line-height: 25px;}' +
          ' div.home-a1-ad div.c-hero__copy h2 {font-size: 37px !important;}' +

          ' div.home-a1-ad .padding{padding-bottom: 40px;}' +
          ' div.home-a1-ad div.c-hero__copy {padding-left: 30px;}' +
              ' .a1-supplier-logo img {max-width:80px;}}' +
          ' </style> ';
    return this.css;
  }

  getSeasonalCSS() {
    this.css =
    '<style type="text/css">' +
    ' .seasonalComponent-block {display: flex;flex-wrap: nowrap;margin: 20px auto;}' +
    ' .seasonalComponent-block a.seasonalComponent-item {background: #fff;border: 2px solid transparent;border-radius: 4px;display: block;min-height: 250px;padding: 21px;text-align: center;text-decoration: none;max-width: 198px;margin: 12px auto;color: #005da4;font-weight: 600;line-height: 1.2;}' +
    ' .seasonalComponent-block a.seasonalComponent-item:hover {border-color: #005da3;box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);}' +
    ' .seasonalComponent-callout-inner p {font-size: 16px;line-height: 1.4;}' +
    ' .seasonalComponent-callout-inner img {width: 100px;}' +
    ' .seasonalComponent-block div.seasonalComponent-callout {background-color: #004c86;background-image: -webkit-linear-gradient(-35deg, #013A6B 50%, #005da3 50%);background-image: linear-gradient(-60deg, #013A6B 50%, #005da3 50%);width: 330px;height: 275px;display: flex;align-items: center;justify-content: center;}' +
    ' .seasonalComponent-block a.seasonalComponent-item span {width: 100%;text-align: center;margin: 0 0 15px 0;}' +
    ' .seasonalComponent-callout-inner {max-width: 90%;}' +
    ' .seasonalComponent-callout-inner img {max-width: 180px;display: block;}' +
    ' a.seasonalComponent-item img {padding-bottom: 15px;}' +
    ' /* Media Queries */ /* desktop breakpoint */' +
    ' @media (max-width: 1200px) {.seasonalComponent-block {flex-wrap: wrap;}' +
    ' .seasonalComponent-block div.seasonalComponent-callout {width: 100%;}' +
    ' .seasonalComponent-block a.seasonalComponent-item {width: 165px;}}' +
    ' /* tablet breakpoint */' +
    ' @media (max-width: 992px) {}' +
    ' /* mobile breakpoint */' +
    ' @media (max-width: 768px) {.seasonalComponent-block a.seasonalComponent-item {width: 198px;}}' +
    ' /* xs mobile breakpoint */' +
    ' @media (max-width: 576px) {}' +
    ' /* // Media Queries */' +
    ' </style> ';
    return this.css;
  }

}
