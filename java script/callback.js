/*console.log("hi");
console.log("hey");
function greet(){
    console.log("hello");
}
setTimeout(greet,4000)
console.log("hey mate");
console.log("wassup");*/

/*function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum);*/

function getdata(dataid,getnextdata){
    setTimeout(()=>{
        console.log("data",dataid);
        if (getnextdata){
            getnextdata();
        }
    },2000);
}

