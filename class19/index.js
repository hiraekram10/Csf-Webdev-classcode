let lists = document.getElementById('lists')
console.log(lists);
// lists.innerText = 'jfgsdhgf'
// lists.innerHTML= "<li>sghjhsdfhk</li>"



function inputMssg(e){
    if(e.keyCode === 13){
    lists.innerHTML += '<li class="right">'+ e.target.value +'</li>'
   let greet =  ["hi","hello","hii","hey","salam"]
    if(greet.includes(e.target.value)){
        setTimeout(function(){
               lists.innerHTML += '<li class="left">'+ 'hello, how can i help you' +'</li>'
        },2000)
    }else{
        setTimeout(function(){
               lists.innerHTML += '<li class="left" >'+ 'sorry , i cant understand' +'</li>'
        },2000)
    }
    
e.target.value = ''  
  }

  
    
}




//  includes --> search element in array , return true or false
let arr = ["hi","hello","hii","how"]
var newArr = arr.includes("hiii")
console.log(newArr);




