<template>
  <div>
    <el-checkbox v-model="checked1" label="Option 1"></el-checkbox>
    <el-checkbox v-model="checked2" label="Option 2"></el-checkbox>
  </div>
  <div>
    <el-checkbox
        v-model="checked3"
        label="Option 1"
        size="medium"
    ></el-checkbox>
    <el-checkbox
        v-model="checked4"
        label="Option 2"
        size="medium"
    ></el-checkbox>
  </div>
  <div>
    <el-checkbox v-model="checked5" label="Option 1" size="small"></el-checkbox>
    <el-checkbox v-model="checked6" label="Option 2" size="small"></el-checkbox>
  </div>
  <div>
    <el-checkbox v-model="checked7" label="Option 1" size="mini"></el-checkbox>
    <el-checkbox v-model="checked8" label="Option 2" size="mini"></el-checkbox>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      checked1: ref(true),
      checked2: ref(false),
      checked3: ref(false),
      checked4: ref(false),
      checked5: ref(false),
      checked6: ref(false),
      checked7: ref(false),
      checked8: ref(false),
    }
  },
})
</script>