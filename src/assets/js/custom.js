// function loadD1iframe(code) {
//   var head = '<!DOCTYPE html><html lang="en><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="stylesheet" href="https://use.typekit.net/tro4boa.css"><link rel="stylesheet" href="https://www.americanhotel.com/_ui/responsive/theme-americanhotel/css/style.css"></head>';
//   var html = head + '<div class="content"><style type="text/css"> .onethirdcol { 	max-height: 350px; } .c-hero__copy { 	max-width: 100%; } .w-50.square { 	width: 30% !important; } .c-hero__sub-title--size-normal { 	line-height: 24px; } .w-40 { 	width: 40% !important; }     .logo-stacked {     max-height: 80px; }   .logo-stacked {     max-height: 80px; } .btn--default, .btn--square:hover { background-color: rgb(0, 93, 163); border: rgb(0, 93, 163); color: #fff; }  { background-color: transparent; border: 2px solid rgb(0, 93, 163); color: rgb(0, 93, 163); } .btn--alternate:hover { background-color: rgb(0, 93, 163) } .btn--alternate { color: rgb(0, 93, 163);background-color: transparent; border: 2px solid rgb(0, 93, 163); } </style>  <div class="container">   <div class="row mb-1">    <!-- D1 -->     <div class="col-lg-4 col-md-12 mt-4">' + code + '</div>                  <!-- D2 -->     <div class="col-lg-4 col-md-12 mt-4">       <div class="c-hero c-hero--one_third onethirdcol">         <picture>           <source media="(min-width: 1201px)" srcset="https://images.americanhotel.com/images/banners/hp-registry-widescreen.jpg">           <img alt="Home Promo Two Thirds 1 Banner" class="c-hero__image" src="https://images.americanhotel.com/images/banners/hp-registry-widescreen.jpg"> </picture>         <div class="c-hero__inner">           <div class="c-hero__copy c-hero__copy--align-center"><img class="w-50 pb-2" src="https://images.americanhotel.com/images/banners/hp-registry-logo.png">             <h4 class="c-hero__sub-title c-hero__sub-title--white c-hero__sub-title--weight-regular c-hero__sub-title--size-normal">4,000+ products with the perfect blend of quality and value</h4>             <a class="btn btn--primary c-hero__action" href="/registry?icid=american-hotel-launch_hp_otb_2_20190412_2_registry" title="Learn More">Learn More</a></div>         </div>       </div>     </div>     <!-- D3 -->     <div class="col-lg-4 col-md-12 mt-4">       <div class="c-hero c-hero--one_third onethirdcol">         <picture>           <source media="(min-width: 1201px)" srcset="https://images.americanhotel.com/images/banners/Half-Width-Pool-Towels.jpg">           <img alt="Home Promo Two Thirds 1 Banner" class="c-hero__image" src="https://images.americanhotel.com/images/banners/Half-Width-Pool-Towels.jpg"> </picture>         <div class="c-hero__inner">           <div class="c-hero__copy c-hero__copy--align-center">             <h2 class="c-hero__title c-hero__title--white c-hero__title--weight-extrabold c-hero__title--size-normal">Pool Towels</h2>             <h4 class="c-hero__sub-title c-hero__sub-title--white c-hero__sub-title--weight-regular c-hero__sub-title--size-normal">Quality pool towels from quality brands</h4>             <a class="btn btn--primary c-hero__action" href="/registrypooltowels?icid=registry-pool-towels-(d3)_hp_otb_4_20190621_1_cta" title="Shop Now">Shop Now</a></div>         </div>       </div>     </div>   </div> </div></div></body></html>';
//   var iframe = document.querySelector('.D1iframe');
//   iframe.src = 'data:text/html,' + encodeURIComponent(html);
// }

/* Insert block of code in iframe */
function insertCodeBlock(code, ad) {
  switch (ad) {     
    case 'email':
        $('.email-iframe').contents().find('#emailHTML').html(code);
      break;
  }
}

/* Insert background in iframe */
function insertbg(img, ad) {
  switch (ad) {     
    case 'email':
      $('.email-iframe').contents().find('#emailbg').attr('src', img);
  }
}

/* Insert logo in iframe */
function insertLogo(logo, ad) {
  switch (ad) {
    case 'Seasonal':
      $('.Seasonal-iframe').contents().find('#Seasonallogo').attr('src', logo);
      break;

    case 'email':
        $('.email-iframe').contents().find('#emaillogo').attr('src', logo);
        $('.email-iframe').contents().find('#emaillogo').attr('height', 51);
        $('.email-iframe').contents().find('#emaillogo').attr('width', 211);
        $('.email-iframe').contents().find('.border-top').css('border-top', '1px solid #CCCCCC');  

      if (logo == '') {
        $('.email-iframe').contents().find('#emaillogo').attr('height', '');
        $('.email-iframe').contents().find('#emaillogo').attr('width', '');
        $('.email-iframe').contents().find('.border-top').css('border-top', 'transparent');
      } 
  }
}

/* Insert collout bar in iframe */
function insertCalloutBar(bar) {
  $('.email-iframe').contents().find('#calloutHTML').html(bar);
}

/* Copy html */
function copy(code) {
  let txtarea;
  txtarea = document.createElement('textarea');
  txtarea.style.position = 'fixed';
  txtarea.style.left = '0';
  txtarea.style.top = '0';
  txtarea.style.opacity = '0';
  txtarea.value = code;
  document.body.appendChild(txtarea);
  txtarea.focus();
  txtarea.select();
  document.execCommand('copy');
  document.body.removeChild(txtarea);
}

/* Download files */
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

$(document).ready(function () {
  //mobile
  $('.btn-mobile').on('click', function (e) {
    $('iframe').removeClass('iframe-widescreen iframe-desktop iframe-tablet').addClass("iframe-mobile");
    $(this).addClass("current");
    $('.btn-tablet,.btn-desktop,.btn-widescreen').removeClass('current');
    e.preventDefault();
  });

  //tablet
  $('.btn-tablet').on('click', function (e) {
    $('iframe').removeClass('iframe-widescreen iframe-desktop iframe-mobile').addClass("iframe-tablet");
    $(this).addClass("current");
    $('.btn-mobile,.btn-desktop,.btn-widescreen').removeClass('current');
    e.preventDefault();
  });

  //dekstop
  $('.btn-desktop').on('click', function (e) {
    $('iframe').removeClass('iframe-widescreen iframe-mobile iframe-tablet').addClass("iframe-desktop");
    $(this).addClass("current");
    $('.btn-tablet,.btn-mobile,.btn-widescreen').removeClass('current');
    e.preventDefault();
  });

  //widescreen
  $('.btn-widescreen').on('click', function (e) {
    $('iframe').removeClass('iframe-mobile iframe-desktop iframe-tablet').addClass("iframe-widescreen");
    $(this).addClass("current");
    $('.btn-tablet,.btn-desktop,.btn-mobile').removeClass('current');
    e.preventDefault();
  });

  //gutter smoothness
  $('.as-split-gutter-icon').mousedown(function () {
    $('iframe').css("pointer-events", "none");
  });
  $('.as-split-gutter-icon').mouseup(function () {
    $('iframe').css("pointer-events", "auto");
  });
  
});
