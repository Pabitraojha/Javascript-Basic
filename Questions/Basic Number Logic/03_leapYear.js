let year=1900;
const checkLeapYear=(year)=>{
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        console.log("its a leap year...")
    }else{
        console.log("it's not a leap year.")
    }
}
checkLeapYear(year);