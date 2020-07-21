var shoppingList = ["Mango","Patato","Oranges","Tamato"];
console.log("Shopping List :"+shoppingList);
var shoppingBasket = shoppingList;

shoppingBasket.push("Cookies" , "Bread","Milk");
console.log("Shopping Basket :"+shoppingBasket);


//-------With Spread Operator-----

console.log("---With Spread Operator---");

var shoppingList = ["Mango","Patato","Oranges","Tamato"];
console.log("Shopping List :"+shoppingList);
var shoppingBasket = [...shoppingList , "Cookies" , "Bread","Milk"];
console.log("Shopping Basket :"+shoppingBasket);

