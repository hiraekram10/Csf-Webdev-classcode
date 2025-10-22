// localStorage.setItem('product',"apple")
// localStorage.setItem('productDetail',"this is an apple")
 

// let main = document.getElementById('main')
// let btn = document.getElementById('btn')
// let prodcut = localStorage.getItem('product')
// let prodcutDet = localStorage.getItem('productDetail')
// main.innerHTML =  `  <div>
//     <h1>${prodcut}</h1>
//     <p>${prodcutDet}</p>
//    </div>`


// if(prodcut){
//     console.log('hai');
    
// }else{
//     console.log('nhi hai');
    
// }
// btn.addEventListener('click',()=>{
//     localStorage.removeItem('product')
// })


// let dataFetch = fetch('https://fakestoreapi.com/product')
// dataFetch.then(res => res.json())
// .then(res => res)
// .catch(err=>console.log(err))




// var main = document.querySelector('#main')
// async function getData (){

// let dataFetch =await fetch('https://fakestoreapi.com/products')
//   let data = await dataFetch.json()
//   console.log(data);

//   data.map((v,i)=>(
 
//     main.innerHTML += `<div class="card" style="width: 18rem;">
//   <img src="${v.image}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${v.title}</h5>
//     <p class="card-text">${v.description}</p>
//     <a href="#" onclick='getProduct(${v.id})' class="btn btn-primary">${v.price}</a>
//   </div>
// </div>`
//   ))
  
   
// }
// getData()

//  let pricing= {
//     fullName: 'ali khan', 
//     discount: 200,
//     prdoctName: 'Machine',
//     total: 2000,
//    calculateDis : function (){ 
//        console.log(this.total -this.discount);
       
        
//     }
  
//  }
//   let pricing2= {
//     fullName: 'ali khan', 
//     discount: 200,
//     prdoctName: 'Machine',
//     total: 3500,
//    calculateDis : function (){ 
//        console.log(this.total -this.discount);
       
        
//     }
  
//  }
// pricing.calculateDis()
// pricing2.calculateDis()



class Pricing{
    constructor(dis,tot){
      this.discount = dis; 
      this.total = tot; 
      
    }
    calculation (){ 
       console.log(this.total -this.discount);
        
    }

    
}

let oj1 = new Pricing(200,5000)
let obj2 =new Pricing(200,4000)
let obj3 = new Pricing(200,8000)

let arr = [obj2,obj3,oj1]
console.log(arr);

