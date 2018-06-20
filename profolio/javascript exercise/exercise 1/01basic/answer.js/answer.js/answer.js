// Page 16
var myNumber = 42;
var myName = 'XuyingLI';

var temp = 0;
temp = myNumber;
myNumber = myName;
myName = temp;

console.log(myName,myNumber);

for(var i = -52; i <= 1066; i++){
  console.log(i);
}

function beCheerful(){
  for(var j = 1; j <= 98; j++){
  console.log('good morning');
  }
}

for(var k = -300; k<= 0; k++){
  if(k%3 == 0 && k!= -3 && k != -6){
    console.log(k);
  }
}

var j = 2000;
while(j <= 5280){
  console.log(j);
  j++;
}

var m = 6;
var d = 9;
if(m == 6 && d == 9){
  console.log('How did you know?');
}
else{
  console.log('Just another day...');
}

function LeapYear(year){
  if((year% 4 == 0 && year% 100 != 0) || year % 400 == 0){
    console.log('It is a leap year');
  }
}

var count = 0;
for(var i = 512; i <= 4096; i++){
    if(i%5 == 0){
      console.log(i);
      count++;
    }
}
console.log(count);

var i = 1;
while(i <= 10000){
  console.log(i*6);
  i++;
}

for(var i = 1; i <= 100; i++){
  if(i %5 == 0){
    console.log('Coding');
  }
  else if(i%10 == 0){
    console.log('Dojo');
  }
  else{
    console.log(i);
  }
  
}

function DoYouKnow(incoming){
  console.log(incoming);
}

var sum = 0;
for(var i = -300000; i<= 300000; i++){
  if(i%2 != 0){
    sum = sum + i;
  }
}
console.log(sum);

var i = 2016;
while(i > 0){
  console.log(i);
  i = i-4;
}

var lowNum,highNum,mult;
for(var i = highNum; i > lowNum; i--){
  if(i%mult == 0){
    console.log(i);
  }
}

var param1,param2,param3,param4;
while(param3 != param2){
  if(param2 % param1 == 0 && param2 != param4){
    console.log(param2);
  }
  param2 ++;
}

// page 20

function CountDown(number){

  var arr = [];
  for(var i = number; i >=0 ; i--){
    arr.push(i);
  }
  
  return arr;

}

function TwoEle(num1,num2){
  console.log(num1);
  return num2;
}

function SumFL(arr){

  if(typeof arr[0] != 'number'){
    return 'not a number'
    
  }
  else{
    return arr[0] + arr.length;
  }
}

function ValueGreaterThanSecond(arr){
  var count = 0;
  for(var i=0; i< arr.length; i++){
    if(arr[i] > arr[1]){
      console.log(arr[i]);
      count ++;
    }
  }
  return count;
}

function LengthValue(num1,num2){
  var arr = [];
  if(num1 == num2){
    console.log('Jinx!')
  }
  else{
    for(var i = 0; i < num1; i++){
      arr.push(num2);
    }
  }
  return arr;
}

function FitTheFirst(arr){
  if(arr[0] > arr.length){
    console.log('Too big');
  }
  else if(arr[0] < arr.length){
    console.log('Too small');
  }
  else{
    console.log('Just right');
  }
}

function fahrenheitToCelsius(fDegrees){
  return (fDegrees - 32)/(9/5);
}

function celsiusToFahrenheit(cDegrees){
  return (9/5 * cDegrees) + 32;
}

// page 22

function makeItBIg(arr){
  for(var i = 0; i< arr.length; i++){
    if(arr[i] > 0){
      arr[i] = 'big';
    }
  }
  return arr;
}

function LowHigh(arr){
  var min = arr[0];
  var max = arr[0];
  for(var i = 0; i < arr.length; i++){
    if(min >= arr[i]){
      min = arr[i];
    }
    if(max <= arr[i]){
      max = arr[i];
    }
  }
  console.log(min);
  return max;
}

function PrintOneReturnAnother(arr){
  console.log(arr[arr.length - 2]);
  for(var i=0; i<arr.length; i++){
    if(arr[i] % 2 == 1){
      return arr[i];
    }
  }
}

function double(arr){
  for(var i = 0; i< arr.length;i++){
    arr[i] = arr[i]*2;
  }
  return arr;
}

