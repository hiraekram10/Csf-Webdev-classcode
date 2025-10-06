// console.log(document.childNodes[1].childNodes[1].childNodes[1].setAttribute("id" ,"main"))\

// attribute add (1 attribute name , 2  attr value)
// var i = document.querySelector('i')
// console.log(i.parentNode);

// document.childNodes[1].childNodes[1].childNodes[1].removeChild(i)
// document.body.firstChild; //  First child node (likely a linebreak(text node))
// document.body.lastChild;
// element.previousSibling
// element.nextSibling


// let main =  document.querySelector('#box')
// // console.log(box.className);   "main" hello
// // console.log(box.classList.add('hello')); []
// function cahngeTheme(){

// if(main.classList.length == 0){
//     main.className = 'dark'
// }else{
//        main.className = 'light' 
// }
   
    
// }


let userVal = document.querySelector('#userVal')
let todos = document.querySelector('#todos')
function addTodo(){
   todos.innerHTML += `<li><span>${userVal.value}</span> <button onclick='dltFun(this)'>delt</button> <button  onclick='edtFun(this)'>edit</button> </li>`
   userVal.value = '' 
}


// '<li>' + userVal.value  +'</li>'  || templae literals
// console.log(`hello ${num}`);
function dltFun(a){
  a.parentNode.remove()
    
}

function edtFun(a){
let oldText = a.parentNode.firstChild
let newText = prompt('add your new todo',oldText.innerHTML)
console.log(newText);
a.parentNode.firstChild.innerHTML = newText
 
    
}
