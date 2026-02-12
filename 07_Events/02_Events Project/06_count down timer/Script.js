let result= document.getElementById("time");

setInterval(()=>{
    let currentTime=Date.now();//in milisecond
let olympicTime= new Date(2028,6,14).getTime();//in milisecond

let timer= olympicTime-currentTime;
const day= Math.floor((timer)/(1000*60*60*24));
timer=timer%(1000*60*60*24);
const hour= Math.floor((timer)/(1000*60*60));
timer%=(1000*60*60);
const minute=Math.floor((timer)/(1000*60));
timer%=(1000*60);
const second=Math.floor((timer)/1000);

result.textContent=`${day}: days ${hour}: hours ${minute}: minute ${second}: Second` ;
console.log(`${day}: days ${hour}: hours ${minute}: minute ${second}: Second`
)
},1000)

