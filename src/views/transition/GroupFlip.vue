<template>
  <div class="action">
    <button @click="insertRandomItem">随机添加一个数字</button>
    <button @click="removeRandomItem" :disabled="list.length === 0">随机删除一个数字</button>
    <button @click="shuffle">打乱数组</button>
    <button @click="reset">还原数组</button>
  </div>
  <TransitionGroup name="fade" tag="ul" class="container">
    <li v-for="num in list" :key="num" class="item">
      {{ num }}
      <button @click="removeItem(num)">x</button>
    </li>
  </TransitionGroup>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { shuffle as _shuffle } from 'lodash-es'

const getInitialList = () => [1, 2, 3, 4, 5, 6]
const list = ref(getInitialList())

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
  const newIndex = list.value.length === 0 ? 0 : getRandomInt(0, list.value.length - 1)
  const newValue = (getMaxItem(list.value) || 0) + 1
  list.value.splice(newIndex, 0, newValue)
}

/**
 * 删除随机位置的元素
 */
function removeRandomItem() {
  if (list.value.length === 0) return
  const index = getRandomInt(0, list.value.length - 1)
  list.value.splice(index, 1)
}

/**
 * 打乱数组顺序
 */
function shuffle() {
  list.value = _shuffle(list.value)
}

/**
 * 还原数组
 */
function reset() {
  list.value = getInitialList()
}

/**
 * 删除数组中的元素
 * @param item 数组元素
 */
function removeItem(item: number) {
  const i = list.value.indexOf(item)
  if (i > -1) {
    list.value.splice(i, 1)
  }
}
</script>
<style lang="scss" scoped>
.action {
  margin-bottom: 20px;
  button:not(:first-child) {
    margin-left: 10px;
  }
}

.container {
  position: relative;
  list-style: none;
  .item {
    margin: 4px 0;
    padding: 2px 6px;
    border: 1px solid #f0f0f0;
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease;
}
.fade-leave-active {
  position: absolute;
}
</style>
