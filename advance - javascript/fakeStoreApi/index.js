 let btn = document.querySelector("button")
 let productsElement = document.querySelector(".products")


 function fetchdata(){
    fetch('https://fakestoreapi.com/products')
    .then((data)=>{
        return data.json()
    })
     .then((response)=>{
        renderingproduct(response)
     })
 }


function renderingproduct(products){
    products.forEach(product=>{
        // console.log(product)

        let productdiv = document.createElement("div")
        let imageElement = document.createElement("img")
        let contentElement = document.createElement("div")
        let titleElement = document.createElement("h5")
        let priceElement = document.createElement("h2")
        let ratingElement = document.createElement("p")

        productdiv.classList.add("product")
        imageElement.setAttribute("src", product.image)
        productdiv.appendChild(imageElement)
        titleElement.textContent = product.title.length < 25 ? product.title : product.title.substring(0,25)
        
        contentElement.appendChild(titleElement)
        priceElement.textContent = `$${product.price}`
        
        contentElement.appendChild(priceElement)
        ratingElement.textContent = `${product.rating.rate}★`
        ratingElement.classList.add("raiting")
        
        contentElement.appendChild(ratingElement)
        productdiv.appendChild(contentElement)
        productsElement.appendChild(productdiv)
    })
}


btn.addEventListener("click",fetchdata)