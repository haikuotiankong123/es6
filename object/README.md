


# 解构赋值

> 注意，解构赋值的拷贝是浅拷贝，既如果一个键的值是复合类型的值（数组、对象、函数）


> 1、对象扩展运算符

# 对象扩展的运算符
```javascript
let {x, y, ...z} = {x:1, y:2, x:3, b:4}
```

## 扩展运算符（只能复制目标对象自身属性）
> 注意扩展运算符只能复制 等号右边对象的自身的属性（复制不到继承的属性）
```javascript
let obj1 = {a: 1};
let obj2 = {b: 2};
obj2.__proto__ = obj1;
let {...obj3} = obj2;
obj3 // {b:2}
obj3.a // undefined
```
## 扩展运算符写法
> 1、扩展运算符写法：三点后面必须跟着一个变量名
###错误演示
```javascript
let {x, ...{y, z}} = {x:1, y:2, z:3}    
// SyntaxError: ... must be followed by an identifier in declaration contexts
```
> 2、必须写在最后面（才能获取余数）
###错误演示
```javascript
let {...x, y} = {x:1, y:2, z:3} // 语句错误
```


