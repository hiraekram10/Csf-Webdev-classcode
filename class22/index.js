// synchronous  -- sync
// console.log('hi1');
// console.log('hi2');
// setTimeout(()=>{
//     console.log('hi3');
    
// },3000)
// console.log('hi4');


// // Async


// // promise

// pending , reject , resolve

// A Promise is an Object that links Producing code and Consuming code.
// let myPromise = new Promise((resolve,reject)=>{
 
// setTimeout(()=>{
//     let userPaaswor = 1234
//      if(12345 == userPaaswor){
//       resolve('promise done')  
//      }else{
//         reject('not same')
//      }

     
// },3000)

// })


// myPromise.then(res =>console.log('resolve-->',res))
// .catch(err =>console.log('reject-->',err))


// Interacting with APIs in JavaScript (using Fetch API):
// The fetch() API is a modern and powerful way to make network requests in JavaScript.


// let main = document.getElementById('main')
// // let geTdATA = fetch('https://api.escuelajs.co/api/v1/products')
// // geTdATA.then(res => res.json())
// // .then(res => console.log('res-->',res))
// // .catch(err => console.log(err))





let main = document.getElementById('main')
let geTdATA = fetch('https://api.escuelajs.co/api/v1/products')
geTdATA.then(res => res.json())
.then(res => res.map((v,i)=>(
  
    
    main.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${v.category.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${v.title}</h5>
    <p class="card-text">${v.description}</p>
    <a href="#" onclick='getProduct(${v.id})' class="btn btn-primary">${v.price}</a>
  </div>
</div>`
)))
.catch(err => console.log(err))


// HTTP methods, also known as HTTP verbs, define the actions to be performed on a resource identified by a Uniform Resource Identifier (URI). These methods are a fundamental part of the Hypertext Transfer Protocol (HTTP) and are used by clients to communicate their intentions to a server.
// // The most common HTTP methods, frequently used in RESTful APIs and web development, include:
// // GET: Retrieves data from the server. It is considered a "safe" and "idempotent" method, meaning it does not alter the server's state and multiple identical GET requests will have the same effect as a single one.
// // // POST: Sends data to the server to create a new resource or submit data for processing. It is not considered safe or idempotent, as repeated POST requests can create multiple resources or have different effects.
// PUT: Replaces an existing resource or creates a new one if it doesn't exist at the specified URI. It is idempotent but not safe.
// PATCH: Applies partial modifications to a resource. Unlike PUT, which replaces the entire resource, PATCH updates only the specified fields. It is neither safe nor idempotent.
// DELETE: Removes a specified resource from the server. It is idempotent but not safe.

function getProduct(a){
    console.log(a);
    
}
