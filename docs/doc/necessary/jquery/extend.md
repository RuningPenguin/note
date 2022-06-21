
# 扩展

## jQuery的多库并存
- `window.jQuery=window.$=jQuery`
- 通过这句代码，向window上添加了两个变量
- 自己也可以封装一个库
- jQuery 和 $ 这两个名字谁都可以用
- 我们自己封装的库，也向外暴露 $ 和 jQuery
- 当两个库同时引入的时候
- 谁引入在后面，以谁为准
- 问题：没有办法两个一起用
- jQuery的封装中，可以让出控制权
- 只要在最后引入jQuery
- 执行一下让出 $ 和 jQuery变量名控制权的代码
- 你的 $ 和 jQuery就可以干别的了

## $.noConflict() 不矛盾冲突
- 这句代码一旦执行，那么 $ 就不再代表 jQuery了
- 你之前代表的是什么还是什么

## $.noConflict(true)
- 这句代码一旦执行，那么 $ 和 jQuery就都不再代表jQuery了
- let 变量 = $.noConflict(true)
- 这句代码执行，那么你定义的这个变量是什么
- 这个变量就来代表 jQuery

## jQuery的插件扩展机制
-  jQuery提供了一大堆的方法，但是怕不够用
- 给开放了一个借口，可以向 jQuery 里面扩展一些方法使用
### $.extend() 扩展给 jQuery 本身
- 接受一个参数，是个对象
- 对象里面写要扩展的方法
- 将来使用的时候是：$.xxx()

### $.fn.extend() 扩展给 jQuery 的元素集合
- 接受一个参数，是个对象
- 对象里面写要扩展的方法
- 将来使用的时候是：$(选择器).xxx()

## jQuery 实现深浅拷贝
- 对于一个负责数据类型的操作
  - 赋值
  - 浅拷贝
  - 深拷贝
- 赋值：
  - 相当于把一个数据的地址给到另一个地址
    - let a = b
- 浅拷贝：
  - 把一个对象里的每一个成员都复制一份放到新的对象里面
    - 两个对象分别是两个对象空间
    - 通过 for in 循环来实现的
  - 修改第一层的属性是不会改变的
  - 如果对象中的某一个成员是复杂数据类型的时候比如数组、对象，这就是第二层
    - 你浅拷贝完毕以后，你操作的这个数据类型的成员，依旧是在操作一个内容
    ```js
        for (let key in o1){
        //有多少成员执行几次
        //每次循环，key分别表示o1里的成员名称
        //然后把他每一个成员放进o3里
        o3[key] = o1[key]
        // o1 里面的 hobby 存储的是一个数组的地址
        // 赋值给 o3 里面的 hobby 存储的也是一个数组的地址
        // 这样赋值完毕以后, o1.hobby 和 o3.hobby 是存储的同一个地址
        }
    ```
- 深拷贝：
  - 把一个对象里面的每一个成员都复制一份到新的对象里面
    - 当对象里的某一个成员是复杂数据类型的时候
    - 继续循环遍历这个复杂类型
    - 在心的对象里面也创造一个复杂数据类型继续复制进去
  - 通过递归函数来实现深拷贝
    - 在函数内部判断，如果是一个对象或数组
    - 就再次调用函数递归这个复杂数据类型
    ```js
      //跟浅拷贝类似，只是多了循环复杂数据类型的步骤
      function deepCopy(oldO，newO){

        for (let key in oldO){
          //先判断一下是一个对象或者数组的话，要再循环一次
          if(oldO[key].constructor === Object){
          newO[key]={}
          deepCopy(oldO[key],newO[key])
          }else if(oldO[key].constructor === Array){
          newO[key]=[]
          deepCopy(oldO[key],newO[key])
          }else{
          //他既不是数组也不是对象，直接赋值
          newO[key] = oldO[key]
          }
        }
      }
      deepCopy(o1,o2);
    ```
- **jQuery实现深浅拷贝**
  - 语法：**$.extend()**
    - 只传递一个参数的时候，是扩展
    - 传递两个及以上参数的时候，是拷贝
  - **浅拷贝**
    - 语法：$.extend(新对象，旧对象1，旧对象2，...)
      - 把从第二个参数开始的所有对象里面的数据
      - 全部拷贝到第一参数对象里面
  - **深拷贝**
    - 语法：$.extend(true,新对象，旧对象1，旧对象2，...)
      - 把从第三个参数开始的所有对象里的数据
      - 全部拷贝到第二个参数里面
  - $.extend()进行拷贝的时候
    - 第一个参数不写，表示浅拷贝
    - 第一个参数写 true 表示深拷贝
    - 注意：**不能写 false**

## jQuery 表单验证插件
- jquery-validate
- 专门来作表单验证
- 下载插件: 直接百度搜索 jqueryvalidate 
- 使用：
  1. 导入文件
    -  需要一个 jquery.js
    -  需要一个 jquery.validate.js
    -  validate 必须要引入在 jQuery 以后
    -  因为他在向 jQuery 里面扩展一些内容
  2. 准备一个 html 结构
  3. 对 form 标签开启表单验证功能
    -  在 rules 里面进行你的规则书写
    ```js
      $('#login').validate({
        // 表示验证规则
        rules: {
        // 对有 name="username" 的 input 进行验证
        // 如果只写一个验证, 那么可以直接写字符串
        // 如果你要写多个验证规则, 那么就以对象的形式书写
        // 给 用户名 文本框添加了一个验证规则, 是必填
        username: 'required',

        // 对有 name="password" 的文本框进行验证
        // 对象的形式表示我要书写多条规则
        password: {
        required: true, // 必填
        minlength: 5, // 最少五个字符
        maxlength: 10 // 最多十个字符
        },

        // 对有 name="age" 的文本框进行验证
        age: {
        required: true,
        min: 18, // 表示最小值
        }
                },
                // 验证失败的提示文字
                messages: {
        // 和规则的书写语法是一样的
        username: '请填写正确的用户名! @-@',
        password: {
        required: '请填写正确的密码! ^_^',
        minlength: '你输入的还不够',
        maxlength: '你输入的太多了'
        },
        age: {
        min: '18 岁以下请在父母陪同下观看'
        }
                },
                // 当表单验证通过的时候
                // 你点击登录或者敲击回车的时候会触发的
                submitHandler (form) {
        // form 参数表示的就是这个 form 标签
        console.log(form)
        // 表单提交的事件处理函数
        console.log('我要提交表单了')
        // 发送 ajax 把用户名密码 提交到后端
                }
              })
    ```

## jQuery 入口函数
- ready()函数
- 用法: **$(window).ready(function () {})**
  - 类似于 window.onload = function () {}
  - 有一个简写形式
    - **$(function () {})**
- 区别：
  - window.onload:页面资源加载完毕
  - $(window).ready()：页面 dom 结构加载完成
- 入口函数绝对会比window.onload更快执行
- 总结$()：
  - 传递的参数是一个选择器的时候, 是获取元素
  - 传递的参数是一个 html 格式字符串的时候, 是创建节点
  - 传递的参数是一个 函数 的时候, 就是 jQuery 的 入口函数
