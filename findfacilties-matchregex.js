var fs = require('fs');

var Secondfilename = 'amesresearchcenterfacilities.txt';

var nasacenter = 'Ames Research Center';

 var D = fs.readFileSync(Secondfilename).toString();

function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
   return arrayOfStrings;
}

var semicolon = '\n';

//console.log(splitString(D, semicolon));
var L = splitString(D, semicolon);

console.log(L);


var K = [];
var M = [];

 for (var j = 0; j < L.length; j++) {
if (L[j] != '') {
 console.log(L[j]);
 K[j] = L[j];
  }
}

console.log(K);


var filestring = 'rows.nt';

var teststring = 'http://data.nasa.gov/resource/gvk9-iz74/';

M = [];
N = [];
O = [];
P = [];

Mtwo = '\\s';
quote = '"';
any = '.*';

 for (var j = 0; j < K.length; j++) {
M[j] = '<'+teststring+K[j]+'>'+' '+'<'+teststring+'facility>';
var regexpression = new RegExp(M[j]+Mtwo+quote+any+quote);
console.log(regexpression);

var str = fs.readFileSync(filestring).toString();
var res = str.match(/so/gi);
re1 = str.match(regexpression);
console.log(re1[0]);
N[j] = re1[0];
}

console.log("break");

for (var k = 0; k < N.length; k++) {
  console.log(N[k]);
  re2 = N[k].match(/".*"/);
  console.log(re2[0]);
  O[k] = re2[0];
}

for (var h = 0; h < O.length; h++) {
  var re3 = O[h].replace(/"/ig,'');
  P[h] = re3;
  console.log(re3);
}

console.log("last track");
console.log(' ');

console.log('<> a ds:center ;');
console.log('dc:title'+' '+'\''+nasacenter+'\';');
for (var x = 0; x < K.length - 1; x++) {
  console.log('ds:facility'+' '+'<#'+K[x]+'>'+';');
}
console.log('ds:facility'+' '+'<#'+K[x]+'>'+'.');
console.log('');


for (var l = 0; l < P.length; l++) {
   console.log('<#'+K[l]+'>'+' '+'dc:title'+' '+'\''+P[l]+'\''+';');
   console.log('owl:sameAs'+' '+'ds:'+K[l]+';');
   console.log('ds:'+K[l]+' a '+'dsbase:gvk9-iz74.');
   console.log(' ');
}
