'use strict';

module.exports = function(params, res) {
  var poss = ['Yes', 'No', 'Maybe'];
  var ans = Math.floor( Math.random() * (2-0) ) + 0;
  var ans = poss[ans];
  return ans;
}
