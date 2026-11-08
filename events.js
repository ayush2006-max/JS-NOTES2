// function hand(){
    //  const element = document.getElementById('a1');
    //  element.textContent = 'kese ho aap sabhi'
    // }
const  element = document.getElementById('a1');
// element.onclick = function done(){
//     element.textContent = 'kese ho ji'
// }

// element.onclick = function done(){
//     element.textContent = 'i am the best' 
// } //this will overwrite the first one.


// the best way to add event listener 
element.addEventListener('dblclick',()=>{
    element.textContent = 'i am the raja' 

})

// element.addEventListener('click',()=>{
//     element.style.backgroundColor = 'red'

// })

element.addEventListener('mouseenter',()=>{
    element.style.color='blue'

})

element.addEventListener('mouseleave',()=>{
    element.style.color='white'

})

// const classElements = document.getElementById('id1');
// classElements.addEventListener('click',()=>{
//     classElements.textContent='i am clicked'
// })
// const parentElement = document.getElementById('parent');
// console.log(parentElement.children);
// for(let i of parentElement.children){
//     i.addEventListener('click',()=>{
//         i.textContent='i am clicked'            

//     })
// }

// bubbling me by defalut ye flase rhta but true krne pr ulte order me chlta
// const grandparent = document.getElementById('grandparent')
// grandparent.addEventListener('click',()=>{
//     console.log("grandparent is clicked");
    

// })

// const parent = document.getElementById('parent')
// parent.addEventListener('click',()=>{
//     console.log("parent is clicked");
    

// })

// const child = document.getElementById('child')
// child.addEventListener('click',()=>{
//     console.log("child is clicked");
    

// })
// ab output reverse hojyega
const grandparent = document.getElementById('grandparent')
grandparent.addEventListener('click',(e)=>{
   console.log(e.target); // konse element ne isko trigger kiya bta dega jispr cliick kroge
  //  console.log(e);
    
    //console.log("grandparent is clicked");
    

},true)

// const parent = document.getElementById('parent')
// parent.addEventListener('click',(e)=>{
//     console.log(e);
//    // e.stopPropagation(); ye bubling ko rokta h
//     console.log("parent is clicked");
    

// },true)

// const child = document.getElementById('child')
// child.addEventListener('click',(e)=>{
//     console.log(e);
//     console.log("child is clicked");
    

// },true)




