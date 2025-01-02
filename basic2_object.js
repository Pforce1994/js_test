const costomer = {
    customerName : "kong",
    age: 40,
    address:"กรุงเทพ",
    showData(){
        console.log("ข้อมูลลูกค้าชื่อว่า",this.customerName)
    }
}

console.log(costomer)
costomer.showData()