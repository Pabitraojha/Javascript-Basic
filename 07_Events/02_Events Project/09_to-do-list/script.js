const form=document.querySelector("form");
const allTast= document.querySelector("#allTask");
const input= document.querySelector("input");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const text=input.value.trim();
    if(text=="")
        return;
    const parent=document.createElement('div');
    const task=document.createElement("span");
    task.textContent=text;
    task.style.marginTop="20px";
    task.style.marginButton='20px';
    task.style.fontSize="30px";
    task.style.paddingLeft='10px';
    task.style.border='3px solid white';
    task.style.borderRadius='10px';
    task.style.minWidth='300px';

    const deleteButton= document.createElement('button');
    deleteButton.textContent='Delete';
    deleteButton.style.width='80px';
    
    const  done=document.createElement("button");
    done.textContent="Done";
    done.style.width='80px';
    done.style.marginRight='10px';

    parent.append(task,done,deleteButton);

    allTast.append(parent);

    deleteButton.addEventListener('click',()=>{
        parent.remove();
    })

    done.addEventListener('click',()=>{
        task.style.textDecoration='line-through';
        task.style.color='grey';
    })


})