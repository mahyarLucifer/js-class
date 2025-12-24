// Number
// String
// null
// undifiend
// object
// boolean


// var age = 10

// var usernaem = "ali"

// var userPass ;


// var isLogin = false

// var empty = undefined

// console.log(empty);




// oprator 

// + - * /

// var x = "20"

// var y = "20"

// var c = x - y 

// console.log(c);

// not a number NAN


// comprative oprator
// loost equality == 
// strict equality === 
// != !==

// < > <= >=

// console.log(5 === 5);


// console.log(5 <= 5);


// ternarry oprator

// condation ? "aaa" : "aaa" 

// var x = 1000
// var y = 2000

// var c = x > y ? "ali" : "mmd"

// console.log(c); 


// logical oprator

// &&
// or ||
// ?? nulish


// کد تخفیف فعال است یا نه ظرفیت استفاده دارد یا نه

// var isActive = false
// var discountUsage = 10
// var discoutnUse = 5

// console.log(discountUsage > discoutnUse ?? isActive == true);


// سن رو به صورت سال میگیریم و مشخص میکنیم چند هفته زندگی کرده


// var userBirthday = 2006

// var userAge = 2025 - userBirthday

// var year = userAge * 365

// var week = year / 7


// console.log(week);


// success pending reject
// if else if else

// var oprate = "pending"

// if (oprate == 'success') {
//     console.log("your opratin is successfull");
// }
// else if (oprate == "pending"){
//  console.log("your opratin is pending");
// }
// else {
//       console.log("your opratin is rejected");
// }

// switch case

// admin normal merchent superadmin



// var role = prompt("what is your role ? ")



// switch(role) {
//     case "admin" :
//         console.log("your user is admin");
//         break
//     case "normal" :
//         console.log("your user is normal");
//         break
//     case "merchent" :
//         console.log("your user is merchent");
//         break
//     case "superadmin" :
//         console.log("your user is superadmin");
//         break       
//     default : 
//     console.log("your user not found");

// }




// object & array

// let user = 'ali'
// let user2 = 'mmd'
// let user3 = 'hossein'
// let user4 = 'pouya'

// [] array
// let users = ['ali','mmd','hossein','pouya','mahyar']

// console.log(users[3]);
// console.log(users.length);
// console.log(users);

// {} object

// ali 25 tehran 392101984 09129328 
// title price size discount number


// let product = {
//     title : "pants" ,
//     price : 200 ,
//     size : ['sm','md','lg','xl','2xl'],
//     discount : 20,
// }

// // key : value

// let mainPrice = product.price

// console.log(mainPrice);





// var let const


// var user  = 'pouya'

// var user = 'ali'

// var user = 'ali'

// var user = 'ali'

// var user = 'ali'

// var user = 'ali'

// let user = 'pouya'

// console.log(user);

// user = 'ali'

// console.log(user);

// const user1 = 'pouya'

// user1 = 'ali'


// console.log(user1);





// loop => حلقه

// for  while  do while  for in  for of

// for (let i = 0 ; i <= 300 ; i++ ) {
//     console.log("pouya");
// }

// let i = 0
// while (i > 300){
//     console.log(i);
//     i++
// }


// let i = 0

// do {
//    console.log('pouya');
//    i++
// }while(i > 300)




// object : for in
// array : for of


// let prices = [100,200,1000000,500,20]



// for(let price of prices){
//     console.log(price);
// }


// let product = {
//     title : "pants" ,
//     price : 200 ,
//     size : ['sm','md','lg','xl','2xl'],
//     discount : 20,
// }
// dot notation
// bracet notation

// for(let item in product){
//     console.log(product[item]);
// }

// break

// for (let i = 0 ; i <= 300 ; i++ ) {
//     if (i > 50) break
//     console.log(i); 
// }















// function

// declare - parameter
// let userName = prompt("Enter your user name ? ")


// function sayHello(name){
//     console.log('hello ' + name);
// }
// // call 

// sayHello(userName)
// sayHello('pouya',25,"pouya2402@gmail.com")


// return



// function calcPrice(p1,p2,p3){
//     let result = p1 + p2 + p3

//     return result
// }

// let t = calcPrice(90,100,40)


// let delivery = t + 50

// console.log(delivery);



// method
// let product = {
//     title : "shoes",
//     size  : [37,38,39,40],
//     price : 1200000,
//     discount : 200,
//     calcPrice() {
//         let r = this.price - this.discount
//         return r
//     }
// }


