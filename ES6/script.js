/*VARIBLES 
there are 2 typees of varibles 
1.let:
@Part of ES6
@access to inside the block of code only if it is inside the block of code unlike var which is in older version 
@can be change after ward
2.const :
@Part of ES6
@Create a constant value
@access to inside the block of code only if it is inside the block of code
@cant change after declation
*/


/* FUNCTION
3 types 
basic fat arrow
let a=()=>{} 
  
fat arrow function with 1 parameter
let a = parameter =>{}
  
fat arrow function with no return 
let a = ()=> 122
console.log(a());
result will be 122*/

/*TEMPLATE
using of ``(BACKTICKS) instead of "" ,'' bcz is ma ${} use karka function kara sakta hai use */

/* DEFAULT PARAMETER
jaab fucntion call ma koi parameter na de jaya but u want the result should not be undefined then you use default parameter , such as:
function avc(prm=0)//yaha perm=0 jis se result ma undefined na aaya{
console.log(prm);
}

avc(12);
avc();is ma koi value nahi de hai
result will be :
12 
0

2 example:
function abcd(a=0,b=0,c=0){
console.log(a,b,c);
}
abcd(1,2,3);
abcd(1,2,2);
abcd(2)
answer will be :
1,2,3
1,2,2
2,0,0
*/

/*REST AND SPREAD
terko copy karna hai
but tu use ya karega 
let a = [1,2,3,4,5,6,6,7,7];
let b = a;
console.log(a);
console.log(b);
result will be same the modification in a will be automatically change in b and vise versa

...spread/rest

Spread use hota hai copy ya fir us location par kisi aur ki values bikherna ke liya or merging ka liya bhi

let a =[1,2,3,4,5,6,7,8];
let b = [...a];
b.push(9);
console.log(a);
console.log(b);

let a = [1, 2];
let b = [3, 4];
let c = [...a, ...b];
console.log(c); // [1, 2, 3, 4]

rest use hota hai jab aapko bache huye values ek variable mei daalne ko
function abcd(a,b,c,...d){
console.log(a,b,c,d)
}
abcd(1,2,3,4,5,6,7,8)

let nested = [[1, 2], [3, 4], [5]];
let flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); // Output: [1, 2, 3, 4, 5]
*/


/*DESTRUCTURING: arrays and obj se data baahar nikaalna in variables 
let obj ={name:"naman", 
  age:18};
let {age}= obj;
console.log(age);

let a=[1,2,3];
let[b,,c]=a;
*/


/*Promises
let ans= new Promise((res,rej)=>{
  if(false){
  return res();
  }
  else {
  return rej();}
  })

  ans
  .then(()=>{
    console.log("resolve ho gya the");
  })

  .catch(()=>{
    console.log("reject ho gye the");
    

let ans = new Promise((res, rej) => {
  let n = Math.floor(Math.random()*10);
  if (n < 5) {
    return res();
  }
  else {
    return rej();
  }
})

ans.then(()=>{
  console.log("below");
})
.catch(()=>{
  console.log("above");
})
  })

*/



/* ASYNC AWAIT
async function abcd(){
  let raw = await fetch("https://randomuser.me/api/");
  let ans = await raw.json();
  console.log(ans);
  
}
abcd();

function abcde(){
  fetch("https://randomuser.me/api/")
  .then(function(raw){
    return raw.json();
  })
  .then(function(data){
    console.log(data);
    
  })
}

abcde();

*/


/* */

/* */

/* */