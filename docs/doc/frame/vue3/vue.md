# 浅谈vue3

## vue双向绑定
::: tip v2
  **核心**
  - 对象: 通过 **defineProperty** 劫持对象已有的值的读取和修改
  - 数组: 通过重写数组更新数据一系列更新元素的方法实现元素修改的劫持

  **问题**
  - 对象直接添加新的属性或删除已有的属性,页面不会自动更新
  - 直接通过下标替换元素或改变length,页面不会自动更新 arr[1] = {}
:::

```js
  Object.defineProperty(data,'元素',{
    get(){},
    set(){}
  })
```

::: tip v3
  **核心**
  - 通过Proxy(代理): 拦截对data的任意(13种)操作,包括属性的读写,添加,删除等
  - 通过Reflect(反射): 动态对被代理对象的相应属性进行特定操作
  - 文档
  [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
  [通过Reflect](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
:::

```js
new Proxy(data, {
  get(self, target) { // 对象本身 get的属性
    console.log(self, target, 'get');
    return Reflect.get(self, target)
  },
  set(self, target, value) { // 对象本身 get的属性 修改的值
    console.log(self, target, value, 'set');
    return Reflect.set(self, target, value);
  }
})
```

## setUp

- 执行时机
	- 在 **beforeCreate** 之前执行(一次),此时组件还没有创建
	- this 是 undefined,不可以通过this访问实例

- 返回值
	- 一般都会淡会一个对象: 为模板提供数据
	- 返回的对象属性会于=与data函数返回的对象属性合并成为组件对象
	- 返回的方法会与methods中的方法合并为组件方法
	- 若有重复 setup 中的优先
	- 注意:

- 参数
	- setup(props,context) / setup(props,{attrs,slots,emit})
	- props: 包含props配置声明,且传入了所有属性的对象,不能解构,结构后失去响应式
	- attrs: 包含不在props配置中声明的属性对象,相当于 this.$attrs
	- slots: 包含所有传入插槽内容的对象,相当于 this.$slots
	- emit: 用来分发自定义事件的函数, 相当于this.$emit

::: warning 提示
  - 一般不要混合使用: methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods
  - setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据
:::

## reactive 与 ref

::: tip
  **用来生成响应式数据的Api**

  **ref的本质还是通过reactive创建的响应式数据**
:::


- **ref** 用来处理基本数据类型,**reactive** 用来处理对象(递归深度响应时式)
- ref的数据操作: 在js中要.value, 在模板中不需要(内部解析模板时会自动添加.value)

## watchEffect(vue3)

- 与 watch 有什么不同？

	- 第一点我们可以从示例代码中看到 watchEffect 不需要指定监听的属性，他会自动的收集依赖， 只要我们回调中引用到了 响应式的属性， 那么当这些属性变更的时候，这个回调都会执行，而 watch 只能监听指定的属性而做出变更(v3开始可以同时指定多个)。
	- 第二点就是 watch 可以获取到新值与旧值（更新前的值），而 watchEffect 是拿不到的。
	- 第三点是 watchEffect 如果存在的话，在组件初始化的时候就会执行一次用以收集依赖（与computed同理），而后收集到的依赖发生变化，这个回调才会再次执行，而 watch 不需要，因为他一开始就指定了依赖。

- 停止监听

	- watchEffect 会返回一个用于停止这个监听的函数
	- 如果 watchEffect 是在 setup 或者 生命周期里面注册的话，在组件取消挂载的时候会自动的停止掉

  ```js
  const stop = watchEffect(() => {
    /* ... */
  })
  
  // later
  stop()
  ```

- side effect

  > **什么是 side effect ,不可预知的接口请求就是一个 side effect**

	- 假设我们现在用一个用户ID去查询用户的详情信息，然后我们监听了这个用户ID， 当用户ID 改变的时候我们就会去发起一次请求，这很简单，用watch 就可以做到。 但是如果在请求数据的过程中，我们的用户ID发生了多次变化，那么我们就会发起多次请求，而最后一次返回的数据将会覆盖掉我们之前返回的所有用户详情。这不仅会导致资源浪费，还无法保证 watch 回调执行的顺序。而使用 watchEffect 我们就可以做到
	- onInvalidate(fn)传入的回调会在 watchEffect 重新运行或者 watchEffect 停止的时候执行


  ```js
  watchEffect(() => {
    // 异步api调用，返回一个操作对象
    const apiCall = someAsyncMethod(props.userID)

    onInvalidate(() => {
      // 取消异步api的调用。
      apiCall.cancel()
    })
  })
  ```

## 生命周期

<div style="display:flex;">
  <h1 style="text-align: left;flex:1">v2</h1>
  <h1 style="text-align: center;flex:1">v3</h1>
</div>

<div style="display:flex;justify-content: space-between;height: 400px;overflow: hidden;">
  <img  src="/image/v2.png" alt="v2生命周期"/>
  <img  src="/image/v3.png" alt="v3生命周期"/>
</div>


| option Api      | components Api    |
| :-------------: | :---------------: |
| beforeCreate    | Not needed*       |
| created         | Not needed*       |
| beforeMount     | onBeforeMount     |
| mounted         | onMounted         |
| beforeUpdate    | onBeforeUpdate    |
| updated         | onBeforeMount     |
| beforeUnmount   | onBeforeUnmount   |
| unmounted       | onUnmounted       |
| errorCaptured   | onErrorCaptured   |
| renderTracked   | onRenderTracked   |
| renderTriggered | onRenderTriggered |
| activated       | onActivated       |
| deactivated     | onDeactivated     |



## toRefs

- 把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref

- 应用: 当从合成函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用

> 问题: reactive 对象解构所有属性值都是非响应式的(setup 的参数props解构同理)
> 解决: 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性

```js
  function useReatureX() {
    const state = reactive({
      foo2: "a",
      bar2: "b",
    });
    setTimeout(() => {
      state.foo2 += "++";
      state.bar2 += "++";
    }, 2000);
    return toRefs(state);
  }

  setup(){
    const {foo2, bar2} = useReatureX();
    return {foo2, bar2};
  }
```

## ref获取元素

**让输入框自动获取焦点**

```vue
<template>
  <h2>App</h2>
  <input type="text">---
  <input type="text" ref="inputRef">
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
/* 
ref获取元素: 利用ref函数获取组件中的标签元素
功能需求: 让输入框自动获取焦点
*/
export default {
  setup() {
    const inputRef = ref<HTMLElement|null>(null)

    onMounted(() => {
      inputRef.value && inputRef.value.focus()
    })

    return {
      inputRef
    }
  },
}
</script>
```

##  自定义hook函数

- 使用Vue3的组合API封装的可复用的功能函数
- 自定义hook的作用类似于vue2中的mixin技术
- 自定义Hook的优势: 很清楚复用功能代码的来源, 更清楚易懂

**收集用户鼠标点击的页面坐标**

```js
import { ref, onMounted, onUnmounted } from 'vue'
/* 
收集用户鼠标点击的页面坐标
*/
export default function useMousePosition () {
  // 初始化坐标数据
  const x = ref(-1)
  const y = ref(-1)

  // 用于收集点击事件坐标的函数
  const updatePosition = (e: MouseEvent) => {
    x.value = e.pageX
    y.value = e.pageY
  }

  // 挂载后绑定点击监听
  onMounted(() => {
    document.addEventListener('click', updatePosition)
  })

  // 卸载前解绑点击监听
  onUnmounted(() => {
    document.removeEventListener('click', updatePosition)
  })

  return {x, y}
}
```

## 新组件

#### Fragment(片段)

- v2: 组件必须有一个根标签
- v3: 组件可以没有根标签,vue内部会将多个标签包含在一个Fragment虚拟元素中
- 优点: 减少标签层级,减少内存占用

```vue
  <template>
    <div>aaaa</div>
    <div>bbbb</div>
  </template>
```

#### TelePort(瞬移)

- `TelePort` 是一种可以将vue模板移动到 `Dom` 中 `vue #app` 之外的技术
- 像`Toast`,`Modals` 等这样的元素,如果嵌套在组件内部,他的样式,定位,层级等会变的难以维护,可以使用 `Teleport` 将它与组件剥离,但是它的状态还是完全受组件控制

```html
<template>
  <!-- teleport 的 to 是index.html中要转移的跟元素唯一标识(id,class,tag) -->
  <teleport to="#teleport-text" v-if="show">
    <h1>Hello World !</h1>
  </teleport>
</template>
```

**teleport-button.vue**

```html
<template>
  <button @click="show = !show">open or close</button>

  <teleport to="#teleport-text" v-if="show">
    <h1>Hello World !</h1>
  </teleport>
</template>

<script setup lang="ts">
import { ref } from "vue";
let show = ref<boolean>(false);
</script>
```



