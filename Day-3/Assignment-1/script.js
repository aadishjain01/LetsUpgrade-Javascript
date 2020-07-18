var num = +prompt("Enter the number to check even/odd : ");


   function check(number){
   if(num % 2 == 0) {
      return `The number entered is ${number} and Number is Even`;
   } else {
      return `The number entered is ${number} and Number is Odd`;
   }
}
var result=check(num);
console.log(result);