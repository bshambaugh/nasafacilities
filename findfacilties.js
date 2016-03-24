var fs = require('fs');

var Firstfilename = 'rows.nt';
//var Secondfilename = 'nasacenters.txt';

var Secondfilename = 'amesresearchcenterfacilities.txt';

 var D = fs.readFileSync(Secondfilename).toString();

var DD = fs.readFileSync(Firstfilename).toString();

//var D = fs.readFileSync(Secondfilename);

function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
   return arrayOfStrings;
}

var carrriageR = '\r\n';
var comma = ',';
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

var ds = 'http://data.nasa.gov/resource/gvk9-iz74/';

for (var j = 0; j < K.length; j++) {
console.log('<'+ds+K[j]+'>'+' '+'<'+ds+'facility>');
M[j] = '<'+ds+K[j]+'>'+' '+'<'+ds+'facility>';
}

console.log('The array is');
console.log(M);
var element = M[j];
var lpl = "\^\(";
var rpl = "\)\$";
var space ="[\\s]";
var colon ='["][0-9A-Za-z\\s\\-]*["]';

for (var j = 0; j < M.length; j++) {
var re1 = new RegExp(element);
console.log(re1.test(DD));
}

var rest = M[0];
var re2 = new RegExp(rest+space+colon);
var astring = '<http://data.nasa.gov/resource/gvk9-iz74/1> <http://data.nasa.gov/resource/gvk9-iz74/facility> "046 - AIRCRAFT MAINTENANCE HANGAR 2"';
console.log(astring);
console.log(astring.match(re2));

//console.log(DD);

/*
for(var j = 0; j < M.length; j++) {
 var re3 = new RegExp(element);
 console.log(DD.match(re3));
} 
*/
