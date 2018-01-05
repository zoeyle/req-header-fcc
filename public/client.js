// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

var toRet;

$(function() {
  console.log('hello world :o');
  
  $.get('/info', function(ret) {
    toRet = ret;
    console.log(JSON.stringify(toRet));
  });
  

  $('button').submit(function(event) {
    event.preventDefault();
    // console.log(JSON.stringify(toRet));
     // $.post('/ret?', function() {
    $('<p></p>').text(toRet).appendTo('#show'); 
 
    // });

});
});