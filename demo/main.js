fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>renderProducts(json))
    




            
const renderProducts = (arr)=>{
    
    arr.forEach(product=>{
        let productCard = `
        <div class="col-12 col-md-6 col-lg-3">
        <div class="card">
          <img
            src=${product.image}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text"
              >${product.description.split(" ",10)+"..."}</p
            >
            <a href="#"  class="btn btn-outline-success d-block"
              >Add to cart ${product.price}</a
            >
            
          </div>
        </div>
      </div>
        `

        prodctsRow.innerHTML += productCard
    })
}

const myModal = new bootstrap.Modal(document.getElementById('x'), {})
myModal.show()