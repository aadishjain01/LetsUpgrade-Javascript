var choice = +prompt("Which operation you want to do :\n1 -> Addition\n2 ->Subtraction\n3 -> Multiplication\n4 ->Division \n5 -> Square Root \n6 -> Percentage");

switch(choice){
    case 1:
        var num1 = +prompt("Enter first number for Addition:");
        var num2 = +prompt("Enter second number for Addition:");
        console.log(`Addition of ${num1} and ${num2} is : `+(num1+num2));
        break;
    case 2:
        var num1 = +prompt("Enter first number for Subtraction:");
        var num2 = +prompt("Enter second number for Subtraction:");
        console.log(`Subtraction of ${num1} and ${num2} is : `+(num1-num2));
        break;
    case 3:
        var num1 = +prompt("Enter first number for Multiplication:");
        var num2 = +prompt("Enter second number for Multiplication:");
        console.log(`Multiplication of ${num1} and ${num2} is : `+(num1*num2));
        break;
    case 4:
        var num1 = +prompt("Enter first number for Division:");
        var num2 = +prompt("Enter second number for Division:");
        console.log(`Division of ${num1} and ${num2} is : `+(num1/num2));
        break;
    case 5:
        var num1 = +prompt("Enter number for Square Root :");
        console.log(`Square Root of ${num1} is : `+Math.sqrt(num1));
        break;
    case 6:
        var num1 = +prompt("Enter possible total or total number for Percentage:");
        var num2 = +prompt("Enter get or given or Scored number for Percentage:");
        console.log(`Percentage of ${num2} outoff ${num1} is : `+(num2*100)/num1);
        break;
    default :
        alert("You have entered wrong choice!");
        break;

}