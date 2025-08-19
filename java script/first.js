console.log("hello");
fullname = ("tonny stark")
console.log(fullname)
const student = {
    name: "Rohit Kumar",
    age: 19,
    course: "btech",
    cgpa: 7
};
console.log (student);

const product = {
    product_name :"ball pen",
    price : 200,
    offer : "20%",
};
console.log (product);

let a = 6;
let b = 7;
console.log (a+b);
console.log ("a + b =",a+b);

let age=5;
if (age >=18){
    console.log("you can vote");
}
else{
console.log("you can not vote")
}

let no=prompt("enter the number");
if (no%5==0){
    console.log(no,"multiple of 5");
}
else{
    console.log(no,"not a multiple of 5");
}
let marks=prompt("enter the marks scored");
if (marks>=80&&  marks<=100){
    console.log(marks,"A");
}
else if (marks>=70 && marks<80){
    console.log(marks,"B");
}
else if (marks>=60 && marks<70){
    console.log(marks,"C");
}
else if (marks<60){
    console.log(marks,"Fail");
}
else{
    console.log ("wrong input")
}

let str = "rohitkumar";
for (let i of str){
    console.log(i);
}

for (let num=0;num<=100;num++){
    if (num%2==0){
        console.log(num);
    }
}

let gamenum=100;
let num = prompt("guess the number");
while (num!=gamenum){
    num=prompt("guess the number again");
}
console.log ("congratulations you entered the correct number");

let str1="hello";
let str2="sir";
console.log (str1.concat(str2));
console.log (str1.slice(2,4));

let marks1 = [85,86,87,88,89];
let sum=0;
for (let val of marks1){
    sum=sum+val;
}
let avg = sum/marks.length;
console.log (avg);
console.log(sum);

function countVowels(str){
    let count =0;
    for (const char of str){
        if (char ==="a"||char ==="e"||char ==="i"||char ==="o"||char ==="u"){
            count++;
        }
    }
    console.log(count);
}