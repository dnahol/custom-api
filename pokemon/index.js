'use strict';

module.exports = function(params, res) {
  var pokemonId = Math.floor( Math.random() * (721-1) ) + 1;
//  console.log( pokemonId );
  var pokemonUrl = 'http://pokeapi.co/api/v2/pokemon/' + pokemonId;
//  console.log( pokemonUrl );
  return pokemonUrl;

}
