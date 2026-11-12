//this = current context
const user = {
    username:"rohan21",
    logincount:8,
    singin:true,
    getdetailes:function(){
        //console.log(this.username);
        console.log(this);  // yaha ka this hai user ki values
        
        
    }
}
console.log(user.getdetailes());
console.log(this);

 

// constructer function
function  userji(username,logincount,islogin){
    this.username=username;
    this.logincount=logincount;
    this.islogin=islogin;
 return this // if you dont did this not a big isue 
}
//  const ac=   userji("aayush",12,true)
//  const cc=   userji("ritki",13,true)
//console.log(ac); // ab ac print kraogi fir vi cc ka value aye because ye overwirte kr deta


// new 
const ac=  new userji("aayush",12,true)
 const cc=  new  userji("ritki",13,true)
 console.log(cc);
 console.log(ac);
 




