var x = 14;
x=12;

console.log("x with var decleration :"+x);

{
    let x=10;
    console.log("x with let decleration :"+x);
}

console.log("x after let decleration :"+x);

const z = 3;
console.log("z with const decleration :"+z);

const y =0;
y=3; //TypeError: Assignment to constant variable.
console.log("y with const decleration :"+y);