// let totalPrice = product.calcPrice()


// console.log(totalPrice + 923);





// constructor & factory -> function


//factory

// function CreateProduct(title, size) {
//     return {
//         title,
//         size,
//         price: null,
//         discount: 500,
//         calcPriceOfSize() {
//             let productSize = this.size
//             switch (productSize) {
//                 case 37:
//                     this.price = 1000000
//                     break
//                 case 38:
//                     this.price = 1500000
//                     break
//             }
//             let r = this.price - this.discount
//             return r
//         }
//     }
// }


// let shoe1 = CreateProduct('nike', 37)

// console.log(shoe1.calcPriceOfSize());


// function CreateProduct(title,price,discount){
//     this.title = title
//     this.price = price
//     this.discount = discount
//     this.calc = function calcPrice(){
//         console.log(price-discount);
//     }

// }


// let shoes = new CreateProduct('shoes',1000,10)

// console.log(shoes.calc());






// premtive - refrence 

// premtive

// let user = "ali"

// let copyuser = user

// copyuser = 'pouya'

// console.log(user);

// console.log(copyuser);



// // refrence

// let user1 = {
//     name : "mahdi"
// }

// let copyObj = user1

// copyObj.name = 'mmd'

// console.log(user1);

// console.log(copyObj);



// destructuring => obj & array
// key : value
// let product = {
//     title : "shoes",
//     size  : [37,38,39,40],
//     price : 1200000,
//     discount : 200,
//     calcPrice() {
//         let r = this.price - this.discount
//         return r
//     }
// }

// console.log(product.size[1]);
// console.log(product.price);
// console.log(product.discount);


// let {price , size ,title} = product

// console.log(title);


// let nums = [1,2,3,4,5,6]
// // console.log(nums[3,4]);

// let [a,b,c,d,f,h] = nums

// console.log(d);

// let [ d, , , ,a] = nums

// console.log(d,a);




// function welcomeMessage({name,city,gmail}){
//     // console.log("hello " + name + " from " + city + " with gmail " + gmail);
//     // literal template
//     console.log("hello " + name + " from " + city + " with gmail " + gmail);

//     console.log(`hello ${name} from ${city} with gmail ${gmail}`);

// }

// welcomeMessage({
//     name : "pouya",
//     city : "tehran",
//     gmail : "pouya@gmail.com"
// })



// spread oprator => ...

// let nums = [1,2,3,4]


// // 1 - add sth to array

// let num2 = [...nums,5,6,7]


// console.log(num2);

// 2 - pass all array index to argument

// console.log(nums[0]);
// console.log(nums[1]);
// console.log(nums[2]);

// console.log(...nums);


// // 3 - create new array

// let words = ['a','b','c','d']


// let arr = [...words,'s','e']

// console.log(arr);


// // 4 - string

// let str = 'pouyazohrevand'

// let arr2 = [...str]


// console.log(arr2);


// // 5 - add item to object

// let user = {
//     name :"pouya",
//     city : "tehran",

// }
// let nUser = {...user , email : "pouya@gmail.com"}
// console.log(nUser);
// console.log(user);






// set



// 1 - uniq data
// let nums = new Set(['amir','amir','amir','ali','mahyar','yasin','yasin','yasin','yasin','yasin','yasin',1,1,1,1,1])

// console.log(nums);


// // 2 - size

// console.log(nums.size);

// // 3 - add

// nums.add(10)

// console.log(nums);

// // 4 - delete

// nums.delete(1)

// console.log(nums);

// 5 - clear

// nums.clear()

// console.log(nums);


// 6 - for of

// for(let item of nums) {
//     console.log(item);

// }


// use case

// let role = ['admin', 'superuser' , 'owner' , 'admin' , 'teacher', 'superuser', 'owner', 'owner']

// let newRole = [...new Set(role)]

// console.log(newRole);

// zarb(7,5)

// // expression - declaration

// //declaration

// hoisting

// zarb(5,6)

// function zarb(a,b){
//     console.log(a * b);
// }

// zarb(5,5)

// // // expression

// zarb2(8,6)

// let zarb2 = function(a,b){
// console.log(a * b);
// }

// zarb2(5,6)




// arrow function  => 


// let zarb = (a,b) => console.log(a * b);


// zarb(5,7)


// let zarb = () => console.log("hello");

