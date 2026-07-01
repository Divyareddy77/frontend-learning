let students = ["Ravi", "Sita", "Manoj", "Ratan"]
console.log(students)

students.push("Lakshmi","Praveen")
console.log(students)

students.unshift("Asha","Vijay")
console.log(students)

students.splice(3,0,"Rajesh")
console.log(students)

students.pop()
console.log(students)

students.shift()
console.log(students)

students.splice(3,2)
console.log(students)


console.log(students.slice(0,3))


let students2 = ["Harika", "Teja"]
let finalArray = students.concat(students2)
console.log(finalArray)



console.log(finalArray.indexOf("Ratan"))

console.log(finalArray.includes("Asha"))

console.log(finalArray.join(","))





//---------------------------------------------------------



let arrs = [23,44,68,43,54,98]
let areAllEven = arrs.every(arr => arr % 2 == 0)
console.log(areAllEven)

let atleastOneOdd = arrs.some(arr => arr % 2 != 0)
console.log(atleastOneOdd)






//---------------------------------------------------------------

let prices = [56,12,23,8,44];
prices.sort((p1,p2) =>p1-p2)
	   	.forEach(price=>console.log(price));	  
prices.sort((p1,p2) =>p2-p1)
	    .forEach(price=>console.log(price));



//-------------------------------------------------------------


let fruits = ["Apple","Mango","Orange"]
console.log(fruits.find(fruit => fruit == "Mango"))


//-------------------------------------------------------------


const products = [
  { name: "Paneer", price: 120, quantity: 2, weight: 250, category: "Veg" },
  { name: "Chicken", price: 200, quantity: 1, weight: 500, category: "Non-Veg" },
  { name: "Fish", price: 180, quantity: 2, weight: 400, category: "Non-Veg" },
  { name: "Mushroom", price: 90, quantity: 3, weight: 200, category: "Veg" },
  { name: "Egg", price: 60, quantity: 6, weight: 60, category: "Non-Veg" },
  { name: "Tofu", price: 100, quantity: 4, weight: 250, category: "Veg" }
];


//1. Filter Veg Products

let veg = products.filter(product => product.category == "Veg")
veg.forEach(product => console.log(product))
console.log("----------------------------------------------------------------")



//2. Filter Non-Veg Products

let nonveg = products.filter(product => product.category == "Non-Veg")
nonveg.forEach(product => console.log(product))
console.log("----------------------------------------------------------------")



//3. Filter Products Price Between 100–200

let products2 = products.filter(product => product.price >= 100 && product.price <= 200)
products2.forEach(product => console.log(product))
console.log("----------------------------------------------------------------")



//4. Find Product by Name 

let productByName = products.find(product => product.name == "Chicken")
console.log(productByName)
console.log("----------------------------------------------------------------")



//5. Get Only Names of Products

let names = products.map(product => product.name)
names.forEach(product => console.log(product))
console.log("----------------------------------------------------------------")



//6. Check if All Products Have a Category veg. 

console.log(products.every(product => product.category == "Veg"))
console.log("----------------------------------------------------------------")



//7. Check if There is Any Product with Price > 150. 


console.log(products.some(product => product.price > 150))
console.log("----------------------------------------------------------------")



//8. Increase Quantity of All Veg Products by 1 print it.


let quantity = products.map(product => product.quantity + 1)
quantity.forEach(product => console.log(product))
console.log("----------------------------------------------------------------")



//9. Find Total Weight of Non-Veg Items.


let totalNonVeg = products.filter(product => product.category == "Non-Veg")
                          .reduce((total,product)=> total + product.price,0)
console.log(totalNonVeg)
console.log("----------------------------------------------------------------")



//10. Convert All Product Names to Uppercase

let names2 = products.map(product => product.name.toUpperCase())
console.log(names2)
console.log("----------------------------------------------------------------")



//11. Combine All veg Product Names into One String.

let vegProductNames = products.map(product => product.name).join(",")
console.log(vegProductNames)
console.log("----------------------------------------------------------------")



