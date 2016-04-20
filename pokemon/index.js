'use strict';

module.exports = function(params, res) {
  var pokemonId = Math.floor( Math.random() * (721-1) ) + 1;
  var pokemonUrl = 'http://pokeapi.co/api/v2/pokemon/' + pokemonId;
  return pokemonUrl;
}
