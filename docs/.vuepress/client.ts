import { defineClientConfig } from '@vuepress/client'
import CustomLayout from './customLayout.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('CustomLayout', CustomLayout)
  },
})