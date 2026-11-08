//PROMISES = opretions jo bad me complete hote hai(future me complete hote hai )
    // const promiseone = new Promise(function(resolve,reject){
    //     // do an async task
    //     // db calls 
    //     setTimeout(function(){
    //         console.log('Async task is complete')
    //         resolve()
    //     },1000 ) // 1000 = 1 second iska mtlb hai itni der me async task complete hoga
    // })
    // promiseone.then(function(){
    //     console.log('promise consumed');
        
    // })

//     const promisetwo = new Promise(function(resolve,reject){
//         setTimeout(function(){
//       resolve({username:"aayush",email:"aalu12@gmail.com"})
//     },1000)
// })
// promisetwo.then(function(user){
//     console.log(user);
    

// })

// const promisethree =  new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if (!error){
//             resolve({username:"aayush",phone:"123456789"})
//         }
//         else{
//             reject('Error: something went wrong')
//         }
        
// },1000)
// })
// promisethree.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
    
// }).catch(function(error){
//     console.log(error );
// })

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){

        let error = false
        if (!error){
            resolve({username:"aayush",phone:"123456789"})
        }
        else{
            reject('Error: something went wrong')
        }
        
},1000)

});

async function name() {

    const response = await promisefour
    console.log(response)
}
name()

async function pop(){
    try{
        const response = await promisefour
          console.log(response)
    } catch (error){
        console.log(error);
        
    }
    
}
pop()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
})



