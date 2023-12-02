while (true) {
    let user = prompt("Enter your age:");
    if (user === null || isNaN(user)) {
        break;
        }
var age = parseInt(user);
if(age > 0){
    if (age >= 1 && age <= 10){
        alert("Child");
    }else if (age >= 11 && age <= 18){
        alert("Teenager");
    }else if (age >= 19 && age <= 50){
        alert("Grow up");
    }else {
        alert("Old");
    }
}
else if (age < 0){
    alert("Please Enter positive number");
}
}
// q2
let String = prompt("Enter a string:");
let Count = 0;
for (let i = 0; i < String.length; i++) {
  let char = String.charAt(i);

  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    Count++;
  }
}
alert(`The string '${String}' has ${Count} vowels`);

// q3
let hour = Number(prompt("Enter a 24-hour time (0-23):"));
if (hour >= 0 && hour <= 23){
if(hour>12){
    hour -= 12;
    alert("The time is " + hour + " pm");
}else{
    alert("The time is " + hour + " am");
}
}else {
    alert("Please enter number from 0 to 23");
}