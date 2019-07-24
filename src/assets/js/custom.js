// function loadD1iframe(code) {
//   var head = '<!DOCTYPE html><html lang="en><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="stylesheet" href="https://use.typekit.net/tro4boa.css"><link rel="stylesheet" href="https://www.americanhotel.com/_ui/responsive/theme-americanhotel/css/style.css"></head>';
//   var html = head + '<div class="content"><style type="text/css"> .onethirdcol { 	max-height: 350px; } .c-hero__copy { 	max-width: 100%; } .w-50.square { 	width: 30% !important; } .c-hero__sub-title--size-normal { 	line-height: 24px; } .w-40 { 	width: 40% !important; }     .logo-stacked {     max-height: 80px; }   .logo-stacked {     max-height: 80px; } .btn--default, .btn--square:hover { background-color: rgb(0, 93, 163); border: rgb(0, 93, 163); color: #fff; }  { background-color: transparent; border: 2px solid rgb(0, 93, 163); color: rgb(0, 93, 163); } .btn--alternate:hover { background-color: rgb(0, 93, 163) } .btn--alternate { color: rgb(0, 93, 163);background-color: transparent; border: 2px solid rgb(0, 93, 163); } </style>  <div class="container">   <div class="row mb-1">    <!-- D1 -->     <div class="col-lg-4 col-md-12 mt-4">' + code + '</div>                  <!-- D2 -->     <div class="col-lg-4 col-md-12 mt-4">       <div class="c-hero c-hero--one_third onethirdcol">         <picture>           <source media="(min-width: 1201px)" srcset="https://images.americanhotel.com/images/banners/hp-registry-widescreen.jpg">           <img alt="Home Promo Two Thirds 1 Banner" class="c-hero__image" src="https://images.americanhotel.com/images/banners/hp-registry-widescreen.jpg"> </picture>         <div class="c-hero__inner">           <div class="c-hero__copy c-hero__copy--align-center"><img class="w-50 pb-2" src="https://images.americanhotel.com/images/banners/hp-registry-logo.png">             <h4 class="c-hero__sub-title c-hero__sub-title--white c-hero__sub-title--weight-regular c-hero__sub-title--size-normal">4,000+ products with the perfect blend of quality and value</h4>             <a class="btn btn--primary c-hero__action" href="/registry?icid=american-hotel-launch_hp_otb_2_20190412_2_registry" title="Learn More">Learn More</a></div>         </div>       </div>     </div>     <!-- D3 -->     <div class="col-lg-4 col-md-12 mt-4">       <div class="c-hero c-hero--one_third onethirdcol">         <picture>           <source media="(min-width: 1201px)" srcset="https://images.americanhotel.com/images/banners/Half-Width-Pool-Towels.jpg">           <img alt="Home Promo Two Thirds 1 Banner" class="c-hero__image" src="https://images.americanhotel.com/images/banners/Half-Width-Pool-Towels.jpg"> </picture>         <div class="c-hero__inner">           <div class="c-hero__copy c-hero__copy--align-center">             <h2 class="c-hero__title c-hero__title--white c-hero__title--weight-extrabold c-hero__title--size-normal">Pool Towels</h2>             <h4 class="c-hero__sub-title c-hero__sub-title--white c-hero__sub-title--weight-regular c-hero__sub-title--size-normal">Quality pool towels from quality brands</h4>             <a class="btn btn--primary c-hero__action" href="/registrypooltowels?icid=registry-pool-towels-(d3)_hp_otb_4_20190621_1_cta" title="Shop Now">Shop Now</a></div>         </div>       </div>     </div>   </div> </div></div></body></html>';
//   var iframe = document.querySelector('.D1iframe');
//   iframe.src = 'data:text/html,' + encodeURIComponent(html);
// }

// A1 iframe Output
function insertD1(code) {
  var D1HTML = $('.D1HTML');
  // $('input').change(function () {
  //   D1HTML.contents().find('#D1').append(code);
  // });
  var style = '<script>$( document ).ready(function() { $(\'a.btn\').click(function(e) {e.preventDefault();});});});</script>'
  D1HTML.contents().find('#D1').html(style + code);
}

$(document).ready(function () {
  //mobile
  $('.btn-mobile').on('click', function (e) {
    $('iframe').removeClass('iframe-widescreen iframe-desktop iframe-tablet').addClass("iframe-mobile");
    e.preventDefault();
  });

  //tablet
  $('.btn-tablet').on('click', function (e) {
    $('iframe').removeClass('iframe-widescreen iframe-desktop iframe-mobile').addClass("iframe-tablet");
    e.preventDefault();
  });

  //dekstop
  $('.btn-desktop').on('click', function (e) {
    $('iframe').removeClass('iframe-widescreen iframe-mobile iframe-tablet').addClass("iframe-desktop");
    e.preventDefault();
  });

  //widescreen
  $('.btn-widescreen').on('click', function (e) {
    $('iframe').removeClass('iframe-mobile iframe-desktop iframe-tablet').addClass("iframe-widescreen");
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
