var size = +prompt("Enter the size of array :");

let arr = [];

for(i=1 ; i<= size ; i++){
    if(i==1){
        arr.push(+prompt(`Enter ${i}st number to add in array :`));
    }
    if(i==2){
        arr.push(+prompt(`Enter ${i}nd number to add in array :`));
    }
    if(i==3){
        arr.push(+prompt(`Enter ${i}rd number to add in array :`));
    }
    if(i>=4){
        arr.push(+prompt(`Enter ${i}th number to add in array :`));
    }
}

//----------filter---------
// let odd = arr.filter(el=>{
//     if(el%2!=0){
//         return el;
//     }
// });

//OR

let odd = arr.filter(el=>el%2!=0);

//-----------map------------
let cube = odd.map((el=>el**3));

console.log(cube);