//push pop shift unshift
const data= [10,20,30]
console.log(data)

data.push(40,50)
console.log(data)

data.push([60,70,80])
console.log(data)

data.push(...[90,100])
console.log(data)

data.pop()
data.pop()
data.pop()
console.log(data)

data.shift()
console.log(data)

data.unshift(20)
console.log(data)