// 替代for
arr.forEach();

/** 以下方法都一定要配合 return 一起使用 **/

// 整理数据:ajax返回的数据， 可以很方便操作你想要的展示数据
// arr.map();
let arrs = [
  {title:'标题1'， content:'内容一'},
  {title:'标题2'， content:'内容二'},
  {title:'标题3'， content:'内容三'}
]
let newArr = arrs.map((item, index, arr)=>{
  let newData = {}
  newData.t = item.title;
  newData.c = item.content;
  return newData
})




// 其中有一个是return; 结果就是true
arr.some();
// 所有都return true; 结果才是true
arr.every();


