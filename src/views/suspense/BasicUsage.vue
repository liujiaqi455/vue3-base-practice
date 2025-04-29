<template>
  <div class="wrapper">
    <div class="inner">
      <div class="title">
        异步依赖类型：async setup<el-button @click="count++">测试</el-button>{{ count }}--{{
          countA
        }}
      </div>
      <Suspense
        :timeout="0"
        @pending="handleSuspensePending"
        @resolve="handleSuspenseResolve"
        @fallback="handleSuspenseFallback"
      >
        <template #default>
          <GoodsList />
        </template>
        <template #fallback>
          <el-skeleton :rows="5" animated />
        </template>
      </Suspense>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {
  onBeforeUpdate,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onUpdated,
  ref,
} from 'vue'
import GoodsList from './components/GoodsList.vue'

function handleSuspensePending() {
  console.log('On suspense pending...')
}

function handleSuspenseResolve() {
  console.log('On suspense resolve...')
}
function handleSuspenseFallback() {
  console.log('On suspense fallback...')
}
const count = ref(0)
const countA = ref(0)
onRenderTracked((event) => {
  console.log('onRenderTracked', event)
})
onRenderTriggered((event) => {
  console.log('onRenderTriggered', event)
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})
onUpdated(() => {
  console.log('onUpdated')
})

onErrorCaptured((e) => {
  console.log('捕获错误：', e)
})
</script>
<style lang="scss" scoped>
.wrapper {
  height: 100%;
  overflow: hidden auto;
  .inner {
    width: 100%;
    padding: 20px;
    line-height: 24px;
    .title {
      margin-bottom: 20px;
      font-size: 18px;
    }
  }
}
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
