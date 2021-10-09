<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-button type="primary">Primary</el-button>
    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Documentation
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <button type="button" @click="count++">count is: {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
    <el-button type="primary" @click="toOther">To About</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/routes'
import { hello } from '@/apis/user'
import { userStore } from '@/stores/user'

defineProps({
  msg: String
})
const user = userStore()
console.log(user.getCounter)
user.plusOne()
console.log(user.getCounter)
const count = ref(0)

function toOther() {
  hello()
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })
  router.push('/about')
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
