let name = "Winxon"

let grade = 78

function gradeLetter(score) {
    if (score >= 90) {
        console.log("Hey " + name + ", your score is an A")
    } else if (score >= 80) {
        console.log("Hey " + name + ", your score is an B")
    } else if (score >= 70) {
        console.log("Hey " + name + ", your score is an C")
    } else if (score >= 60) {
        console.log("Hey " + name + ", your score is an D")
    } else {
        console.log("Hey " + name + ", your score is an F")
    }
}


gradeLetter(grade)

function isEven(vb) {
    let test00 = vb % 2
    if (test00 = 0) {
        console.log(true) //is Even
    } else {
        console.log(false)
    }
}

let test01 = Math.random() * (10000 - 0) + 0;

let test02 = Math.round(test01)

console.log(test02)
isEven(test02)

function cube(a) {
    return a * a * a
};

console.log(cube(test02))