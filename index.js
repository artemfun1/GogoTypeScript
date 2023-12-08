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
var valueFactory = function (x) { return x; };
var myValue = valueFactory(11);
var x = {
    value: 'ffdefef5'
};
var ArrayOfNumbers = /** @class */ (function () {
    function ArrayOfNumbers(collection) {
        this.collection = collection;
        this.collection = collection;
    }
    ArrayOfNumbers.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumbers;
}());
var ArrayOfString = /** @class */ (function () {
    function ArrayOfString(collection) {
        this.collection = collection;
        this.collection = collection;
    }
    ArrayOfString.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfString;
}());
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
        this.collection = collection;
    }
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
new ArrayOfAnything(['1', '2']);
new ArrayOfAnything([1, 2]);
function pS(arr) {
    return 1;
}
function pN(arr) {
    return 1;
}
function pA(arr) {
    return 3;
}
pA([1, 2]);
function fillArray(len, elem) {
    return new Array(len).fill(elem);
}
var arr1 = fillArray(10, '*');
function printLength(arg) {
    return arg.length;
}
function getProperty(obj, key) {
    return obj[key];
}
var MyObj = {
    a: 1,
    b: 2,
    c: 3
};
getProperty(MyObj, 'a');
