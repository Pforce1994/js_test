const color = ["เขียว","เหลือง","แดง"]
const [green,yellow,red]= color
const[,,red1]=color

console.log(green)
console.log(yellow)
console.log(red)
console.log(red1)

const product={
    productName:"คอมพิวเตอร์",
    price: 30000,
    stock: 10
}

const {productName:productName,price:price,stock:stock} = product

console.log(productName)
console.log(price)
console.log(stock)