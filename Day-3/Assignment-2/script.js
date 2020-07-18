var str=prompt("Enter you OS name and version seprated by scpace : ");

var str2=str.split(" ");

var name = str2[0];
var version = str2[1];

console.log(`The OS name is ${name} and version is ${version}`);
