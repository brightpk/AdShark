// $(document).ready(function() {
//     var headlineId = $('#headlineId');
//     var D1 = $('.c-hero__title');
//     console.log(headlineId); console.log(D1);
  
//     headlineId.keypress(function(event) {
//       D1.html(headlineId.val().replace(/\r?\n/g, '<br />'));
//       console.log(headlineId.val());
//     });
//   });

function replaceNewlineToBR() {
  // var headlineId = $('#headlineId');
  // console.log(headlineId);
  // var D1 = $('.c-hero__title');
  // console.log(D1);
  $('#headlineId').keypress(function(event) {
    $('.c-hero__title').html($('#headlineId').val().replace(/\r?\n/g, '<br />'));
    console.log(headlineId.val());
  });
}