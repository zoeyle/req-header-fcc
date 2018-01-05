// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

// $(function() {
//   console.log('hello world :o');
  
//   $.get('/info', function(info) {
//     info.
//     });
//   });

//   $('whoami').whoami(function(event) {
//     event.preventDefault();
//     // var dream = $('input').val();
    
 
//     });
//   });

// });

$(function() {
  console.log('hello world :o');
  
  $.get('/info', function(info) {
    $('#info').remove();
    });
  

  $('whoami').whoami(function(event) {
    event.preventDefault();
    $('#show').appendTo('#info'); 
 
    });


});