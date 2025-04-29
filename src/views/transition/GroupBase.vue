<template>
  <div class="action">
    <button @click="insertRandomItem">随机添加一个数字</button>
    <button @click="removeRandomItem" :disabled="list.length === 0">随机删除一个数字</button>
  </div>
  <TransitionGroup name="fade" tag="ul">
    <li v-for="num in list" :key="num">{{ num }}</li>
  </TransitionGroup>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
const list = reactive<number[]>([1, 2, 3, 4, 5, 6])

/**
 * 在闭区间 [min, max] 内生成一个随机整数
 * @param min 最小值（必须）
 * @param max 最大值（必须）
 */
function getRandomInt(min: number = 0, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 获取数组中的最大值
 * @param arr 数组
 * @returns 最大值；若数组为空，返回 `undefined`。
 */
function getMaxItem(arr: number[]): number | undefined {
  if (arr.length === 0) return undefined
  return Math.max(...arr)
}

/**
 * 在随机位置插入比当前最大值大的新数字
 */
function insertRandomItem() {
  const newIndex = list.length === 0 ? 0 : getRandomInt(0, list.length - 1)
  const newValue = (getMaxItem(list) || 0) + 1
  list.splice(newIndex, 0, newValue)
}

/**
 * 删除随机位置的元素
 */
function removeRandomItem() {
  if (list.length === 0) return
  const index = getRandomInt(0, list.length - 1)
  list.splice(index, 1)
}
</script>
<style lang="scss" scoped>
.action {
  margin-bottom: 20px;
  button:first-child {
    margin-right: 10px;
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}
</style>
