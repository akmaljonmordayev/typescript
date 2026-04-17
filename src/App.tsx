import React from "react";

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

  // type Mohinur = {
  //   name: string;
  //   age: number;
  //   married: boolean;
  //   studies: any;
  // };

  // type Xojar = Mohinur & {
  //   job: string;
  // };

  // const xojar: Xojar = {
  //   name: "xojar",
  //   age: 12,
  //   married: false,
  //   studies: "bor",
  //   job: "developer",
  // };

  // interface User {
  //   name: string;
  //   age: number;
  //   married: boolean;
  //   studies: any;
  // }

  // interface User2 extends User {
  //   job: string;
  // }

  // const user2: User2 = {
  //   name: "user2",
  //   age: 12,
  //   married: false,
  //   studies: "bor",
  //   job: "developer",
  // };

  //utility types

  //Partial
  //Omit
  //Pick
  //Readonly
  //NonNullable
  //Required

  //Record
  //ReturnType
  //Parameters
  //ConstructorParameters
  //InstanceType
  //Exclude
  //Extract
  //Uppercase
  //Lowercase
  //Capitalize
  //Uncapitalize

  // interface User {
  //   name: string;
  //   age: number;
  //   married: boolean;
  //   studies: any;
  // }

  // const user: Partial<User> = {
  //   married: false,
  //   studies: "bor",
  // };

  // interface User2 {
  //   name: string;
  //   age: number;
  //   married: boolean;
  //   studies: any;
  // }

  // const user2: Omit<User2, "age" | "married"> = {
  //   name: "user2",
  //   studies: "bor",
  // };

  // const user3: Pick<User2, "name" | "age"> = {
  //   name: "user3",
  //   age: 12,
  // };

  // const user4: Readonly<User2> = {
  //   name: "user4",
  //   age: 12,
  //   married: false,
  //   studies: "bor",
  // };

  //   user4.name = "new name"; // Error: Cannot assign to 'name' because it is a read-only property.
  //   delete user4.age; // Error: Cannot delete property 'age' because it is a read-only property.
  //   user4.studies = "new studies"; // Error: Cannot assign to 'studies' because it is a read-only property.
  // console.log(user4);

  // type User3 = 12 | null | undefined
  // let user5: NonNullable<User3> = 12
  // // user3 = null // Error: Type 'null' is not assignable to type 'NonNullable<User3>'.
  // // user3 = undefined // Error: Type 'undefined' is not assignable to type 'NonNullable<User3>'.
  // console.log(user5);

  // interface User4 {
  //   name?: string;
  //   age?: number;
  //   married?: boolean;
  //   studies?: any;
  // }

  // const user6:Required<User4> = {
  //   name: "user6",
  //   age: 12,
  //   married: false,
  //   studies: "bor",
  // };

  // //Exclude

  // type User5 = "admin" | "user" | "guest"
  // type User6 = Exclude<User5, "admin"> // "user" | "guest"

  // let user7: User6 = "guest" // Error: Type '"admin"' is not assignable to type 'User6'.

  // //extract

  // type User7 = "admin" | "user" | "guest"
  // type User8 = Extract<User7, "admin" | "user"> // "admin" | "user"
  // let user8: User8 = "user" // Error: Type '"guest"' is not assignable to type 'User8'.

  // //Uppercase

  // type User9 = "admin" | "user" | "guest"
  // type User10 = Uppercase<User9> // "ADMIN" | "USER" | "GUEST"
  // let user9: User10 = "USER" // Error: Type '"admin"' is not assignable to type 'User10'.

  // //Lowercase

  // type User11 = "ADMIN" | "USER" | "GUEST"
  // type User12 = Lowercase<User11> // "admin" | "user" | "guest"
  // let user10: User12 = "admin" // Error: Type '"ADMIN"' is not assignable to type 'User12'.

  // //Capitalize
  // type User13 = "admin" | "user" | "guest"
  // type User14 = Capitalize<User13> // "Admin" | "User" | "Guest"
  // let user11: User14 = "Admin" // Error: Type '"admin"' is not assignable to type 'User14'.

  // //Uncapitalize
  // type User15 = "Admin" | "User" | "Guest"
  // type User16 = Uncapitalize<User15> // "admin" | "user" | "guest"
  // let user12: User16 = "admin" // Error: Type '"Admin"' is not assignable to type 'User16'.

  // //return type

  // function getUser(): { name: string; age: number } {
  //   return {
  //     name: "user",
  //     age: 12,
  //   };
  // }

  // type GetUserReturnType = ReturnType<typeof getUser>;

  // const user13: GetUserReturnType = {
  //   name: "user13",
  //   age: 12,
  // };

  // //parameters

  // function add(a: number, b: string): string {
  //   return a + b;
  // }

  // type AddParameters = Parameters<typeof add>;

  // const addParams: AddParameters = [12, "45"];

  // //record type

  // type UserRoles = Record<"admin" | "user" | "guest" | "age" | "married", boolean>

  // const user90: UserRoles = {
  //   admin: true,
  //   user: false,
  //   guest: true,
  //   age:true,
  //   married:false,
  // }

  //generics

  // function identity<T>(arg: T): T {
  //   return arg;
  // }

  // const output1 = identity<string>("hello");
  // const output2 = identity<number>(123);
  // const output3 = identity<boolean>(true);
  // const output4 = identity<{ name: string; age: number }>({ name: "user", age: 12 });

  // // function hello(a: any): void {
  // //   console.log(a);
  // // }

  // // hello("hello world");


  // let a:number[] = [12, 45, 67, 89,78,]
  // let b:string[] = ["hello", 'hello']
  // let c:boolean[] = [true, false, true]


  //default generic type
  
  // function identity<T = string>(arg: T): T {
  //   return arg;
  // }  

  // const output1 = identity("hello"); // T will be inferred as string
  // const output2 = identity<number>(123);
  // const output3 = identity<boolean>(true);
  // const output4 = identity<{ name: string; age: number }>({ name: "user", age: 12 });

  //multiple generic types

  // function identity<T, U>(arg1: T, arg2: U): [T, U] {
  //   return [arg1, arg2];
  // }

  // const output5 = identity<string, number>("hello", 123);
  // const output6 = identity<boolean, string>(true, "world");
  // const output7 = identity<{ name: string }, number>({ name: "user" }, 12);


  //multiply generics with objects
  
  // function identity<T, U>(arg1: T, arg2: U): { arg1: T; arg2: U } {
  //   return { arg1, arg2 };
  // }  

  // const output8 = identity<string, number>("hello", 123);
  // const output9 = identity<boolean, string>(true, "world");
  // const output10 = identity<{ name: string }, number>({ name: "user" }, 12);




  return <div>App</div>;
}

export default App;
