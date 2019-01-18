# Set数据格式

## 基本用法
> `Set` 本身是一个构造函数，所以要用`new`。`Set`类似数组的数据格式，但它里面的值是唯一的，不会有重复的
```javascript
let arr = [2, 3, 3, 2];
let set = new Set(arr);
set // 2, 3
```
上面代码，`set`参数可以是数组（或者是有iterator接口的对象）


## 实例的属性和方法
  Set结构的实例有以下属性：
      --`Set.prototype.constructor`:构造函数，默认就是Set函数
      --`Set.prototype.size`：返回`Set`实例的成员总数
  Set操作方法：
      --`add(value)`:添加某个值，返回Set结构本省。
      --`delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
      --`has(value)`：返回布尔值，判断Set是否存在某个值
      --`clear()`：清除所有成员，没有返回值
   Set遍历方法在下面

## 遍历操作
Set结构的实例有四个遍历方法，可以用于，可以用于遍历成员。
  --`keys()`：返回键名的遍历器
  --`values`：返回键值的遍历器
  --`entries`：返回键值对的遍历器
  --`forEach()`：使用回调函数遍历每个成员
```javascript
let set = new Set([2, 3, 9]);
set.forEach((key, val) => console.log(key + ':' + val));
// 2:2
// 3:3
// 9:9
```

## 遍历的应用
> 扩展运算符（`...`）内部是使用`for...of`循环，所以也可以用于Set数据结构
```javascript
let set = new Set(['red', 'bule', 'green']);
let arr = [...set];
arr // ['red', 'bule', 'green']
```
> 有了扩展运算符（`...`）就可以间接用到数组的方法了，如：`map`和`filter`
```javascript
let set1 = new Set([1, 2, 3]);
let set2 = new Set([...set1].map(item => item*2 ));
set2 // Set{2, 4, 6}
```
```javascript
let set1 = new Set([3, 1, 2, 4]);
let set2 = new Set([...set1].filter(item => item%2==0));
set2 // Set{2, 4}
```


## 用途：方便去重、交集、并集、差集

### 去重
```javascript
let arr = [2, 3, 4, 2, 3];
let srt = ['a', 'b', 'a', 'b'];
let set1 = new Set(arr);
let set2 = new Set(srt);
set1 // Set{2, 3, 4}
set2 // Set{'a', 'b'}
```
### 并集
```javascript
let arr1 = [1, 3, 2];
let arr2 = [4, 3, 5];
let arr3 = new Set([...arr1, ...arr2])
[...arr3] // [1, 3, 4, 5]
```

### 交集
```javascript
let set1 = new Set([1, 2, 3, 1]);
let set2 = new Set([4, 3, 2, 8]);
let arr = [...set1].filter(item => set1.has(item))
arr // [2, 3]
```

### 差集
```javascript
let set1 = new Set([1, 2, 3, 1]);
let set2 = new Set([4, 3, 2, 8]);
let arr = [...set1].filter(item => !set1.has(item))
arr // [1]
```







