// --------------------       1st --------------------

//Step-2
// function handleClick(){
//     const Event=document.getElementById("event");
//     Event.textContent="this element has been clicked"
// }


//   Step-3 (we are not using this way cause it overwrite)
// const Event=document.getElementById("event");
// Event.onclick = function handleClick(){
//     Event.textContent='you clicked it';
// }

//   Step-4  (Best way)
// const Event= document.getElementById('event');
// ======== click ==============
// Event.addEventListener('click',()=>{
//     Event.textContent="you clicked it using step-4"
// })
// =============Double click=============
// Event.addEventListener('dblclick',()=>{  ///// it work only when you double click on it
//     Event.textContent="you clicked it using step-4"
// })
// =========== mouseenter ===========
// Event.addEventListener('mouseenter',()=>{
//     Event.textContent="you clicked it using step-4"
// })
// ============= mouseleave =========
// Event.addEventListener('mouseleave',()=>{
//     Event.textContent="you clicked it using step-4"
// })




// let a = {
//     b:  10,
//     greet: function(value){
//         console.log('hello',value)
//     }
// }
// a.greet(10);
// a.greet(20); //// Doesn't overwrite

// a.b= 30;
// a.b=50;
// console.log(a.b)  /// overwrite 

//-----------------------------             2nd    -------------------------

///         in this method we can manually add event listener on each div, it's time consuming
// const element= document.getElementById("child1");
// element.addEventListener('click', ()=>{
//     element.textContent= 'you cliked on it';
// })

// another method for event listener to apply on each div.
// Here in this method our event listener call each time, that's why it is not an opmistic way , we have another concept called "public"
// const parent= document.getElementById('parent')
// for(let child of parent.children){
//     child.addEventListener('click', ()=>{
//         child.textContent = "i am clicked"
//     })
// }

// ---------------------------------- 3rd -------------------------------
// const grandparent= document.getElementById('grandparent');
// grandparent.addEventListener('click',()=>{
//     console.log('grandparent is clicked')  ///// eventlistener has there parameter here "false" is default parameter it's ok to not write it.
// })
// const parent= document.getElementById('parent');
// parent.addEventListener('click',()=>{
//     console.log('parent is clicked')
// })
// const child= document.getElementById('child');
// child.addEventListener('click',()=>{
//     console.log('child is clicked')
// })


//  ---------------- object of an event (propagation) ---------------------------
// const grandparent  = document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//     console.log(e.target);// here "target" identify which element has been clicked
// })
// const parent= document.getElementById('parent');
// parent.addEventListener('click',(e)=>{////here "e" is an object of event listener
//     console.log(e);
// })
// const child= document.getElementById('child');
// child.addEventListener('click',(e)=>{
//     console.log(e);
//     e.stopPropagation();
// })

// --------------- Remove event listener -------------- //
// const grandparent  = document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//     console.log(e.target);
// })
// grandparent.removeEventListener('click',(e)=>{//here remove event listener can't work cause both are different function and both having different memory.
//     console.log(e.target);
// })
// to remove this we have to write it for a single function
const grandparent  = document.getElementById("grandparent");
function handleClick(e){
    e.target.textContent = "i am clicked"
}
grandparent.addEventListener('click',handleClick);
grandparent.removeEventListener('click',handleClick);