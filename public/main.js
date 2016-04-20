'use strict'

$(function(){

  $('button#getPower').click(getPower);
  $('button#getPic').click(getImage);

});

function getPower() {
  var base = $('#base').val();
  var exponent = $('#exponent').val();

  $.get(`/math/pow/${base}/${exponent}`)
  .done(function(data) {
    $('#exp').text('ANS: ' + data.toString());
  })
  .fail(function(error) {
    console.log('error: ', error);
  });

}

function getImage() {
  var email = $('#email').val();

  $.get(`/image/${email}`)
  .done(function(data) {
    console.log('data: ', data);
    var $pic = $('<img>').attr('src', data.toString());
    console.log(  '$pic: ', $pic  )
    $pic.appendTo('div.pics');
  })
  .fail(function(error) {
    console.log('error: ', error);
  });

}
