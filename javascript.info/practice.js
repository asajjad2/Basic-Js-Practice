// // 2.6

// const name = prompt("Please input your name:",'');
// alert(`Hey, ${name}!`);


// // 2.8
// // Here’s a code that asks the user for two numbers and shows their sum.
// // It works incorrectly. The output in the example below is 12 (for default prompt values).
// // Why? Fix it. The result should be 3.

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(a + b); // 12

// a = prompt("First number?", 1);
// b = prompt("Second number?", 2);

// alert(+a + +b); // 12

// // 2.10

// let answer = prompt(`What is the “official” name of JavaScript?`,'');

// if(answer === "ECMAScript"){
//     alert("Right!");
// }
// else{
//     alert("You don’t know? ECMAScript!");
// }

// let num = +prompt('input a number','1');
// if(num > 0){
//     alert(1);
// }else if(num < 0){
//     alert(-1);
// }else{
//     alert(0);
// }

// a = +prompt("input a","");
// b = +prompt("input b","");
// let result = (a+b>4)?"Below":"Over";
// alert(result);

// let login = prompt("input login","");
// let message = (login == "Employee")? "Hello" : (login == "Director")? "Greetings" : (login == '')? "No Login" : '';
// alert(message);

// // 2.11

// login = prompt("Who's there?","");

// if(login == "Admin"){
//     let pass = prompt("Input password","");

//     if(pass == "TheMaster"){
//         alert("Welcome");
//     } else if(pass == null || pass == "") {
//         alert("cancelled");
//     } else {
//         alert("wrong password");
//     }

// } else if(login == null || login == ""){
//     alert("Cancelled");
// }else{
//     alert("I don't know you");
// }

// // 2.13

// for(let i=2;i<=10;i++){
//     if(i%2==0) alert(i);
// }

// let i=0;
// while(i<3){
//     alert(`number ${i}!`);
//     i++;
// }

// num = +prompt("input num > 100","");
// while(num<=100){
//     num = +prompt("input num > 100","");
// }

// //OR

// do {
//   num = prompt("Enter a number greater than 100?", 0);
// } while (num <= 100 && num);


// num = prompt("Input num","");
// let check = false;
// for(let i=2;i<=num;i++){

//     for(let j=2;j<i;j++){
//         if(i%j==0){
//             check = true;
//             break;
//         }
//     }
//     if(check == false) alert(i);
//     check = false;
// }


// // 2.14

// let browser = prompt("Input your browser","");
// if(browser == "Edge"){
//     alert( "You've got the Edge!" )
// } else if(browser == "Chrome"||browser == "Safari"||browser == "Firefox"||browser == "Opera"){
//     alert("Okay we support these browsers too");
// } else{
//     alert( 'We hope that this page looks ok!' );
// }

// a = +prompt('a?', '');
// switch(a){
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert("2,3")
//         break;
// }

//2.15

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

// function checkAge(age){
//     return (age>18)? true : confirm('Did parents allow you?');
// }

// function checkAge(age){
//     return (age>18)||confirm('Did parents allow you?');
// }


// function min(a,b){
//     return (a<b)?a:b;
// }

// function pow(x,n){
//     return x**n;
// }

// let a = prompt("input number","");
// let b; 

// do{

//     b = prompt("input power >= 1","");

// }while(b<1)


// alert(`answer: ${pow(a,b)}`);

//2.17

// let ask = (question,yes,no) => {
//     if (confirm(question)) yes();
//     else no();
//     return;
// }

// ask(
//     "Do you agree?",
//     () => alert("You agreed."),
//     () => alert("You canceled the execution.")
//   );