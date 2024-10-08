// let first_value = Number(prompt('Enter the first number: '));
// let second_value = Number(prompt('Enter the second number: '));
// let third_value = Number(prompt('Enter the third number: '));

// let theLargest = first_value;
//     if(theLargest < second_value && second_value > third_value){
//         theLargest = second_value;
//         alert(theLargest);
//     }
//     else if(theLargest < third_value && third_value > second_value){
//         theLargest = third_value;
//         alert(theLargest);
//     }
//     else{
//         alert(theLargest);
//     }

// task 1
function calculateMultiplicationDivision() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (num2 === 0) {
      document.getElementById('result1').innerText = 'Division by zero is not allowed.';
      return;
    }

    const multiplication = num1 * num2;
    const division = num1 / num2;

    document.getElementById('result1').innerText = `Multiplication: ${multiplication}, Division: ${division}`;
}

// task 2
function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }
  
  // Example 
  console.log(maxOfThree(1, 0, 1));   
  console.log(maxOfThree(0, -10, -20)); 
  console.log(maxOfThree(1000, 510, 440));
  

  // Task 3
  function sumTriple(num1, num2) {
    if (num1 === num2) {
      return 3 * (num1 + num2);
    } else {
      return num1 + num2;
    }
  }
  
  // Example 
  console.log(sumTriple(10, 20));  
  console.log(sumTriple(10, 10));  
  

  // Task 4
  function TheNearestTo100(num1, num2){
    if(100 + num1 > 100 + num2){
        return num1;
    }
    else if (100 + num1 < 100 + num2){
        return num2;
    }
    else{
        return "False";
    }
  }

  console.log(TheNearestTo100(90, 90));
  console.log(TheNearestTo100(-99, 1));

  // Task 5
  function firstHalf(str) {
    if (str.length % 2 === 0) {
      return str.slice(0, str.length / 2);
    } else {
      return str;
    }
  }
  
  // Example
  console.log(firstHalf("Python"));   
  console.log(firstHalf("JavaScript")); 
  console.log(firstHalf("PHP"));        
  

//   function HalfStr(str) {
//     if(str.length % 2 !== 0){
//         console.log("The string is not even!");
//     }
//     let halfOfStr = str.length / 2;
//     let FirstHalf = "";

//     for (let i = 0; i < halfOfStr; i++){
//         FirstHalf += str[i];
//     }

//     return FirstHalf;
//   }

//   console.log(HalfStr("Python"));


