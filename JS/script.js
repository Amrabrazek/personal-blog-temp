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