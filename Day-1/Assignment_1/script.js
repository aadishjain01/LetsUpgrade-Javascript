console.log("Hey, Welcome to Javascript");

console.error("This is an error.");

console.warn("This is warning.");

console.time("xyz");

{
    let a= 5;
    let b= 4;
    console.log(a+b);
}


console.timeEnd("xyz");

var a={name:"Aadish", age:"20",city:"Indore"};
var b={name:"Aman", age:"21",city:"Indore"};
var c={name:"Aditya", age:"20",city:"Bhopal"};

console.table({a,b,c});

console.log("%cLoving JavaScript","color:red");
