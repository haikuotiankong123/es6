/*
  箭头函数作用:
      1、this指向是所在的地方的对象，并非所运行时的对象
      2、没有arguments了,用三个点代替
      3、不能当构造函数使用
*/ 
let obj = {
  data: 12,
  fn:function{
    setTiemout(()=>{
      return this.data
    },1000)
  }
}
obj.fn()    // 12   不用老是重新去定义 let _this = this


let show = ()=>{
  alert(anguments)
}
show(1, 3, 4)   // 报错


let show2 = (...p) => {
  console.log(p)
}
show2(15, 61, 7)    // [15, 61, 7]  方便使用如 数组排序


let show3 = (a, b, ...c) => {
  console.log(c)      // [5, 34, 344, 34]  方便获取参数余数
}
show3(43, 22, 5, 34, 344, 34,)


