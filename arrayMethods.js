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

