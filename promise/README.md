# Promise

> Promise是异步编程的一种解决方案
> 所谓的Promise对象，简单的说其实是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果

## 基本用法 
> ES6 Promise对象是一个构造函数，用来生成Promise实例
```javascript
const promise = new Promise(function(resolve, reject){
  // ... some code
  if(/* 异步操作成功 */){
    resolve(value)
  } else{
    reject(error)
  }
})
```


## Promise新建后就会立即执行
```javascript
const promise = new Promise(function(resolve, reject){
  resolve('完成');
  console.log('Promise')
});
promise.then(res => {
  console.log(res)
});
console.log('hello worder')
// Promise
// hello worder
// 完成
```
> 以上代码中，Promise新建后立即执行，先输出的是‘Promise’，then方法指定回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolve最后输出


## 异步执行例子
```javascript
function timeout(ms){
  return new Promise(function(resolve, reject){
    setTimeout(resolve, ms, '已完成')
  })
}
timeout(1000).then(res=>{
  console.log(res)
})
```


## 异步加载图片的例子
```javascript
function loadImageAsync(url){
  return new Promise(function(resolve, reject){
    const image = new Image();
    image.onload = function(){
      resolve(image)
    }
    image.onerror = function(){
      reject(new Error('Could not load image at ' + url));
    }
    image.src = url
  }); 
}
```
上面的代码，使用了Promise包装了一个图片加载的异步操作，如果加载成功，就调用resolve,否则就调用reject方法


## Promise实现jax操作的例子

```javascript
const getJSON = function(url) {
  const promise = new Promise(function(resolve, reject){
    const handler = function() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    const client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});
```
>上面代码中，getJSON是对 XMLHttpRequest 对象的封装，用于发出一个针对 JSON 数据的 HTTP 请求，并且返回一个Promise对象。需要注意的是，在getJSON内部，resolve函数和reject函数调用时，都带有参数。



