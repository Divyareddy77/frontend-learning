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
  



//Type conversion
let a = "10";
let b = Number(a);
console.log(b , typeof(b));


//Type coersion
let x = "10";
let y = 20;
console.log(x + y);
console.log(x * y);



//Diff between = & == & ===

let n1 = 10;
console.log(n1);


let n2 = "20";
let n3 = 20;
console.log(n2 == n3);



console.log(n2 === n3);
let n4 = 20;
console.log(n3 === n4);



//call back function

function greet(name){
    console.log(`Hello ${name}` );

}

function user(callback){
    callback("Divya");
}
 user(greet);

//-------------------------------//
 function message(){
    console.log("Welcome ");
 }
 setTimeout(message,3000);






 //Event capturing
let div = document.getElementById("parent");
let btn = document.getElementById("child");
div.addEventListener("click",function(){
    alert("Div clicked");
},true);
btn.addEventListener("click", function(){
    alert("Button clicked");
},true);

