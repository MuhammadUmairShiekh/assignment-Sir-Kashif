// Ques 3
// function greets( firstName , lastName){
//     return firstName + lastName
// } 

// console.log(greets("Muhammad" , " Umair"))
// <<<<<<<<<_____________>>>>>>>></_____________>
 //ques5 


//  function calculator(num1,num2,operator ){
//            return    num1 + num2  * operator    
   
//  }  
//  console.log(calculator(4,4,3))
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

function celsiusToFahrenheit(celsius) 
{
  let cTemp = celsius;
  let cToFahr = cTemp * 9/5 + 32;
  let message = cTemp+' \xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
} 
celsiusToFahrenheit(0)

function fahrenheitToCelsius(celsius1) 
{
  let cTemp = celsius1;
  let fTocelsi = (cTemp - 32) * 5/9 ;
  let message = cTemp+' \xB0F is ' + fTocelsi + ' \xB0C.';
    console.log(message);
} 
fahrenheitToCelsius(32)