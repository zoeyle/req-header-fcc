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
  

  $('button').click(function(event) {
    event.preventDefault();
    // window.alert(JSON.stringify(toRet));
    // console.log(JSON.stringify(toRet));
     // $.post('/ret?', function() {
    $('#show').html(JSON.stringify(toRet)); 
 
    // });

});
});