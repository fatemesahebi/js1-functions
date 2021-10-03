//function max and min two numbers
function max(a,b){
    if (a>=b) return(console.log('max=%s and min=%s',a,b));
    else return(console.log('max=%s and min=%s',b,a));
}

console.log(max(50,40))
console.log(max(20,40))



// 2. Check type is string
function isString(yourString){
    if (typeof(yourString)==='string') return true
    else return false
}
// console.log(isString('ali'))
// console.log(isString(123))
// console.log(isString('123'))
// console.log(isString(true))
// console.log(isString({}))


//3. FizzBuzz problem
function fizzbuzz(a){
    if ((a%15===0)) return 'fizzbuzz';
    if (a%3===0) return 'fizz';
    if (a%5===0) return 'buzz';
    else return a;

}
// console.log(fizzbuzz(15))
// console.log(fizzbuzz(2))
// console.log(fizzbuzz(27))
// console.log(fizzbuzz(50))


//4. power 2
function powerTwo(a){
    let n=0;
    while ((2**n<=a)) n++;
    return 2**n;
}
// console.log(powerTwo(95))
// console.log(powerTwo(1010))
// console.log(powerTwo(3512))
// console.log(powerTwo(72))
// console.log(powerTwo(31))
// console.log(powerTwo(64))

// 5. perfect Number
function isPerfect(n) {
    let sumDiv = 0;
    for (let i = 1; i <= (n / 2); i++) {
        if ((n % i) === 0) sumDiv += i
    }
    if (sumDiv === n) return "yes"
    else return "no"
}
// console.log(isPerfect(6))
// console.log(isPerfect(27))

//perfect number between 1-2000
// for (let i = 1; i < 2000; i++) {
//     if (isPerfect(i) === "yes") console.log(i)
// }

//6. prime number

function isPrime(a){
    if (a===2)  return true
    if (a===1) return false
    for(let i=2;i<=((a/2)+1);i++){
        if (a%i===0) return false
    }
    return true
}
// console.log(isPrime(27))
// console.log(isPrime(1))
// console.log(isPrime(2))
// console.log(isPrime(101))
// console.log(isPrime(99))


//7. hard number
function isHard(i) {
    let iCopy = i;
    while (isPrime(iCopy)){
        iCopy=(iCopy-iCopy%10)/10
        if (iCopy<=10){
            if (isPrime(iCopy)) return true;
        }
    }
    return false

}
// let n=3
// let num=10**(n-1)
// let maxLim=(10**n)
// for (num;num<maxLim;num++){
//    if(isHard(num)) console.log(num)
// }