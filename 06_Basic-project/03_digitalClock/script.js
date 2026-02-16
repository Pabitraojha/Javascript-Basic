const time= document.getElementById("time");
setInterval(()=>{
    const timer=new Date();
    time.textContent=timer.toLocaleTimeString();

},1000)