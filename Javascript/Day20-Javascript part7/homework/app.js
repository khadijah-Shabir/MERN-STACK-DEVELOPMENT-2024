// q4
function average(arr){
  let res=0;
  for(let i=0; i<arr.length; i++){
    res+=arr[i];
  }
  return res/arr.length;
}
console.log(average([1,2,3,4,5]));

const isEven=(num)=>num%2===0;
console.log(isEven(4));


