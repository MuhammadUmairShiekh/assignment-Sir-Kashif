// Ques 3
// function greets( firstName , lastName){
//     return firstName + lastName
// } 

// console.log(greets("Muhammad" , " Umair"))
// <<<<<<<<<_____________>>>>>>>></_____________>


// <<<<<<<<<_____________>>>>>>>></_____________>
// ques 19


// let palidoram = prompt("enter Please");
// function data (){
//       let check = palidoram.split("").reverse().join("")
//       console.log(check)
//       if(palidoram == check){
//             console.log("This Is A Palidoram Word " + palidoram )
//       }else{
//             console.log("This Is Not A Palidoram Word " + palidoram )

//       }
      
// }  
//  data()  
// <<<<<<<<<_____________>>>>>>>></_____________>
// ques 29

// function celsiusToFahrenheit(celsius) 
// {
//   let cTemp = celsius;
//   let cToFahr = cTemp * 9/5 + 32;
//   let message = cTemp+' \xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// } 
// celsiusToFahrenheit(0)

// function fahrenheitToCelsius(celsius1) 
// {
//   let cTemp = celsius1;
//   let fTocelsi = (cTemp - 32) * 5/9 ;
//   let message = cTemp+' \xB0F is ' + fTocelsi + ' \xB0C.';
//     console.log(message);
// } 
// fahrenheitToCelsius(32)
// <<<<<<<<<_____________>>>>>>>></_____________>

 //ques5 
// function calculate(num1, num2, operator) {
//   switch (operator) {
//     case '+':
//       return num1 + num2;
//     case '-':
//       return num1 - num2;
//     case '*':
//       return num1 * num2;
//     case '/':
//       if (num2 === 0) {
//         return 'Division by zero is not allowed';
//       }
//       return num1 / num2;
//     case '%':
//       return 'Invalid operator';
//       // return num1 % num2;
//   }
// }
// // Example usage:
// let result = calculate(5, 3, '+'); // This will compute 5 + 3
// console.log(result); // Output: 8

// let result2 = calculate(10, 2, '*'); // This will compute 10 * 2
// console.log(result2); // Output: 20

// let result3 = calculate(8, 0, '/'); // This will handle division by zero
// console.log(result3); // Output: "Division by zero is not allowed"

// let result4 = calculate(10, 4, '%'); // This will compute 7  % 4
// console.log(result4); // Output: "Invalid operator"