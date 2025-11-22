

let sum = (a,b) =>
{
 return a+b;
}

let mul = (a,b) =>
{
 return a*b;
}

function calculator(a,b,sumcallback)
{
   return sumcallback(a,b);
}  

// console.log(calculator(34,3,sum));
console.log(calculator(34,3,mul));


let hello=()=>{
    console.log("Hello");
}

setTimeout(hello,200);

setTimeout( hello=()=>{
    console.log("hello2");
},400);

let data=(getdata)=>{
    console.log(getdata);
}

// setTimeout(data("hell9090"),300);
setTimeout(data, 300, "hell90990");
