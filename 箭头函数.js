/*
  箭头函数作用:
      1、this指向问题
        1) 在方法内：this是所在的地方的对象，并非所运行时的对象
        2) 当方法使用：this指向是window
      2、没有arguments了,用三个点代替
      3、不能当构造函数使用
*/ 

// 箭头函数在方法内使用：this指向所在的对象，并非所运行时的对象
let obj = {
  data: 12,
  fn:function{
    setTiemout(()=>{
      return this.data
    },1000)
  }
}
obj.fn()    // 12 好处：不用老是重新去定义 let _this = this


// 箭头函数当方式使用：this指向是window
let obj2 = {
    data:12,
    fn: () =>{
      console.log(this)
    }
}
obj2.fn()   // window


// 箭头函数是没有anguments的，用三个点来代替
let show = ()=>{
  alert(anguments)
}
show(1, 3, 4)   // 报错

let show2 = (...p) => {
  console.log(p)
}
show2(15, 61, 7)    // [15, 61, 7]  方便使用如 数组排序


// 三个点在函数参数使用，参数余数
let show3 = (a, b, ...c) => {
  console.log(c)      // [5, 34, 344, 34]  方便获取参数余数
}
show3(43, 22, 5, 34, 344, 34,)


