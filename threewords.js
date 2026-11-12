
//   function setUsername(username){
//     this.username=username
//   }

//   function createuser(username,mail,password){
//     setUsername(username)
//     this.mail=mail
//     this.password=password
//   }
//   let chai = new createuser("chai","aalu@gmail",234)
//   console.log(chai); // yaha pr username ki val ni ayegi cus username call ni hua actual me
 // output = createuser { mail: 'aalu@gmail', password: 234 }


// call
  function setUsername(username){
    this.username=username
  }
  function createuser(username,mail,password){
    setUsername.call(this,username)
    this.mail=mail
    this.password=password
  }
  let chai = new createuser("chai","aalu@gmail",234)
  console.log(chai) 
  // output =createuser { username: 'chai', mail: 'aalu@gmail', password: 234 }


  // bind
  

  