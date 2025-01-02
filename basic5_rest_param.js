sumation=(...number)=>{
    let total=0
    for (let index = 0; index < number.length; index++) {
        console.log(number[index])
        total += number[index]
    }
    return total
}

console.log(sumation(5,6,6,4,5,6,4,57,45,7,67))