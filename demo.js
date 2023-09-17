let score = "33o"
console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof valueInNumber)

if(valueInNumber.toString() === NaN.toString()){
    console.log('Not a Number')
}else{
    console.log(valueInNumber)
    console.log(typeof valueInNumber)

}

