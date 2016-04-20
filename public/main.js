'use strict'

$(function(){

  $('button#getPower').click(getPower);
  $('button#getPic').click(getPerson);
//  renderPeople();
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

function getPerson(){
  var email = $('#email').val();
  var personObj = storePerson(email);
  var $card = makePersonCard(personObj);

  $card.appendTo('div.pics');

}

function storePerson(email) {
  var personObj = {
    "email": email
  }

  var people = PeopleStorage.get();
  people.push(personObj);
  PeopleStorage.write(people);

  return personObj;
}

function makePersonCard(personObj) {
  var $card = $('<div>').addClass('card');
  var $pic = getImage(personObj.email);
  var $email = $('<p>').text(`Email: ${personObj.email}`);
  var $pokemon = getPokemon(personObj.email);
  var $magicEight = getMagicEight(personObj.email);

  $card.append($pic, $email, $pokemon, $magicEight);
  return $card;
}


function getImage(email) {
  var $pic = $('<img>');

  $.get(`/image/${email}`)
  .done(function(data) {

    $pic = $pic.attr('src', data.toString());

  })
  .fail(function(error) {
    console.log('error: ', error);
  });

  return $pic;
}

function getPokemon(email) {
  var $pokemon = $('<p>');

  $.get(`/pokemon/${email}`)
  .done(function(data) {

    $pokemon = $pokemon.text(`Pokemon: ${data})`);

  })
  .fail(function(error) {
    console.log('error: ', error);
  });

  return $pokemon;
}

function getMagicEight(email) {
  var $magicEight = $('<p>');

  $.get(`/magicEight/${email}`)
  .done(function(data) {

    $magicEight = $magicEight.text(`Will they win the lottery?: ${data}`);

  })
  .fail(function(error) {
    console.log('error: ', error);
  });

  return $magicEight;

}




// renderPeople() {
//   var people = PeopleStorage.get();
//
// }


var PeopleStorage = {
  get: function() {
    try {
      var people = JSON.parse(localStorage.people);
    } catch(err) {
      var people = [];
    }
    return people;
  },
  write: function(people) {
    localStorage.people = JSON.stringify(people);
  }
};
