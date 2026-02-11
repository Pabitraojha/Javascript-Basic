const form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const income=document.getElementById("number");
    const amount=parseInt(income.value);
    
    const result=document.getElementById("loadingText");

    let totalTax=0;
    if(amount<1200000){
        totalTax=0;
    }
    else if(amount<=1600000){
        totalTax= (amount-120000)*0.15
    }
    else if(amount<=2000000){
        totalTax= (amount-1600000)*0.20+ 60000;
    }
    else if(amount<=2400000){
        totalTax= (amount-2000000)*0.25+80000 + 60000;
    }
    else{
        totalTax= (amount-2400000)*0.30 + 100000 + 80000 + 60000;
    }
    
    result.style.display="inline";

    setTimeout(()=>{
        result.textContent=`Result: ${totalTax}`;
    },2000)
    
    form.reset(); 
})

// this give comment code use to add animated ... in the loading section

// // Function to calculate income tax based on slabs
// function calculateTax(income) {
//     if (income < 1200000) return 0;
//     if (income <= 1600000) return (income - 1200000) * 0.15;
//     if (income <= 2000000) return (income - 1600000) * 0.20 + 60000;
//     if (income <= 2400000) return (income - 2000000) * 0.25 + 60000 + 80000; // Fixed rate to 25% for consistency
//     return (income - 2400000) * 0.30 + 60000 + 80000 + 100000;
// }

// // Form submission event listener
// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const incomeInput = document.getElementById("number");
//     const taxResult = document.getElementById("loadingText");

//     const amount = parseInt(incomeInput.value);

//     // Input validation
//     if (isNaN(amount) || amount < 0) {
//         taxResult.style.display = 'inline';
//         taxResult.textContent = "Please enter a valid positive income.";
//         return;
//     }

//     const totalTax = calculateTax(amount);

//     // Animated loading effect
//     taxResult.style.display = 'inline';
//     let dots = 0;
//     let increasing = true;
//     const interval = setInterval(() => {
//         const loadingText = "Loading" + ".".repeat(dots);
//         taxResult.textContent = loadingText;
//         if (increasing) {
//             dots++;
//             if (dots === 3) increasing = false;
//         } else {
//             dots--;
//             if (dots === 0) increasing = true;
//         }
//     }, 500); // Update every 500ms

//     // Show result after 2 seconds
//     setTimeout(() => {
//         clearInterval(interval);
//         taxResult.textContent = `Result: ₹${totalTax.toLocaleString()}`;
//     }, 2000);

//     form.reset();
// });
