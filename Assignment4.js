function GreaterThan(arr, Y){
  var count = 0;
  for(var i = 0; i< arr.length; i++){
    if(arr[i] > Y){
      count ++;
      console.log(arr[i]);
    }
  }
  console.log('There are ' + count + ' numbers greater than ' + Y);
  return count;
}
//..........................................//

function MinMaxAve(arr){
  var min = arr[0];
  var max = arr[0];
  var sum = 0;
  var average = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
    if(arr[i] < min){
      min = arr[i];
    }
    sum += arr[i];
  }
  console.log('maximum is ' + max);
  console.log('minimum is ' + min);
  console.log('average is ' + sum/arr.length);
}

MinMaxAve([1,2,3,4,5,67,89]);

//..........................................//
function replaceNegatives(arr){
  result = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = 'Dojo'
    }
    result.push(arr[i]);
  }
  return result;
}

console.log(replaceNegatives([1,2,-4,-5,-6,-9]));

//..........................................//
function removeVals(arr,start,end){
    arr.splice(start, end + 1 - start);
    return arr;
}

console.log(removeVals([1,2,3,4,5,6,7,8,9],2,4));
