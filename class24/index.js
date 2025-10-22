
// console.log('hi1');


// console.log('hi3');


// // error handler
// try{
//    console.lg('stgsdf');
    
// }catch(er){
//  console.log('yeh error hai--->',er);
 
// }
// console.log('hi3');
// console.log('hi3');



let products = document.querySelector("#products")

let cart = []
let total ;
async function getData() {
    
try{
    let response =await fetch('https://fakestoreapi.com/products')
    let data =await response.json()
   return showAllProduct(data)
    
    
}catch(error){
 console.log(error);
 
}

}
getData()


async function showAllProduct(d){
    console.log(d);
    
    d.forEach(product => {
        products.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${product.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.price}</p>
    <button class="btn btn-primary" onclick="addToCart(${product.id},${product.price})" >add to cart</button>
  </div>
</div>`
          
    });
}


function addToCart(id,price){
  let productExist =   cart.find(item=>item.id == id)

    if(productExist){
    productExist.quantity +=1
  
    }else{
        cart.push({id:id,price:price,quantity:1})
        console.log(cart,'no');
        
    }
    
    
updateCart()
}
function updateCart (){
    let cartProducts =  document.querySelector("#cartProducts")
    cart.forEach(cartp =>{
     cartProducts.innerHTML +=`<div class="card">
  <div class="card-body">
    ${cartp.price}
  </div>
</div>`
        
    })  
}









//   find array method rerturn( element)
//  let arr = ["hello","hi","hey"]
// let check = arr.find(item=> item == "hey" )
// console.log(check)