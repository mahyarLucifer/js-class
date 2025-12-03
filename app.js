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


// let {price , size ,title} = product

// console.log(title);


// let nums = [1,2,3,4,5,6]

// let [ d, , , ,a] = nums

// console.log(d,a);




// function welcomeMessage({name,city,gmail}){
//     // console.log("hello " + name + " from " + city + " with gmail " + gmail);
//     // literal template

//     console.log(`hello ${name} from ${city} with email ${gmail}`);
    
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

// // 2 - pass all array index to argument

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





// set



// 1 - uniq data
let nums = new Set([1,2,2,3,3,3,4,5])

// console.log(nums);


// 2 - size

// console.log(nums.size);

// 3 - add

// nums.add(10)

// console.log(nums);

// 4 - delete

// nums.delete(1)

// console.log(nums);

// 5 - clear

// nums.clear()

// console.log(nums);


// 6 - for

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
// function zarb(a,b){
//     console.log(a * b);
// }

// zarb(5,5)

// // expression

// let zarb2 = function(a,b){
// console.log(a * b);
// }

// zarb2(5,6)




// arrow function  =>

let zarb = (a,b) => console.log(a * b);


zarb(5,7)