fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data=>console.log(data))

let arr = [];
for (var i = 1; i <= 200; i++) {
    arr.push(i);
 }

var item = arr[Math.floor(Math.random() * arr.length)];


async function fetchTodos(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${item}`);
    const data = await response.json();

    console.log(data);
}

fetchTodos();