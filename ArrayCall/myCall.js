let obj = {
  name:'zhangsan',
  age:22,
  getName(name,age){
    console.log(name);
    console.log(age);
    console.log(this.name);
  }
}

let obj1 = {
  name:'lisi',
  age:18,
  getName(name,age){
    console.log(name);
    console.log(age);
    console.log(this.name);
  }
}
//obj.getName.call(obj1);

Function.prototype.myCall = function(context,...args){
  context.fn = this;
  context.fn(...args);
  delete context.fn;
}
//obj.getName.myCall(obj1,'haibushi',16);


function fn(...args){
  console.log(args);
  fn1(...args);
}
function fn1(a1,a2,a3){
  console.log(a1,a2,a3);
}

fn1([1,2,3])