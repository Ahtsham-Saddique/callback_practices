

setTimeout( function test()
    {
        console.log("Hi this is Ahtsham");
    }
,1000);

 console.log("Starting.....");
 console.log("continue.....");
 
function test() {
 
     console.log("Hello World...!");
}

setTimeout(test,1000);

setTimeout(test2=()=>  {
        
       console.log("Hello world...2");
              },900

);

console.log("Ending but depend upon setTime");
console.log("Ending but depend upon setTime");
console.log("Ending but depend upon setTime");

// setTimeout for parametric functi

function pfun(data1,data2)
{
     console.log(data1,data2);
}
setTimeout(pfun,300,"ALi","Hamza");

  


 function getdata(dataid ,getnextData)
{
     setTimeout(()=>{
  console.log(dataid);
  if(getnextData)
  {
    getnextData();
}}

,200);
}

getdata(1,()=>
{
     getdata(2,()=>
     {
          getdata(3)
     })
})


function getdata(data,getnextdata)
{
     setTimeout(()=>
     {
          console.log(data);
          if(getnextdata)
          {
               getnextdata();
          }
     },2000)
}

getdata(1,()=>{
     getdata(2,()=>
{
     getdata(44);
})
})