// zarb()


// عددی که داده میشه اگر بر 3 بخش پذیر بود بگه فیز اگه به 5 بود بگه باز اگه به جفتش فیز باز



// function fizzBuzz(num){
//     if(num % 3 == 0 && num % 5 == 0) console.log('fizzBuzz');
//     else if (num % 3 == 0) console.log("fizz");
//     else if(num % 5 == 0) console.log('buzz');
//     else console.log("its not fizz or buzz");

// }


// fizzBuzz(15)





// scoop => block , global

// {} => yek block

// let counter = 5

// function sayHello() {

//     console.log(counter);

// }
// sayHello()



// default paramter

// function sayHello(username = 'user'){
//     console.log(`hello ${username}`);
// }

// sayHello('pouya')

// function Calc(price , discount = 100){
//     console.log(price-discount);

// }
// Calc(500 , )


// first class & call back & higher order function = HOF => function

// 1 - let add = () => {}
// 2 - let add2 = (add) = {console.log(add)}
// 3 - let add2 = (add2) = return add2

// HOF => abstraction (oop) => yani ye kari anjam bedi ke hajm code kam beshe

// برنامه ای بنویسید که 2 عدد گرفته و آنها را جمع تفریق و ضرب کند

// function Increase(a,b){
//     let result = a + b
//     console.log(result);
// }

// Increase(5,10)


// function Decrease(a,b){
//     let result = a - b
//     console.log(result);
// }

//  Decrease(10,5)


//  function Zarb(a,b){
//     let result = a * b
//     console.log(result);
// }

// Zarb(10,5)


// function opration(a,b,cb){
//     let result = cb(a,b)

//     console.log(result);

// }

// function inc(a,b){
//     return a + b
// }
// function dec(a,b){
//     return a - b
// }
// function zarb(a,b){
//     return a * b
// }

// opration(10,20,inc)




// call apply => function method

// let user = {
//     name : "pouya",
//     city : 'tehran',
//     birth : 1995,
//     CalcYears(num){
//         console.log(2025 - this.birth + num);
//     },
//     welcome(){
//         console.log(`hello ${this.name} from ${this.city} `);

//     }
// }

// let user2 = {
//     name : 'ali',
//     city : "shiraz",
//     birth : 2006,
// }

// let message = user.welcome

// let calcYear = user.CalcYears


// calcYear.call(user2,5)

// calcYear.apply(user2,[2])



// closure => encapsulating , persistence

// persistence => پایداری کد
// capsulating => امنیت

// 1 - count login user
// 2 - count sign up user

// let counter = 0

// function Login(){

//     counter++;

//     console.log(counter);

// }

// Login()
// Login()
// Login()  // persistence
// Login()
// Login()


// function SignUp(){

//     counter++;

//     console.log(counter);

// }

// SignUp()
// SignUp() // capsulating
// SignUp()



// closure => کد رو پایدار میکنه و امنیت اطلاعات

// function CounterReq(){
//     let counter = 0
//     return function inncreaser(){
//         counter++
//         return counter
//     }
// }


// let loginReq = CounterReq()

// console.log(loginReq());
// console.log(loginReq());
// console.log(loginReq()); // persistence
// console.log(loginReq());
// console.log(loginReq());


// let signUpReq = CounterReq()

// console.log(signUpReq());
// console.log(signUpReq());
// console.log(signUpReq()); // capsulating
// console.log(signUpReq());
// console.log(signUpReq()); 


// string
// string methods


// method => ()

// let username = 'poupyapp'

// console.log(username.length);

// // index of

// console.log(username.indexOf('p'));

// // last index of

// console.log(username.lastIndexOf('p'));

// // slice

// console.log(username.slice(0,3));

// // includes

// console.log(username.includes("p"));

// // join split

// let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odit pariatur nam eveniet dolore, officia ad? Beatae ipsam natus reiciendis fuga fugit odit eius, suscipit nulla iure eos explicabo error!'

// let news = str.split(' ').join("-")






// uppercase - lowercase - trim - padding


// let str = '      HELLO GUYS                               '

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());

// let card = '8970'
// console.log(card.padStart(10,'*'));
// console.log(card.padEnd(10,'*'));

// let username = '            POUYA               '

// console.log(username);

// console.log(username.trim());


// let cardNumber = '12151111'

// console.log(cardNumber.padStart(10,'*'));

