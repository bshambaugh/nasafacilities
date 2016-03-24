
var fs = require('fs');

var filestring = 'rows.nt';

var teststring = 'http://data.nasa.gov/resource/gvk9-iz74/';

M = [];
N = [];
O = [];
P = [];

K = ['1','2','3','4','5','6','7','8','9','10','11','12'];
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
console.log('dc:title'+' '+'\'Ames Research Center\';');
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
