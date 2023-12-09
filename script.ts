// import axios from 'axios'

// const url = 'https://jsonplaceholder.typicode.com/todos/1'


// interface Todo {
//   id: number;
//   title: string;
//   completed: boolean;
// }

// axios.get(url).then(response => {
//   const todo = response.data as Todo;
//   const id = todo.id
//   const title = todo.title
//   const completed = todo.completed



//   logTodo(id,title,completed)
// })

// const logTodo = (id:number, title:string, completed:boolean) => {
//   console.log(`
//   The todo wish ID: ${id}
//   Has a title of: ${title}
//   Is it finished? ${completed}
//   `)
// }

// let x:number;

// if(2===2){
//  x = 3
// } else {
//   x=1
// }

// console.log(x)


//списки


// const arr1: Array<number> = [1];

// const arr2:number[][] = [[3,3],[],]

// type MyType = string|number

// const arr3:MyType[] = []


// //кортежи(tuple)

// const tuple1:[string, boolean,number] = ['',true,5]
// //csv

// const example:[string,string,number][] = [
//   ['str','str',32],
// ]

// const arr: string[] = ['a','b','c'];
//  arr[8] = 'test'

//  let x:string = arr[6]
//   console.log(typeof x)  // undefined
//   console.log(x)         // undefined

// type MyObj= {
//   readonly a:number;
//   b:number;
//   c:string;
// }

// interface ImyObject{
//  readonly a:number;
//   b:number;
//   c:string;
//   // print?: ()=> number;
//   [key: string]: string|number;
// }

// const obj:ImyObject = {a:1, b:2, c:'aasdf', eee:'ddde'}

// const obj2:ImyObject={
//   a:1,
//   b:2,
//   c:'',
  
// }

// interface IPerson {

//   name:string  
// }

// interface IPerson {

//   age:number
// }

// interface IAccount{
//   email:string,
//   login:string,
//   active:boolean
// }

// interface IDeveloper extends IPerson, IAccount{

//   skills: string[];
//   level?:string

// }

// const john: IDeveloper = {
//   name:'', 
//   age:1,
//   email:'',
//   login:'',
//   active:true,
//   skills:[''],
//   level:''
// }


// const fn1 = (num: number):string =>  {
//   return String(num)
// }



// function fn2(cb?:(num:number)=>string){

//   if(cb === undefined){
//     cb = String
//   }
//   cb(12)
// }

// function createPoint(x:number = 0, y:number = 0):[number,number]{
// return  [x,y]
// }
// createPoint(10,20)

// function fn3(...nums:number[]):string {
//   return nums.join('-')

// }

// interface IPrintable{
// label:string
// }

// function printReport(obj:IPrintable): void{
//   return undefined

// }

// const drink = {
//   label: 'pepsi',
//   price : 90,
// } 

// printReport(drink);

// function pickCard(x:number):{suit:string, card:number} 
// function pickCard(x:{suit:string, card:number}[]):number

// function pickCard (x):any{
//   if(typeof x === 'object'){
//     return 1
//   } else if(typeof x ==='number' ){
//     return {suit:'', card:1}
//   }

// }

// pickCard([{suit:'', card:1}])

// const valueFactory = (x:number)=> x

// const myValue = valueFactory(11)

// type TypeFactory<X> = X

// type MyType = TypeFactory<number>

// interface valueContainer<Value>{
//   value: Value
// }

// type StringContiner = valueContainer<string>

// const x: StringContiner ={
//   value: 'ffdefef5'
// }


// class ArrayOfNumbers {
//   constructor(public collection:number[]){
//     this.collection = collection
//   }
    
//     get(index: number):number{
//       return this.collection[index]
//     }
  
// }

// class ArrayOfString {
//   constructor(public collection:string[]){
//     this.collection = collection
//   }
    
//     get(index: number):string{
//       return this.collection[index]
//     }
  
// }

// class ArrayOfAnything<T>{
//   constructor(public collection:T[]){
//     this.collection = collection
//   }
    
//     get(index: number):T{
//       return this.collection[index]
//     }
  
// }

// new ArrayOfAnything<string>(['1','2'])
// new ArrayOfAnything<number>([1,2])



// function pS(arr:string[]){
//   return 1
// }

// function pN(arr:number[]){
//   return 1
// }

// function pA<T>(arr:T[]){
//   return 3
// }

// pA<number>([1,2])


// function fillArray<T>(len:number,elem:T):T[]{
//   return new Array<T>(len).fill(elem)

// }

// const arr1 = fillArray<string>(10,'*')



// interface ILengthWise{
//   length: number
// }
// function printLength<T extends ILengthWise>(arg:T):number{
// return arg.length
// }



// function getProperty<T,K extends keyof T>(obj:T,key:K):T[K]{
//  return obj[key]
// }

// const MyObj = {
//   a:1,
//   b:2,
//   c:3
// }

// getProperty(MyObj,'a')


let w = undefined



const elem = document.documentElement

elem.lang = 'ru'

console.log(elem.lang)