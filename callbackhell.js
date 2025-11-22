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