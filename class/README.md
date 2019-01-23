# 类Class
ES 6才新增类class,写法跟java和C#的很靠拢。class只是语法糖而已实际上大部分功能跟es5的差不多。
```javascript
class Point{
  constructor(x, y){
    this.x = x;
    this.y =y;
  }
  toString(){
    return this.x;
  }
}

// 等同
function Point(x, y){
  this.x = x;
  this.y = y;
}
Point.prototype={
  toString(){
    return this.x
  }
}

```
