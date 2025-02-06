//  promise object represent an eventual completion or failure of an async operation and its resulting value


// A promise have 3  states 

// 1 : pending => nor complete nor fullfilled
// 2 : Fulfilled => operation success complete
// 3 : reject => failure of a request

// A promise is an object 

const Promise1  = new Promise(function(resolve , reject){

    setTimeout(function(){
      //  console.log("promise 1 is complete");
        resolve({user:"Atif khan" , age:"31"})
    } ,2000)
})

Promise1.then(function(accept){
         const{user} = accept
       //  console.log(user);
  //  console.log("your promise is complete");
})


// using condition that if not error then resolve other wise reject

new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false
       !error?resolve({name:"Atif khan" , age:"20"}):reject({rej:"Something went wrong"})
    },2000)
}).then(function(user){
    const{name} = user
    console.log(name);
}).catch(function(err){
    console.log(err.rej);
}).finally(()=>{
    console.log("finally resolve or rejected");
})