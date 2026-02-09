const form=document.querySelector("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();//stop page reload instantly and result disappears
    const boy=document.getElementById("boy");
    const girl=document.getElementById("girl");
    const l1=boy.value.length;
    const l2=girl.value.length;
    const result= Math.pow(l1+l2,3)%101;
    console.log(result);

    const output=document.getElementById('loadingText');
    output.style.display='inline';//to show loading
    output.textContent="Loading.....";

    //show result after 2 second
    setTimeout(() => {
        output.textContent=result+"%❤️";
    }, 2000);
    
    //to clear value
    form.reset();
})