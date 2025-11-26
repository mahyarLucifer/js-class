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
//     let priceOfProdcut = price + 100
//     console.log(priceOfProdcut);
    
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

function sayHello(name,age,email){
    console.log("hello " + name + " with age " + age + " and email " + email);
}

// call 

sayHello('ali',15,"pouya2402@gmail.com")
sayHello('pouya',25,"pouya2402@gmail.com")