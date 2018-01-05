// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

var toRet;

$(function() {
  console.log('hello world :o');
  
  $.get('/ret', function(ret) {
    toRet = ret;
  });
  

  $('button').submit(function(event) {
    event.preventDefault();
    console.log(JSON.stringify(toRet));
    $('<p></p>').text(toRet).appendTo('section#show'); 
 
    });


});