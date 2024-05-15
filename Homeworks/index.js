 // Задача 1
 let book = {
    title: "Harry Potter",
    genre: "Fantasy",

 }

 let car = {
    brand: "BMW",
    model: "M3",
    color: "black",
    engine: {
        torque: "300 Nm",
        power: "228 hp"

    }
 }

 let student = {
    name: "Nikola",
    age: 23,
    address: {
        city: "Skopje",
        zipCode: 1000
    }
 }

 // Задача 2
 for (i = 0;i <= 10;i++) {
    // console.log(i)
 }

let start = 3 
let end = 10
let sum = 0

for (i = start;i <= end;i++){
    if (i % 2 === 0){
        sum += i
    }
}
console.log(sum)

let person = {
    name: "Nikola",
    age: 23,
    city: "Skopje"
}

for (let key in person) {
    // console.log(key + ": " + person[key])
}

let colors = ["red", "green", "blue"]

for(let color of colors){
    // console.log(color.length, color)
}

// Задача 3
let count = 5

while (count > 0 ) {
    // console.log(count)
    count--
}

let count2 = 10 

do {
    // console.log(count2)
    count2--
} while (count2 > 5)

// Задача 4    
let students = [
   {
        name: "Daniel",
        surname: "Popov",
        age: 21,
        address: {
            city: "Skopje",
            street: {
                name: "Fushtanska",
                number: 114,
                zipCode: 1000
            }                      
        }

    },
    {
        name: "Damjan",
        surname: "Stojanovski",
        age: 24,
        address: {
            city: "Skopje",
            street: {
                name: "Ilindenska",
                number: 38,
                zipCode: 1000
            }                      
        }

    }
]
    
console.log(students[0].address.city)
console.log(students[1]["address"]["street"]["name"])

// Задача 5
for(i = 1;i <= 100;i += 4){
    if(i % 2 !=0){
        console.log(i)
    }  
}

for(i = 0;i <=50;i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

// Задача 6
let cities = ["Skopje", "Madrid", "Torino", "Paris", "Rome", "Frankfurt", "Split", "Istanbul", "Kumanovo"]



for (let city of cities) {
    console.log(city)
}