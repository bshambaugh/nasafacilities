var fs = require('fs');

var Secondfilename = 'amesresearchcenterfacilities.txt';

var processed = Secondfilename.replace(/\.txt/ig,'-processed.txt');

console.log(processed);

var nasacenter = 'Ames Research Center';

var dbg = 0;
 var D = fs.readFileSync(Secondfilename).toString();

function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
   return arrayOfStrings;
}

var semicolon = '\n';

//console.log(splitString(D, semicolon));
var L = splitString(D, semicolon);

if(dbg == 1) {
console.log(L);
}


var K = [];
var M = [];

 for (var j = 0; j < L.length; j++) {
if (L[j] != '') {
if(dbg == 1) {
 console.log(L[j]);
 }
 K[j] = L[j];
  }
}

if(dbg == 1) {
console.log(K);
}

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
if(dbg == 1) {
console.log(regexpression);
}

var str = fs.readFileSync(filestring).toString();
var res = str.match(/so/gi);
re1 = str.match(regexpression);
if(dbg == 1) {
console.log(re1[0]);
}
N[j] = re1[0];
}

if(dbg == 1) {
console.log("break");
}

for (var k = 0; k < N.length; k++) {
  if(dbg == 1) {
  console.log(N[k]);
  }
  re2 = N[k].match(/".*"/);
  if(dbg == 1) {
  console.log(re2[0]);
  }
  O[k] = re2[0];
}

for (var h = 0; h < O.length; h++) {
  var re3 = O[h].replace(/"/ig,'');
  P[h] = re3;
  if(dbg == 1) {
  console.log(re3);
  }
}

if(dbg == 1) {
console.log("last track");
console.log(' ');
}

clearFile();
console.log('<> a ds:center ;');
savetoFile('<> a ds:center ;'+'\n');
console.log('dc:title'+' '+'\''+nasacenter+'\';');
savetoFile('dc:title'+' '+'\''+nasacenter+'\';'+'\n');
for (var x = 0; x < K.length - 1; x++) {
  console.log('ds:facility'+' '+'<#'+K[x]+'>'+';');
}
console.log('ds:facility'+' '+'<#'+K[x]+'>'+'.');
savetoFile('ds:facility'+' '+'<#'+K[x]+'>'+'.'+'\n');
console.log('');
savetoFile(''+'\n');


for (var l = 0; l < P.length; l++) {
   console.log('<#'+K[l]+'>'+' '+'dc:title'+' '+'\''+P[l]+'\''+';');
   savetoFile('<#'+K[l]+'>'+' '+'dc:title'+' '+'\''+P[l]+'\''+';'+'\n');
   console.log('owl:sameAs'+' '+'ds:'+K[l]+';');
   savetoFile('owl:sameAs'+' '+'ds:'+K[l]+';'+'\n');
   console.log('ds:'+K[l]+' a '+'dsbase:gvk9-iz74.');
   savetoFile('ds:'+K[l]+' a '+'dsbase:gvk9-iz74.'+'\n');
   console.log('');
   savetoFile(''+'\n');
}


function savetoFile(body) {
  fs.appendFile('./'+processed, body, function(err){
  if(err) throw err;

  });
}

function clearFile() {
  fs.writeFile('./'+processed, '', function(err){
  if(err) throw err;

  });
}
