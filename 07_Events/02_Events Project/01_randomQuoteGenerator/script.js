let quotes= [
    "work hard for your dream",
    "Be the best version of yours",
    "you can do everything that you want to do",
    "you are the best",
    "don't compare yourself with others",
    "Work with consistency",
    "work in silence lets your suscess rore",
    "don't chase love and girls it will come according to their time",
    "your efforts matter",
    "trust on god, he has bigger plan than you",
    "Remember why you started"
]
const button=document.querySelector("button");
const quote=document.querySelector('h1')
button.addEventListener("click",()=>{
    const index= Math.floor(Math.random()*10);
    quote.textContent=quotes[index];
})