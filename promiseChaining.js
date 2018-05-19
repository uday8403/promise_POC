function dosomething(){
    var number=Math.random();
    console.log(number);
    return new Promise(function(resolve,reject){
        if(number>.5){
            var newPromise=new Promise(function(resolve,reject){
              if(number>.6){
                  resolve("More than 0.6");
              }else{
                  reject("more than 0.5 but less than 0.6");
              }
          });
            resolve(newPromise);
        }else{
            reject("Failed");
        }
    });
}

const promise=dosomething();
promise.then(function(response){
    promise.then(function(res){
        console.log(res);
    },function(err){
        console.log(err);
    })
},function(error){
    console.log(error);
});