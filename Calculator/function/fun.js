function area(length=1,width=1){
    return length * width;
}
console.log("Area =",area(2));
//
function sumArray(a) {
    let sum = 0;
    for(let i=0; i<a.length;i++){
        sum =sum + a[i];
    }
    return sum;
}
console.log(sumArray([1, 4, 6, 9]));

//string
function reverse(str) {
    let revstr = "";
    for(let i = str.length - 1;i >=0; i--) {
        revstr = revstr + str[i];
        console.log(revstr)
    }
    return revstr;
}
console.log(reverse("h"));

//ex
function getDigits(n) {
    const digits = [];
    while(n>0) {
        digits.push(n % 10);
        n = Math.floor(n / 10);
    }
    return digits.reverse();
}
const num = 123456;
const digits = getDigits(num);
console.log(digits)
