// Check Point 1 - Variables and Comparisons
let skyColor = "blue";
let carColor = "blue";
let hairColor = "black";

console.log(skyColor === carColor);
console.log(skyColor === hairColor);
console.log(skyColor !== hairColor);

let x = 6, y = 3
console.log((x < 10 && y > 1))
console.log((x == 5 || y == 5))
console.log(!(x == y))

// Check Point 2 - If
let num=17
if(num<20){
    console.log("Your number is less than 20.")
} else {
    console.log("Your number is greater than or equal to 20")
}

// Check Point 3 - Advanced If / Else and Refactoring If / Else !
const month="June"
if(month==="December" || month==="January" || month==="February"){
   console.log("You are in summer!")
} else if(month==="March" || month==="April" || month==="May"){
    console.log("You are in autumn!")
}
else if(month==="June" || month==="July" || month==="August"){
    console.log("You are in winter!")
}
else if(month==="September" || month==="October" || month==="November"){
    console.log("You are in spring!")
} else {
    console.log("Please check the month...")
}

const color='red'
switch(color){
    case 'red':
        console.log('You should stop!')
        break
    case 'orange':
        console.log('You should slow down…')
        break
    case 'green':
        console.log('You should go!')
        break
    default:
        console.log('Please enter a valid value.')
}

const grade=80

switch(true)
    {
         case grade>= 86:
            console.log("You got Distinction")
            break
            
        case grade<86 && grade>= 70:
            console.log("You got Credit")
            break   
        
        case grade<70 && grade>=50:
            console.log("You got Pass")
            break
            
        case grade<50:
            console.log("You got Fail")
            break
       default:
        console.log("Please enter a valid mark.")
    }
