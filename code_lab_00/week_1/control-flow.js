let score = 97;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B")
} else if (score >= 70) {
    console.log("C")
} else if (score >= 60) {
    console.log("D")
} else {
    console.log("F")
};

let age = 18;

if (age >= 18 && age <= 25) {
    console.log(true) // True that this is the target demographic
};

for (let i = 0; i < 5; i++) {
    console.log("Loop count: " + i)
};

let i = 0;

while (i < 3) {
    console.log("While loop: " + i);
    i++;
}

let fruit = "banana"

switch(fruit) {
    case "apple": 
        console.log("Apples are red");
    break;
    case "banana":
        console.log("Bananas are yellow");
        break;
    default:
        console.log("Unknown fruit")
};

let userInput = 20;

if (userInput === 0){
    console.log(0)
} else if (userInput > 0) {
    console.log("Positive")
} else {
    console.log("Negative")
};

for (let counter = 0; counter <= 20; counter++) {
    console.log(counter)
};