//12. Calculate Total Quantity of All Products

let totalQuantity = products.reduce((total,product) => total + product.quantity,0)
console.log(totalQuantity)
console.log("----------------------------------------------------------------")



//13. Add the new product into Array at last. 

products.push({ name: "Mutton", price: 550, quantity: 1, weight: 250, category: "Non-Veg" })
products.forEach(product => console.log(product))
console.log("----------------------------------------------------------------")



//14. remove last product. 

products.pop()
products.forEach(product => console.log(product))
console.log("----------------------------------------------------------------")


//16. remove the first product.

products.shift()
products.forEach(product => console.log(product))
console.log("----------------------------------------------------------------")



//17. add the new product at first. 

products.unshift({ name: "Mutton", price: 550, quantity: 1, weight: 250, category: "Non-Veg" })
products.forEach(product => console.log(product))
console.log("----------------------------------------------------------------")



//18. Remove a Product by Name.

let index = products.findIndex(product => product.name == "Chicken")
products.splice(index,1)
products.forEach(product => console.log(product))
console.log("----------------------------------------------------------------")



//19. remove the products 2 to 4 indexs. 

products.splice(2,3)
products.forEach(product => console.log(product))
console.log("----------------------------------------------------------------")



//20. add the products in specific index. 

products.splice(1,0,{ name: "Paneer", price: 120, quantity: 2, weight: 250, category: "Veg" },
  { name: "Chicken", price: 200, quantity: 1, weight: 500, category: "Non-Veg" },
  { name: "Mushroom", price: 90, quantity: 3, weight: 200, category: "Veg" },
  { name: "Egg", price: 60, quantity: 6, weight: 60, category: "Non-Veg" },
  { name: "Tofu", price: 100, quantity: 4, weight: 250, category: "Veg" })
products.forEach(product => console.log(product))
console.log("----------------------------------------------------------------")



//21. Calculate Total Price of Non-Veg Products

let totalNonVegPrice = products.filter(product => product.category == "Non-Veg")
                          .reduce((total,product)=> total + product.price,0)
console.log(totalNonVegPrice)
console.log("----------------------------------------------------------------")



//22. Get Average Price.

let averagePrice = products.reduce((total,product) => total + product.price,0)/products.length
console.log(averagePrice)
console.log("----------------------------------------------------------------")


//23. Sort by Price Low to High.

products.sort((product1,product2) => product1.price - product2.price)
products.forEach(product => console.log(product))
console.log("----------------------------------------------------------------")



//24. Sort by name Descending order.

products.sort((product1,product2) => product2.name.localeCompare(product1.name))
products.forEach(product => console.log(product))
console.log("----------------------------------------------------------------")



//25. Find the Highest-Priced Product. 

let highestPriceProduct = products.reduce((max,product) => max.price < product.price ? product : max)
console.log(highestPriceProduct)
console.log("----------------------------------------------------------------")



//26. Find the lowest-Priced Product. 

let lowestPriceProduct = products.reduce((max,product) => max.price > product.price ? product : max)
console.log(lowestPriceProduct)
console.log("----------------------------------------------------------------")



//27. print the products in reverse order. 

console.log(products.reverse())
console.log("----------------------------------------------------------------")



//28. Apply 10% Discount to Non-Veg Products get totalAmount.

let price2 = products.filter(product => product.category == "Non-Veg")
                .map(product => product.price - (product.price * 0.1))
                .reduce((total,price) => total + price,0)
console.log(price2)
console.log("----------------------------------------------------------------")



//29. Get the average weight of the product. 

let averageWeight = products.reduce((total,product) => total + product.weight,0)/products.length
console.log(averageWeight)
console.log("----------------------------------------------------------------")



//30. Find Index of Product by Name. 

let indexOfProduct = products.findIndex(product => product.name == "Chicken")
products.forEach(product => console.log(product))
console.log(indexOfProduct)
