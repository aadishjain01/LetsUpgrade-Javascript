var marks = +prompt("Enter marks : ");


switch(true){
    case (marks>=85 && marks<=100):
        console.log(`Marks are ${marks} and grade is A`);
        break;
    case (marks >=65 && marks<85):
        console.log(`Marks are ${marks} and grade is B`);
        break;
    case (marks >=45 && marks<65):
        console.log(`Marks are ${marks} and grade is C`);
        break;
    case (marks >=33 && marks<45):
        console.log(`Marks are ${marks} and grade is D`);;
        break;
    case (marks<33):
        console.log(`Marks are ${marks} and grade is F`);
        break;
    default:
        console.log(`Enter valid marks!`);
        break;
    
}