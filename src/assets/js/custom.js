// $(document).ready(function() {
//     var headlineId = $('#headlineId');
//     var D1 = $('.c-hero__title');
//     console.log(headlineId); console.log(D1); 
//     headlineId.keypress(function(event) {
//       D1.html(headlineId.val().replace(/\r?\n/g, '<br />'));
//       console.log(headlineId.val());
//     });
//   });

  // (keydown.enter)="addLinebreak($event) in app.component.ts and html
  // addLinebreak(event) {
  //   replaceNewlineToBR();
  // }

// function replaceNewlineToBR() {
//   $('#headlineId').keypress(function(event) {
//     $('.c-hero__title').html($('#headlineId').val().replace(/\r?\n/g, '<br />'));
//     console.log($('#headlineId').val());
//   });
// }

// var option = document.getElementById('buttonSelect');

// function changeButton() {
//   var value = this.getAttribute('value');
//   console.log(value);
//   window.alert('Button select: ' + value);
// }

// for (var i = 0; i < options.length; i++) {
//   options[i].addEventListener('click',changeName,false);
//   }

function loadD1iframe(code) {
  var head = '<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1" /><link rel="stylesheet" href="https://use.typekit.net/tro4boa.css"><link rel="stylesheet" href="https://www.americanhotel.com/_ui/responsive/theme-americanhotel/css/style.css"></link></head>';
  // var html = head + '<body><style type="text/css"> .onethirdcol { 	max-height: 350px; } .c-hero__copy { 	max-width: 100%; } .w-50.square { 	width: 30% !important; } .c-hero__sub-title--size-normal { 	line-height: 24px; } .w-40 { 	width: 40% !important; }     .logo-stacked {     max-height: 80px; }   .logo-stacked {     max-height: 80px; }   </style>  <div class="container">   <div class="row mb-1">    <!-- D1 --><div class="col-lg-4 col-md-12 mt-4">' + code + '</di><!-- D2 -->     <div class="col-lg-4 col-md-12 mt-4">       <div class="c-hero c-hero--one_third onethirdcol">         <picture>           <source media="(min-width: 1201px)" srcset="https://images.americanhotel.com/images/banners/hp-registry-widescreen.jpg">           <img alt="Home Promo Two Thirds 1 Banner" class="c-hero__image" src="https://images.americanhotel.com/images/banners/hp-registry-widescreen.jpg"> </picture>         <div class="c-hero__inner">           <div class="c-hero__copy c-hero__copy--align-center"><img class="w-50 pb-2" src="https://images.americanhotel.com/images/banners/hp-registry-logo.png">             <h4 class="c-hero__sub-title c-hero__sub-title--white c-hero__sub-title--weight-regular c-hero__sub-title--size-normal">4,000+ products with the perfect blend of quality and value</h4>             <a class="btn btn--primary c-hero__action" href="/registry?icid=american-hotel-launch_hp_otb_2_20190412_2_registry" title="Learn More">Learn More</a></div>         </div>       </div>     </div>     <!-- D3 -->     <div class="col-lg-4 col-md-12 mt-4">       <div class="c-hero c-hero--one_third onethirdcol">         <picture>           <source media="(min-width: 1201px)" srcset="https://images.americanhotel.com/images/banners/Half-Width-Pool-Towels.jpg">           <img alt="Home Promo Two Thirds 1 Banner" class="c-hero__image" src="https://images.americanhotel.com/images/banners/Half-Width-Pool-Towels.jpg"> </picture>         <div class="c-hero__inner">           <div class="c-hero__copy c-hero__copy--align-center">             <h2 class="c-hero__title c-hero__title--white c-hero__title--weight-extrabold c-hero__title--size-normal">Pool Towels</h2>             <h4 class="c-hero__sub-title c-hero__sub-title--white c-hero__sub-title--weight-regular c-hero__sub-title--size-normal">Quality pool towels from quality brands</h4>             <a class="btn btn--primary c-hero__action" href="/registrypooltowels?icid=registry-pool-towels-(d3)_hp_otb_4_20190621_1_cta" title="Shop Now">Shop Now</a></div>         </div>       </div>     </div>   </div> </div></body></html>'
  var html = head + '<body><div class="content"><style type="text/css"> .onethirdcol { 	max-height: 350px; } .c-hero__copy { 	max-width: 100%; } .w-50.square { 	width: 30% !important; } .c-hero__sub-title--size-normal { 	line-height: 24px; } .w-40 { 	width: 40% !important; }     .logo-stacked {     max-height: 80px; }   .logo-stacked {     max-height: 80px; }   </style>  <div class="container">   <div class="row mb-1">    <!-- D1 -->     <div class="col-lg-4 col-md-12 mt-4">' + code + '</div>                  <!-- D2 -->     <div class="col-lg-4 col-md-12 mt-4">       <div class="c-hero c-hero--one_third onethirdcol">         <picture>           <source media="(min-width: 1201px)" srcset="https://images.americanhotel.com/images/banners/hp-registry-widescreen.jpg">           <img alt="Home Promo Two Thirds 1 Banner" class="c-hero__image" src="https://images.americanhotel.com/images/banners/hp-registry-widescreen.jpg"> </picture>         <div class="c-hero__inner">           <div class="c-hero__copy c-hero__copy--align-center"><img class="w-50 pb-2" src="https://images.americanhotel.com/images/banners/hp-registry-logo.png">             <h4 class="c-hero__sub-title c-hero__sub-title--white c-hero__sub-title--weight-regular c-hero__sub-title--size-normal">4,000+ products with the perfect blend of quality and value</h4>             <a class="btn btn--primary c-hero__action" href="/registry?icid=american-hotel-launch_hp_otb_2_20190412_2_registry" title="Learn More">Learn More</a></div>         </div>       </div>     </div>     <!-- D3 -->     <div class="col-lg-4 col-md-12 mt-4">       <div class="c-hero c-hero--one_third onethirdcol">         <picture>           <source media="(min-width: 1201px)" srcset="https://images.americanhotel.com/images/banners/Half-Width-Pool-Towels.jpg">           <img alt="Home Promo Two Thirds 1 Banner" class="c-hero__image" src="https://images.americanhotel.com/images/banners/Half-Width-Pool-Towels.jpg"> </picture>         <div class="c-hero__inner">           <div class="c-hero__copy c-hero__copy--align-center">             <h2 class="c-hero__title c-hero__title--white c-hero__title--weight-extrabold c-hero__title--size-normal">Pool Towels</h2>             <h4 class="c-hero__sub-title c-hero__sub-title--white c-hero__sub-title--weight-regular c-hero__sub-title--size-normal">Quality pool towels from quality brands</h4>             <a class="btn btn--primary c-hero__action" href="/registrypooltowels?icid=registry-pool-towels-(d3)_hp_otb_4_20190621_1_cta" title="Shop Now">Shop Now</a></div>         </div>       </div>     </div>   </div> </div></div></body></html>';
  var iframe = document.querySelector('.D1iframe');
  iframe.src = 'data:text/html,' + encodeURIComponent(html);
  
}
