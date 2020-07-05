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

Function.prototype.myApply = function(context,...args){
  context.fn = this;
  context.fn(args);
  delete context.fn;
}
//obj.getName.myCall(obj1,'haibushi',16);

