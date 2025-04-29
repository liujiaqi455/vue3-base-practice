<script setup lang="ts">
import { reactive, ref } from 'vue'

const delay = ref(500)

const searchWord = ref('')

type Executed = {
  word: string
  timestamp: string
}
const executedList: Executed[] = reactive([])

function handleSearch() {
  executedList.push({
    word: searchWord.value,
    timestamp: new Date().toLocaleTimeString(),
  })
}
</script>
<template>
  <div>
    <el-input
      type="text"
      v-debounce:[delay]="handleSearch"
      v-model="searchWord"
      style="width: 300px"
    />
  </div>
  <el-timeline class="timeline">
    <el-timeline-item
      v-for="({ word, timestamp }, index) in executedList"
      :key="index"
      :timestamp="timestamp"
    >
      {{ word }}
    </el-timeline-item>
  </el-timeline>
</template>

<style lang="scss" scoped>
.timeline {
  max-width: 600px;
  margin-top: 30px;
}
</style>
