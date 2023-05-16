function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback (e) 
    })
}

addGlobalEventListener('click', ".arrow-right", e => {
    // clicked = e.target
    // console.log(clicked)
    container = document.querySelectorAll(".containerofcard")
    console.log(container)
    container.forEach(card => {
       // console.log(card)
       style = window.getComputedStyle(card)
       // console.log(style)
       currentleft = parseInt(style.left);
       console.log("current"  + currentleft)
       card.style.left = (currentleft + 100) + "px";
       console.log("new" + card.style.left)
       card.style.transition = ' 0.3s 0.2s';
   });
    });

addGlobalEventListener('click', ".arrow-left", e => {
    // clicked = e.target
    // console.log(clicked)
    container = document.querySelectorAll(".containerofcard")
    console.log(container)
    container.forEach(card => {
        // console.log(card)
        style = window.getComputedStyle(card)
        // console.log(style)
        currentleft = parseInt(style.left);
        console.log("current"  + currentleft)
        card.style.left = (currentleft - 100) + "px";
        console.log("new" + card.style.left)
        card.style.transition = ' 0.3s 0.2s';
    });

})

// arrows = document.querySelectorAll('.arrow')

// arrows.forEach(arrow => {
//     arrow.addEventListener('click',() => {
//         console.log("clicked")
//     })
// })

// document.addEventListener('click', e => {
// console.log(e.target)
// })

                // <div class=" col-6 col-md-4 col-lg-2">
                //     <div class="last-sec card border-5" >
                //         <img class="card-img-top" src="https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&w=1000&q=80" class="card-img-top" alt="...">
                //         <div class="card-body p-2">
                //             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                //         </div>
                //     </div>
                // </div>



let item = {
    image:'https://images.unsplash.com/photo-1615789591457-74a63395c990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9tZXN0aWMlMjBjYXR8ZW58MHx8MHx8&w=1000&q=80'
    ,description:"Some quick example text to build on the card title and make up the bulk of the card's content."
}

function createcard (item) {
let parent = document.createElement('div')
parent.classList.add('col-6','col-md-4','col-lg-2')

let child1 = document.createElement('div')
child1.classList.add('last-sec', 'card', 'border-5')

let imagex = document.createElement('img')
imagex.classList.add('card-img-top')
imagex.src = item.image
imagex.alt = "image for card"

let child2 = document.createElement('div')
child2.classList.add('ard-body', 'p-2')

let para = document.createElement('p')
para.classList.add("card-text")
para.innerText = item.description

parent.appendChild(child1)

child1.appendChild(imagex)
child1.appendChild(child2)

child2.appendChild(para)


let lastcontainer = document.querySelector('.containerlast')

lastcontainer.appendChild(parent)

}

for (let i = 0; i < 6; i++) {
    createcard(item)
  }


