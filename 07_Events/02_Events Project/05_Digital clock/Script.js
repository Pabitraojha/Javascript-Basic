const time=document.getElementById("time");

setInterval(()=>{
    let exactTime=new Date();
    time.textContent=exactTime.toLocaleTimeString();
},1000)