export class AppCss {
  public css: string;

  getGlobalCSS() {
    this.css =
      `<style >
        .body .c-search__suggestions.ui-menu-item {display:none!important;}
        .searchSpellingSuggestionPrompt {display:none;}
        .c-hero.c-hero--one_third.onethirdcol img { height: auto;}
        button.c-header__search-btn {background-color: transparent;}
        .prop65icon[data-toggle=tooltip]:after {display:none}
        span.prop65icon[data-toggle=tooltip] {    display: inline;}
        span.prop65icon[data-toggle=tooltip]:after {display:none;}
        .loggedinuser .flyout,  .asm_mode .flyout {display:none;}
        .asm_mode .sub-navigation-list .subNav__content {display:none;}
        .loggedinuser .sub-navigation-list .subNav__content, .americanfuneral .sub-navigation-list .subNav__content, .americanhealthcare .sub-navigation-list .subNav__content,
        .americaneducation .sub-navigation-list .subNav__content, .canadianhotel .sub-navigation-list .subNav__content  {display:none;}
        .flyout{ 	cursor: auto; 	}
        .flyout a {padding-left:0!important}
        .flyout.col-md-4{ 	padding: 0 !important; }
        .flyout p{ 	color: #000000; font-family: proxima-nova,sans-serif; 	font-size: 14px !important;
          line-height: 18px; 	font-weight: 500; 	} .flyout p:hover{ 	color: #005da4 !important; }
        .flyout a:hover{ 	background-color: transparent !important; 	}
        .flyout .flyoutheader {      color: #ffffff;     font-size: 28px;     font-family: proxima-nova,sans-serif;     font-weight: 800;  }
        .flyout .flyoutsubheader {      font-weight: 600;     line-height: 20px;     font-size: 14px;     margin-top: 5px !important;  }
        .flyoutdiv.c-hero{ 		width: 315px; 	} .flyout div.c-hero img{ 	width: 100%; } 	.flyout	.featurebrand {font-size:18px;}
        @media (max-width: 768px) { .flyout{     display: none; } }
        .canadianhotel a[title~=Clearance] { display:none; }
        img.bg-white-transparent {
          background-color: rgba(255,255,255,0.9);
          padding: 10px;
        }
      </style>`;

    return this.css;
  }

