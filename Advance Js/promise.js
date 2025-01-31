const myPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Hii This is my Promise");
        resolve()
    }, 2000)
})
myPromise.then(function(){
    console.log("Promise is resolved");
    
})