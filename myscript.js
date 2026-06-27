function BillCalculations(productName, productPrice, productQuantity,platformFee = 10) {
    return productPrice * productQuantity + platformFee;
    
}


let totalBill = BillCalculations("Apples", 10, 20);
console.log(`Total bill = ${totalBill}`);

function StudentMarksCalculation(maths,science,social){
    let sum,avg;
    sum = maths + science +social;
    avg = sum/3;
    return {sum,avg};

}
let {sum,avg}=StudentMarksCalculation(90,80,70);
console.log(`Total marks = ${sum} Average marks = ${avg}`);