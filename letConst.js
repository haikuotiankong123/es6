// let与var有什么区别
// 1、let没有了预编译，没有了变量提升，必须定义后再使用，不然会报错
{
  let a = 5;
  function b(){
    console.log(a);   // 报错
    let a = 12; 
  }
  function c(){
    let a = 12;
    console.log(a)    // 12
  }
  function d(){
    console.log(a)    // 5
  }
}

// 2、在同个块级作用域不能多次定义（只能定义一次），只能重新赋值
{
  let a = 5;
  let a =12;
  console.log(a);   // 报错
  
  let b = 5;
      b = 12;
  console.log(b)    // 12
}

// 3、for循环，for循环括号里是属于父级作用域，花括号是子级作用域
{
  for(let i = 0; i<3; i++)  // 父级作用域
  {                         // 子级作用域
    let i = "abc";
    console.log(i)    // “abc”
  }
}

// 4、const与let特性一样，不一样的地方是：const 不能改变值 而且 定义后一定要赋值，一般在值不变情况下使用，如 引入模块jQ,webapck插件...
{
  const a = 5;
        a = 12;
        console.log(a)      // 报错
}
{
  const a;
        a =5;
        console.log(a)      // 报错
}


