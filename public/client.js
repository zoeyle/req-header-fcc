// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

var toRet="hi";

$(function() {
  console.log(toRet);
  
  $.get('/info', function(ret) {
    toRet = ret;
    
    // console.log(toRet);
  });
  

  $('button').submit(function(event) {
    event.preventDefault();
    window.alert(toRet);
    console.log(JSON.stringify(toRet));
     // $.post('/ret?', function() {
    $('#show').text(toRet); 
 
    // });

});
});