// console.log(cardNumber.padEnd(10,'*'));


// let userPassword = prompt("Enter your password ? ")


// if (userPassword.toLowerCase().trim() == 'pouya') {
//     console.log('welcome');
// }
// else {
//     console.log('not found');

// }

// let txt = 'hello ali how are you ali ali ali ali ali ali'


// console.log(txt.replace('ali','mmd'));
// console.log(txt.replaceAll('ali','mmd'));


// '6219 8618 1883 8970'
// '6219-8618-1883-8970'
// '6219861818838970'

// let txt = 'i-like-dogs-and-live-with-my-dogs'

// console.log(txt.replace('dogs','cats'));


// console.log(txt.replaceAll('-',' '));


// let cardNumber =  '6219 8618 1883 8970'

// function FilterCardNumber(number){
//     let num = number.replaceAll(" " , '').replaceAll("-",'').trim()
//     let last = num.slice(-4)
//     console.log(num.length);

//     return last.padStart(num.length , '*')
// }


// console.log(FilterCardNumber('      6219-8618-1883-8970        '));



// array method

// shif unshift push pop includes indexOf

// let nums = [1,2,3,4,5,6,7,8,'amir']

// nums.pop()

// nums.push(10)

// nums.shift()

// nums.unshift(15)

// console.log(nums.includes(3));


// console.log(nums.indexOf('amir'));


// console.log(nums);





// slice splice concat reverse join at

// let nums = [1,2,3,4,5,6,7,8,'pouya']
// []
// {}

// console.log(nums.slice(-2));


// let num2 = [9,10]

// console.log(nums.slice(5));


// nums.splice(1,3)

// console.log(nums);


// console.log(nums.concat(num2));


// console.log(nums.reverse());


// console.log(nums.join("*"));


// console.log(nums.at(-5));



// forEach Some Every Filter Map Reduce FindIndex Sort 


// let letters = ['a','b','c','d','e','f']

// let newArray = []


// letters.forEach(function(item,index){
//     newArray.push(item)
// })

// console.log(newArray);

// let price = [1000,100000,10000000,10,100,1,500]

// console.log(price.sort());

// let newP = price.map((p) => {
//     return p * 5
// })



// console.log(newP);


// let nums = [10,1000,100,100000,2,200020]

// // mutate
// // imamute
// let smallToBig = nums.sort( (a,b) => {

//     return b - a
// })

// let bigTosmall = nums.sort( (a,b) => {

//     return b - a
// })

// console.log(smallToBig);




// math      date

// floor  trunc  ceil  random round

// console.log(Math.floor(13.9));


// console.log(Math.trunc(13.9));


// console.log(Math.ceil(13.1));


// console.log(Math.round(13.5));

// let nums = [1,5,56,3,6,3,7]


// console.log(Math.max(1,5,56,3,6,3,7));

// console.log(Math.min(1,5,56,3,6,3,7));

// console.log(Math.floor(Math.random() * 100000000));



// let d = new Date()

// console.log(d.getDate());

// console.log(d.getDay()); // 0 - 6

// console.log(d.getFullYear());

// console.log(d.getHours());

// console.log(d.getMinutes());

// console.log(d.getMonth()); // 0 - 11

// console.log(d.getSeconds());

// console.log(d.getTime());

// console.log(d.toLocaleDateString('fa-IR', {
//     year : "numeric",
//     month : "long",
//     weekday : "long",
//     day : "numeric"
// }));



// setTimeOut vs setInteerVal


// let b = setTimeout(() => {
//     console.log("s");

// }, 4000)



// clearTimeout(b)

// let c = 0

// let s = setInterval(() => {
//     c++
//     console.log(c);

// }, 1000)

// setTimeout(() => {
//     clearInterval(s)
// }, 20000)


// select 


// getById querySlector querySelectorAll

// console.log(document.getElementById("b"));

// console.log(document.querySelector("#s"));

// console.log(document.querySelectorAll("#s"));

// textContet tagName ClassList

// console.log(document.querySelector(".g").textContent);

// console.log(document.querySelector(".g").tagName);

// console.log(document.querySelector(".g").classList);


// let o = document.querySelector(".g")


// add element to html with js

let p = document.createElement("p")

p.innerText = 'pouya'

console.log(p);

p.classList.add("s")

p.classList.add("h")

p.classList.remove("h")


let b = document.querySelector(".box")

b.prepend(p)
b.append(p)