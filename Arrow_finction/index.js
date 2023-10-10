const  cars = {
    name:"Hyundai",
    model:"i20",
    price:700000,

    details :function(){

        console.log(` this is   the  ${this.name} car`)
    }
}

cars.details()



// example of  explicit arrow function 



const  sum = (a,b)=>{
    return a+b ;
}

console.log(sum(4,5))


// example of  implecit  arrow function 

const  sum1 = (a,b)=>(a+b)
   


console.log(sum1(5,5))


const obj =(fName , lName)=>({"fName":'Anil', "lName":'patel'})


console.log(obj())