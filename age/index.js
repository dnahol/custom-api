'use strict';



module.exports = function(bdayStr, res) {
  bdayStr = bdayStr[0];
  console.log(  'bdayStr: ', bdayStr );
  var month = Number( bdayStr.substring(0,2) );
  var day = Number( bdayStr.substring(2,4) ) - 1;
  var year = Number( bdayStr.substring(4,8) );
  var today = new Date();
  var age = today.getFullYear() - Number(year);
  console.log( 'today.getFullYear: ' , today.getFullYear());
  console.log( 'Number(year): ', Number(year));
  if( month >= today.getMonth() && day >= today.getDate() ) {
    age = age - 1;
  }
  res.write(`${age}\n`);
  res.end('\n');
}
