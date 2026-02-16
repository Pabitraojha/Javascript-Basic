const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height=document.getElementById('height');
    const weight=document.getElementById('weight');

    const actualHeight=(height.value)/100;
    let result=(weight.value)/Math.pow(actualHeight,2);
    result=result.toFixed(2);// this tofixed is used to give a fixed number of digit after decimal.
    
    const value=document.getElementById('result');
    value.textContent='Loading...';
    setTimeout(()=>{
        value.textContent=`Result: ${result}`;
    },3000)

    form.reset();
    
})

