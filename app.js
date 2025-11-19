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



var role = prompt("what is your role ? ")



switch(role) {
    case "admin" :
        console.log("your user is admin");
        break
    case "normal" :
        console.log("your user is normal");
        break
    case "merchent" :
        console.log("your user is merchent");
        break
    case "superadmin" :
        console.log("your user is superadmin");
        break       
    default : 
    console.log("your user not found");
    
}