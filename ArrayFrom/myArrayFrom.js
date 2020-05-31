// function fn(){
//   let args = Array.from(arguments);
//   console.log(args);  //[1,2,3] 是一个真实的数组
//   console.log(Object.prototype.toString.call(args))  //[object Array]
// }

//fn(1,2,3);


Array.myFrom = (function(){
  var toStr = Object.prototype.toString;
  var isCallable = function(fn){
    return typeof fn == 'function' && toStr.call(fn) == '[object Function]'
  }

 
  return function(arrayLike){
    var items = Object(arrayLike);
    if(arrayLike == null){
      console.error("Array.from requires an array-like object - not null or undefined");
    }
  
    var mapFn = arguments.length>1 ? arguments[1] : void 0;
    var T = null;
    if(typeof mapFn != 'undefined'){
      if(!isCallable(mapFn)){
        console.error('Array.from: when provided, the second argument must be a function')
      }

      if(arguments.length>2){
        T = arguments[2];
      }
    }
    var len = items.length;

    var A = new Array(len);
    var k=0;
    while(k < len){
      kValue = items[k];
      if(mapFn){
        A[k] = typeof T != 'undefined' ? mapFn(kValue,k) : mapFn.call(T, kValue, k);;
      }else{
        A[k] = kValue
      }
      k++;
      
    }
    A.length = len;
    return A;
  
  }

})()


function fn(){
    let args = Array.myFrom(arguments);
    console.log(args);  //[1,2,3] 是一个真实的数组
    console.log(Object.prototype.toString.call(args))  //[object Array]
}

fn(1,2,3)

