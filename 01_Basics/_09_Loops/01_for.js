// Iterations
// **** For Loop **** //
//syntax: for( intitialization; condition ; updation){    }
for ( let i=0; i<=10; i++){
    console.log(i);
}

// nested loop
// for( let i=1; i<=10; i++){
//     console.log(`outer loop ${i}`)
//     for(let j=1; j<=10; j++){
//     console.log(`inner loop value ${j} and inner loop ${i}`)
//     }
// }


// Break and continue

for( let i= 0; i<=20; i++){
    // if(i===5){
    //     console.log("Detected 5");
    //     break;
    // }
    if(i=== 15){
        console.log("15 detected");
        continue;
    }
    console.log(`value of i is ${i}`);

}