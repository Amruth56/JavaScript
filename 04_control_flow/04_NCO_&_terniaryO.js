// NCO = Nullish Coalescing Operator (??): null undfined 

let val1;
val1 = 5?? 10
val2 = null??1000
val3 = undefined ?? 20
val4 = undefined ?? null
val5 = null ?? undefined
val6 = null ??12 ??34
// console.log(`5 ?? 10                 :${val1}`) //5
// console.log(`null ?? 1000            :${val2}`) //1000
// console.log(`undefined ?? 20         :${val3}`) //20
// console.log(`undefined ?? null       :${val4}`) //null
// console.log(`null ?? undefined       :${val5}`) //undefined
// console.log(`null ?? 12 ?? 34        :${val6}`) //12


//Terniary Operator == consition ? true statement : false

const price = 10;

price >= 100 ? console.log("price is greater than 100") : console.log('price is less than 100')
