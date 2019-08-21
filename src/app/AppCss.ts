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

}