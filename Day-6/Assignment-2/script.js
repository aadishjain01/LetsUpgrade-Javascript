let num = +prompt("Enter a number to print table : ");

let arr =[];


for(i =1 ;i<=10 ; i++){

    arr.push(`${num} x ${i} =  ${num*i}`);    

}



console.log(arr);

const table = document.querySelector("#table");

console.log(table);

arr.forEach(el => {

    table.innerHTML += `${el}<br>`;
})