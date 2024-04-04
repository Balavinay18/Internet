let pill = "red";
console.log(pill);
if(pill == "red")
{
    console.log('reality')
} else if(pill == 'blue'){
    console.log('stay in matrix')
} else{
    console.log('kill yourself.')
}
//switch statement
let number='2';
if(number % 2 == 0){
    console.log('Number is even',number)
}else if(number % 2 == 1) {
        console.log('Number is odd',number)
}else {
    console.log('invaild input');
}
//leap year 
let year=2005;
if(year % 4 == 0) {
    console.log('its  a Leap year',year)
} else if (year % 4 == 1) {
    console.log('Not a leap year')
} else{
    console.log('Invalid input')
}
//3.
let marks=80;
let grade;
if(marks >= 9){
    grade ='A'
} else if(marks < 70 && marks >= 75) {
    grade ='B'
} else if (marks < 60 && marks >= 50) {
    grade = 'C'
} else if(marks <40 && marks >= 0) {
    grade = 'D'
} else{
    grade = 'Undefine'
}
console.log('grade',grade);
