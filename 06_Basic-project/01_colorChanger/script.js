const box=document.getElementById('box');
box.addEventListener('click',(e)=>{
    const baby=e.target;
    const body=document.querySelector('body');
    body.style.backgroundColor=baby.id ;
})



