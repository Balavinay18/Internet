for(let i=1; i <= 9; i++){
    console.log(i);
}
//factorial
let n=5;
let factorial = 1;
for(let i=1; i <= n; i++){
    factorial= factorial*i
}
console.log("Factorial of n",n,"is",factorial);

//sum
let count=0;
let sum=0;
let last=100;
while(count <= last){
    sum = count+sum;
    count++;
}
console.log('sum is',sum);