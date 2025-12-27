//palimdrome number is equal to its reverse
let num=1431;
let original=num;
let rev= 0;
while(num>0){
  let lastDigit= num% 10;
  rev=rev*10+lastDigit;
  num= Math.floor(num/10);
}
if(original === rev){
  console.log("the number is palindrome");
}else{
  console.log("Number is not palindrome");
}

