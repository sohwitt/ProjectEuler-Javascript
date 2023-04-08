let count = 0;
let fact;
// an uncoditional loop to go through all the numbers
for(let wNum = 1; ;wNum++){
    fact = 0;
  //a loop to count factors of the number
    for(let i = wNum -1; i>1 ; i--){
        if (wNum % i == 0) {
            fact++;
        }
    }
  //if there are 0 factors it means it is a prime number
    if(fact == 0){
      //increase prime number counter
        count++;
      //the count is written 10002 considering 1 as prime
        if (count == 10002){
            console.log(wNum);
            break;
        }
    }
