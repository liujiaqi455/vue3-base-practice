<template>
  <input type="text" v-model="query" />
  <TransitionGroup
    tag="ul"
    :css="false"
    @before-enter="onBeforeEnter"
    @enter="onEnter"
    @leave="onLeave"
  >
    <li v-for="(item, index) in filterList" :key="item?.msg" :data-index="index">{{ item.msg }}</li>
  </TransitionGroup>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { gsap } from 'gsap'

const query = ref('')

const list = [
  { msg: 'Bruce Lee' },
  { msg: 'Jackie Chan' },
  { msg: 'Chuck Norris' },
  { msg: 'Jet Li' },
  { msg: 'Kung Fury' },
]

const filterList = computed(() => {
  return list.filter((item) => item.msg.toLowerCase().includes(query.value))
})

function onBeforeEnter(el: Element) {
  const htmlEl = el as HTMLElement
  htmlEl.style.opacity = '0'
  htmlEl.style.height = '0px'
}

type WithDatasetElement = HTMLElement & { dataset: { index: number } }

function onEnter(el: Element, done: () => void) {
  const htmlEl = el as WithDatasetElement
  gsap.to(el, {
    opacity: 1,
    height: '1.6em',
    delay: htmlEl.dataset.index * 0.15,
    onComplete: done,
  })
}

function onLeave(el: Element, done: () => void) {
  const htmlEl = el as WithDatasetElement
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: htmlEl.dataset.index * 0.15,
    onComplete: done,
  })
}
</script>
<style lang="scss" scoped></style>
