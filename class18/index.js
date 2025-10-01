

//_______________________ Functions____________
//  function add(){   //function decalration
//    let num = 5+ 6
//     console.log(num); 
    
// }

// add()  
// add()
// add()
// add()
// add() //func call /invoke

// parameter // names value receiver
// argument // values pass 
//  function add(a,b,hi){   //function decalration
//    let num = a + b + hi
//     console.log(num); 
    
// }

// add(10,6,8)   //argument
// add(4,3,2)
// add(12,3,23)
// add(42,32,22)


                                // default para
//  function mEssage(userName , email='user@gmail.com'){   //function decalration
  
//     console.log('hi ' + userName  + ' your email address is ' + email  ); 
    
// }

// mEssage("hira" )  
// mEssage("saana" , "sana@gmail.com")  //argument


// var  :functional , global
// let, const : functional global,block

//  let a = 6

//  console.log(window);
//   var num = 4

//   function mEssage(userName , email='user@gmail.com'){   //function decalration
// console.log(num);
  
// }


// mEssage("hira" )  
// mEssage("saana" , "sana@gmail.com")
// let , const  block scope not acceassable
// if(true){
//    const fullName = 'sana khan'
// }else{
//     console.log('hi');
    
// }

// console.log(fullName);


//   return  stops function execution
// function  multiplyData (){
//     let mul =  2* 6
//   if(mul < 20){
//     return 

    
//   }else{
//     return 'your num is greater than 20'
//   }
    
    
    
// }

// var functRe = multiplyData()
// console.log(functRe);



// function greeting (){
//     alert("hello user")
// }


// let par = document.getElementById('para')

// function loadtEXT(){

//   par.innerText += ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum, doloremque odio saepe perspiciatis consequuntur alias architecto sapiente consequatur tempore earum minima harum. Veniam modi nostrum corporis voluptates delectus recusandae!'
    
// }
// .getElementsByClassName return array 
 // let para = document.getElementsByClassName('para1')
// console.log(para);


//  let para = document.getElementsByTagName('button')
// console.log(para);

// let check = document.querySelectorAll('p')
// console.log(check);


// let check = document.querySelector('.para')
// console.log(check);


// let check = document.querySelector('#pp')


// function loadtEXT(){

//   check.innerText += ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum, doloremque odio saepe perspiciatis consequuntur alias architecto sapiente consequatur tempore earum minima harum. Veniam modi nostrum corporis voluptates delectus recusandae!'
//    check.style.backgroundColor = "red" 
//    check.style.color= "white" 
// }

let img = document.querySelector('#image')

let btn = document.querySelector('#btn')
function bulbOn(){
 
  if(img.src === 'https://tse3.mm.bing.net/th/id/OIP.jUlyTJwElswnMINKAwd0agHaL0?pid=Api&h=220&P=0'){
 img.src = 'https://tse1.mm.bing.net/th/id/OIP.E0jSIrVy0lS6LIULac0rngHaKj?pid=Api&h=220&P=0'
 btn.innerText = 'off'
  }else{
img.src = 'https://tse3.mm.bing.net/th/id/OIP.jUlyTJwElswnMINKAwd0agHaL0?pid=Api&h=220&P=0'
 btn.innerText = 'on'
  }
}

    

                                



 








