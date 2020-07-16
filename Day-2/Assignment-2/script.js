console.log("------Methods of String-------");

let text = "The quick brown fox jumps over the wall";

console.log(text);

// To check the length
console.log(text.length)

// To change the case
console.log(text.toLowerCase());
console.log(text.toUpperCase());

// Accessing the index
console.log(text[5]);
console.log(text.indexOf('o'));
console.log(text.lastIndexOf('o'))

console.log(text.charAt('12'));

console.log(text.endsWith("wall"));

console.log(text.split(' '));

//Substring

console.log("Substring : "+ text.substring(0,9));

//Slice " string.slice(start, end) "

console.log("Slice : "+ text.slice(0,6));
console.log("Slice : "+ text.slice(0));
console.log("Slice : "+ text.slice(-6));
console.log("Slice : "+ text.slice(-6,-1));

//Replace
console.log("Replace : "+ text.replace("brown","black"));

//ReplaceAll

//console.log("ReplaceAll : "+ text.replaceAll("The text is replaced."));

console.log("---------Methods of Array---------");

let arr = ['one', true, 32, ['1','2']];
let arr2 = ['rio', 'berlin','alicia'];
console.log(arr);


console.log(Array.isArray(arr));
// indexOf('value')

console.log(arr.reverse())

console.log(arr[3]);

console.log(arr.concat(arr2));

// Appending an element
// At the start
arr2.unshift('tokyo');
console.log(arr2);
// At the end
arr2.push('helsinki');
console.log(arr2);



// Removing an element
// From the start
arr2.shift('tokyo');
console.log(arr2);

// From the end
console.log(arr2.pop());

//slice

var arr3=["AngularJS","Node.js","JQuery","Bootstrap"]  
var result3=arr3.slice(1,2); 

console.log(result3);
console.log(arr3.slice(-4,-1));

//reverse

console.log("Reverse: "+arr3.reverse());

//isArray

console.log("aar3 is array :"+Array.isArray(arr3));

//splice

var arr4=["Monday","Tuesday","Saturday","Sunday","Thursday","Friday"];
var result4=arr4.splice(2,2,"Wednsday");
console.log("Splice : "+arr4);
console.log("Removed elements from splice :"+result4);