  getA1CSS() {
    this.css =
      `<style type="text/css">
        .a1-hero .a1-supplier-logo img { position: absolute; top: 20px; right: 0; } .a1-hero .a1-supplier-logo
        img.bg-white { background-color: rgba(255, 255, 255, 0.9) !important; padding: 15px 25px; } .a1-hero
        .a1-hero_primary { background-color: #FFF; } .a1-hero .a1-hero_text-wrap { min-height: 200px; } .a1-hero
        .col-lg-8, .a1-hero .col-md-12 { padding-left: 0; padding-right: 0; } .a1-hero .c-hero__copy { max-width: 86%; }
        .a1-hero .callout { text-transform: uppercase; font-size: 16px; line-height: 22px; } .a1-hero_primary .callout {
        margin-bottom: 15px; } .a1-hero_primary .callout.sale { color: #eC1a3a; } .a1-hero_primary p.sub-headline,
        .a1-hero_primary h2.headline, .a1-hero_primary a.hero-link:hover span { color: #000; } .a1-hero_secondary
        p.sub-headline, .a1-hero_secondary h2.headline, .a1-hero_secondary a.hero-link:hover span { color: #FFF; }
        .a1-hero_primary a:hover span.cta, .a1-hero_secondary a:hover span.cta { text-decoration: underline; }
        .a1-hero_primary a span.cta, .a1-hero_secondary a span.cta { text-decoration: none; font-size: 16px;
        font-weight: 600; } .a1-hero_primary a span.cta { color: #000; } .a1-hero_secondary a span.cta { color: #FFF; }
        .a1-hero h2.headline { font-size: 35px; line-height: 38px; font-weight: 900; } .a1-hero p.sub-headline {
        font-size: 18px; line-height: 25px; font-weight: 400; margin-bottom: 0; padding-bottom: 16px; margin-top: 10px;
        } .a1-supplier-logo img.small { width: 100px; } .a1-supplier-logo img.medium { width: 150px; } .a1-supplier-logo
        img.large { width: 200px; } .c-hero.a1-hero_image { height: 410px; } /********* QUERIES ********/ @media
        (max-width: 1370px) { .a1-hero .c-hero__copy { max-width: 96%; } .a1-hero h2.headline { font-size: 34px;
        line-height: 37px; } } @media (max-width: 1200px) { .a1-hero p.sub-headline { font-size: 16px; line-height:
        22px; } } @media (max-width: 1090px) { .a1-hero .c-hero__copy { max-width: 80%; } .a1-hero .callout { font-size:
        15px; } .a1-hero h2.headline { font-size: 32px; line-height: 35px; } .a1-hero p.sub-headline { font-size: 15px;
        line-height: 21px; } .a1-hero a span.cta { font-size: 15px; } } @media (max-width: 1024.98px) { .a1-hero
        p.sub-headline { margin-top: 5px; } .a1-hero_primary .callout.sale { margin-bottom: 8px; } } @media only screen
        and (max-width: 600px) { .a1-hero .c-hero__copy { max-width: 92%; } .a1-hero h2.headline { font-size: 26px;
        line-height: 30px; } .a1-hero p.sub-headline { padding-bottom: 8px; } .a1-supplier-logo img.small { width: 60px;
        } .a1-supplier-logo img.medium { width: 80px; } .a1-supplier-logo img.large { width: 100px; } .a1-hero
        .a1-supplier-logo img.bg-white { padding: 10px; } .c-hero.a1-hero_image { height: 205px; } .a1-hero
        .a1-hero_text-wrap { min-height: 230px; } }
      </style>`;

    return this.css;
  }

  getSeasonalCSS() {
    this.css =
    `<style type="text/css">
      .seasonalComponent-block {display: flex;flex-wrap: nowrap;margin: 20px auto;}
      .seasonalComponent-block a.seasonalComponent-item {background: #fff;border: 2px solid transparent;border-radius: 4px;display: block;min-height: 250px;padding: 21px;text-align: center;text-decoration: none;max-width: 198px;margin: 12px auto;color: #005da4;font-weight: 600;line-height: 1.2;}
      .seasonalComponent-block a.seasonalComponent-item:hover {border-color: #005da3;box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);}
      .seasonalComponent-callout-inner p {font-size: 16px;line-height: 1.4;}
      .seasonalComponent-block div.seasonalComponent-callout {background-color: #004c86;background-image: -webkit-linear-gradient(-35deg, #013A6B 50%, #005da3 50%);background-image: linear-gradient(-60deg, #013A6B 50%, #005da3 50%);width: 330px;height: 275px;display: flex;align-items: center;justify-content: center;}
      .seasonalComponent-block a.seasonalComponent-item span {width: 100%;text-align: center;margin: 0 0 15px 0;}
      .seasonalComponent-callout-inner {max-width: 90%;}
      .seasonalComponent-callout-inner img {display: block;}
      a.seasonalComponent-item img {padding-bottom: 15px;}
      /* Media Queries */ /* desktop breakpoint */
      @media (max-width: 1200px) {.seasonalComponent-block {flex-wrap: wrap;}
      .seasonalComponent-block div.seasonalComponent-callout {width: 100%;}
      .seasonalComponent-block a.seasonalComponent-item {width: 165px;}}
      /* tablet breakpoint */
      @media (max-width: 992px) {}
      /* mobile breakpoint */
      @media (max-width: 768px) {.seasonalComponent-block a.seasonalComponent-item {width: 198px;}}
      /* xs mobile breakpoint */
      @media (max-width: 576px) {}
      /* // Media Queries */
    </style>`;
    return this.css;
  }

}
