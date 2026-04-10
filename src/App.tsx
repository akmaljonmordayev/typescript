import React from 'react'

function App() {


  //typescript data types

   //number

    // let a:number = 90
    // console.log(a);
    

      // string
    // const b:string = "90"

    // console.log('a');
    
    //boolean

    // const c:boolean = false 


    // const d:null =null

    // const u:undefined = undefined
    // console.log(u);
    // console.log(typeof u);
    

    // const w:any = true
    // console.log(w);
    

    // const arr: number[] = [12, 45, 67, 89,78,]
    // const b: string[] = ["hello", 'hello']
    // const c: boolean[] = [true, false, true]

    // tuple

    // const tup: [number, string, number] = [12, "hello", 13] 


    //object

    // const obj: {name:string, age:number, married:boolean} = {
    //   name:"Akmal",
    //   age:12,
    //   married:false
    // }

    // type USER = {
    //   name:string,
    //   age:number,
    //   marrdied:boolean,
    //   studies:any
    // }

    // const user:USER = {
    //   name:'akmal',
    //   age:899,
    //   marrdied:false,
    //   studies:false
    // }
    // const olma:USER={
    //   name:'olma',
    //   age:10,
    //   marrdied:true,
    //   studies:'bor'
    // }

    //union

    // const t:number | string  = 12

    // console.log(t);
    // console.log(typeof t);
    


    // literal type

    // let v : 'hello' | 'olma' | 'gul' | 'abdulloh'

    //   v = 'abdulloh'

//    enum Role {
//   ADMIN = "ADMIN",
//   USER = "USER",
//   GUEST = "GUEST"
// }

// let role:Role = Role.GUEST;
// console.log(role);  

//unknown
// const a:unknown = true

//functon type

// function N(a:number, b:string):string{
//   return a + b
// }

// console.log(N(23, '45'));

// function N(a:number, b:string):void{
//   console.log(a + b);
// }

// N(23, '45');



// function N(a:number = 20):void{
//   console.log(a);
// }

// N()

// //funcsiyaga defaul qiymat berish

// function M(a?:number):void{
//   console.log(a);
// }

// M()

//optional parameter





// function N(a:number, b:string, c?:boolean):void{
//   console.log(a + b);
//   console.log(c);
// }

// N(23, '45', true);



// function N(a:number, b:number):number{
//   return a + b
// }

// console.log(N(23, 45));

// let a:unknown = 12

// if(typeof a === 'string'){
//   console.log(a.toUpperCase());
// }


// function a(a?:number):void{
//   console.log(a);
// }

// // a()  
// a(12)


// function b(a:number = 20):void{
//   console.log(a);
// }

// ()

// let a:never

// function error(message:string):never{
//   throw new Error(message)
// } 

// error('This is an bilol error')




// interface User{
//   name:string,
//   age:number,
//   married:boolean
// }

// interface User{
//   studies:any
// }


// //interface larni birlashtirish mumkin


// const user:User = {
//   name:'akmal',
//   age:899,
//   married:false,
//   studies:false
// }


// type User = [string, number, boolean]
// type A = string | number | boolean
// //interface User2 = [string, number, boolean] //mumkin emas, interface lar faqat object uchun ishlatiladi

// const user:User = ['akmal', 12, false]
// const user2:User = ['olma', 10, true]
// const mohinur: A = true

 



  // interface Mohinur {
  //   name:string,
  //   age:number,
  //   married:boolean
  // }

  // interface Mohinur {
  //   studies:any
  // }

  // const mohinur:Mohinur = {
  //   name:'mohinur',
  //   age:12,
  //   married:false,
  //   studies:'bor'
  // }

  // interface Xojar extends Mohinur{
  //   job:string
  // }

  // const xojar:Xojar = {
  //   name:'xojar',
  //   age:12,
  //   married:false,
  //   studies:'bor',
  //   job:'developer'
  // }






  return (
    <div>App</div>
  )
}

export default App