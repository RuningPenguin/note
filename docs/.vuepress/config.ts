import { defineUserConfig } from 'vuepress';
import Nav from './nav';

export default defineUserConfig({
  base: "/note/", // 目录前缀
  lang: 'zh-CN', // 语言
  title: '企鹅的学习笔记', // 站点标题
  description: '企鹅的学习笔记', // 站点描述
  theme: Nav
})