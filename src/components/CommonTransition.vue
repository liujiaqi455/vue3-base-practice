<template>
  <Transition :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
    <slot></slot>
  </Transition>
</template>
<script lang="ts" setup>
import { gsap } from 'gsap'

function onBeforeEnter(el: Element) {
  console.log('显示前。。。')
  gsap.set(el, { x: 30, y: 0, opacity: 1 })
}
function onEnter(el: Element, done: () => void) {
  console.log('已显示。。。')
  gsap.to(el, {
    x: 100,
    y: 0,
    opacity: 1,
    ease: 'elastic.out(1,0.3)',
    duration: 1,
    onComplete: done,
  })
}

function onLeave(el: Element, done: () => void) {
  console.log('离开后。。。')
  gsap.to(el, {
    x: 0,
    y: 0,
    opacity: 0,
    ease: 'strong.inOut(2.5, 1)',
    duration: 1,
    onComplete: done,
  })
}
</script>
