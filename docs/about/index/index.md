---
sidebar: false
lastUpdated: true

lang: zh-CN
title: 学习路线
description: 页面的描述
---

<div class="module">
  <h4>前端三剑客</h4>
  <div class="item_wrap">
    <RouterLink class="RouterLink" to="/doc/basics/html/html/">html</RouterLink>
    <RouterLink class="RouterLink" to="/doc/basics/css/css/">css</RouterLink>
    <RouterLink class="RouterLink" to="/doc/js/">js</RouterLink>
  </div>
</div>

<div class="module">
  <h4>必备知识</h4>
  <div class="item_wrap">
    <RouterLink class="RouterLink" to="/doc/jquery/">jquery</RouterLink>
    <RouterLink class="RouterLink" to="/doc/node/">node</RouterLink>
  </div>
</div>

<div class="module">
  <h4>前端框架</h4>
  <div class="item_wrap">
    <RouterLink class="RouterLink" to="/doc/vue2/">vue2</RouterLink>
    <RouterLink class="RouterLink" to="/doc/vue3/">vue3</RouterLink>
    <RouterLink class="RouterLink" to="/doc/react/">react</RouterLink>
  </div>
</div>

<div class="new_module">
  <h4>进阶之路</h4>
  <div class="item_wrap">
    <RouterLink class="RouterLink" to="/doc/weixin/">微信小程序</RouterLink>
    <RouterLink class="RouterLink" to="/doc/git/">git</RouterLink>
    <RouterLink class="RouterLink" to="/doc/uniapp/">uniapp</RouterLink>
    <RouterLink class="RouterLink" to="/doc/typescript/">typescript</RouterLink>
    <RouterLink class="RouterLink" to="/doc/webpack/">webpack</RouterLink>
    <RouterLink class="RouterLink" to="/doc/vite/">vite</RouterLink>
    <RouterLink class="RouterLink" to="/doc/git/">git</RouterLink>
    <RouterLink class="RouterLink" to="/doc/weixin/">微信小程序</RouterLink>
    <RouterLink class="RouterLink" to="/doc/webpack/">webpack</RouterLink>
    <RouterLink class="RouterLink" to="/doc/uniapp/">uniapp</RouterLink>
    <RouterLink class="RouterLink" to="/doc/vite/">vite</RouterLink>
    <RouterLink class="RouterLink" to="/doc/typescript/">typescript</RouterLink>
  </div>
</div>



<style lang="scss" scoped>
  .module{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 10px 100px 20px 100px;
    margin: 10px;
    border: 1px solid #e4e7ed;
    border-radius: 5px;
    background-color: var(--c-bg);
    transition: .3s;
    &:hover{
      overflow: hidden;
      transition: .3s;
      box-shadow: 0px 0px 20px var(--index-bg);
    }

    h4{
      text-align: center;
    }
    .item_wrap{
      min-width: 150px;
      display: flex;
      flex-direction: column;
      font-size: 20px;
      text-align: center;

      .RouterLink{
        display: block;
        margin-top:10px;
        text-align: center;
      }
    }
  }

  .new_module{
    padding: 10px 0 20px;
    margin: 10px;
    border: 1px solid #e4e7ed;
    border-radius: 5px;
    background-color: var(--c-bg);
    transition: .3s;
    &:hover{
      overflow: hidden;
      transition: .3s;
      box-shadow: 0px 0px 20px var(--index-bg);
    }

    h4{
      padding: 20px 0;
      margin: 0 100px;
      text-align: left;
    }
    .item_wrap{
      padding: 0 50px;
      display: flex;
      flex-wrap:wrap;
      font-size: 20px;
      justify-content: space-around;

      .RouterLink{
        padding:0 15px;
        display: block;
        margin-top:10px;
      }
    }
  }
</style>