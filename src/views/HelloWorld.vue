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
    <button @click="toOther"></button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "@/routes";
import {hello} from "@/apis/user"

defineProps({
  msg: String,
});

const count = ref(0);

function toOther() {
  hello()
  .then(data =>{
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
  // router.push("/about");
}
</script>


<style scoped>
a {
  color: #42b983;
}
</style>
