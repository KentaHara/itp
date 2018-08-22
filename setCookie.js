document.cookie = 'ITP_20180822=hoge';

var r = document.cookie.split(';');
 
r.forEach(function(value) {
  var content = value.split('=');   
  console.log( content[1] );
})
