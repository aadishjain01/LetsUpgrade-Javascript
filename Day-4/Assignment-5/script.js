var sales = +prompt("What is the count of sales made by employee during the year : ");

var totalCommission =0;
switch(true){
    case (sales>20000) :
        totalCommission = (sales-20000)*0.1;

    case (sales<=20000 && sales>10000):
        totalCommission =totalCommission+(10000*0.07);

    case (sales>5000 && sales<=10000):
        totalCommission = totalCommission+(5000*0.05);

    case (sales>0 && sales<=5000):
        totalCommission = totalCommission+(5000*0.02);
        break;
    default:
        console.log("Enter Valid Input");
}

console.log(`Total commision for sale ${sales} is : ${totalCommission}`)