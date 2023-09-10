// Ques 3
// function greets( firstName , lastName){
//     return firstName + lastName
// } 

// console.log(greets("Muhammad" , " Umair"))
// <<<<<<<<<_____________>>>>>>>></_____________>
 //ques5 
//  let num1 = +prompt("Enter Value")
//  let sign =   prompt("Enter Sign")
//  let num2 = +prompt("Enter Value")

//  function calculator(num1,num2,sign ){
//            return    (num1 + num2 ) * sign    
   
//  }  
//  console.log(calculator(4,4,3))
// <<<<<<<<<_____________>>>>>>>></_____________>
// ques 19


let palidoram = [prompt("enter Please")];
function data (){
      let check = palidoram.toString().split("").reverse().join("")
      if(palidoram == check){
            console.log("This Is A Palidoram Word " + palidoram )
      }else{
            console.log("This Is Not A Palidoram Word " + palidoram )

      }
      
}  
 data()  

