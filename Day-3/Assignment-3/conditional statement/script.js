var marks = +prompt("Enter marks : ");


if(marks >=85){
    console.log(`Marks are ${marks} and grade is A`);
}
else if(marks >=65 && marks<85){
    console.log(`Marks are ${marks} and grade is B`);
}
else if(marks >=45 && marks<65)
{
    console.log(`Marks are ${marks} and grade is C`);
}
else if(marks >=33 && marks<45){
    console.log(`Marks are ${marks} and grade is D`);
}
else{
    console.log(`Marks are ${marks} and grade is F`);
}