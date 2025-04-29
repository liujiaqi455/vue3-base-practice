import { type DirectiveBinding } from 'vue'

type DebouncedInputElement = HTMLInputElement & {
  _vDebounceTimer: ReturnType<typeof setTimeout> | undefined
  _vDebounceHandler: (() => void) | null
  _vDebounceDelay?: number
  _vDebounceCallback?: () => void
}

/**
 * 1. 保证value是函数
 * 2. 保证arg是大于零的整数
 * @param binding
 * @returns
 */
function parseOptions(binding: DirectiveBinding) {
  const { value: callback, arg } = binding
  if (typeof callback !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`v-debounce 需要传入函数，当前类型为 ${typeof callback}`)
    }
    return null
  }

  let delay = 300
  if (arg && /^\d+$/.test(arg)) {
    const parsedArg = parseInt(arg, 10)
    if (parsedArg > 0) {
      delay = parsedArg
    } else {
      console.warn(`v-debounce 参数 ${arg} 应为正整数，将使用默认值 300。`)
    }
  } else if (arg && process.env.NODE_ENV !== 'production') {
    console.warn(`v-debounce 参数 ${arg} 无效，将使用默认值 300。`)
  }

  return { callback, delay }
}

function createHandler(el: DebouncedInputElement, callback: () => void, delay: number) {
  return () => {
    clearTimeout(el._vDebounceTimer)
    el._vDebounceTimer = setTimeout(() => {
      try {
        callback()
      } catch (err) {
        console.error('防抖函数执行失败：' + err)
      }
    }, delay)
  }
}

export default {
  /**
   * 1. 校验数据
   * 2. 定义防抖函数，添加事件监听
   * 3. 保存防抖函数
   * @param el
   * @param binding
   * @returns
   */
  mounted(el: DebouncedInputElement, binding: DirectiveBinding) {
    const options = parseOptions(binding)
    if (!options) return

    const { callback, delay } = options
    const handler = createHandler(el, callback, delay)
    el.addEventListener('input', handler)

    el._vDebounceHandler = handler
    el._vDebounceDelay = delay
    el._vDebounceCallback = callback
  },
  /**
   * 自定义指令支持使用动态参数，比如：v-debounce:[delay]。当参数变化后要更新监听器函数。
   */
  updated(el: DebouncedInputElement, binding: DirectiveBinding) {
    const options = parseOptions(binding)
    if (!options) return

    const { callback, delay } = options
    if (el._vDebounceCallback === callback && el._vDebounceDelay === delay) {
      return
    }
    // 先清除旧的
    if (el._vDebounceHandler) {
      clearTimeout(el._vDebounceTimer)
      el.removeEventListener('input', el._vDebounceHandler)
      el._vDebounceHandler = null
    }

    const handler = createHandler(el, callback, delay)
    el.addEventListener('input', handler)

    el._vDebounceHandler = handler
    el._vDebounceDelay = delay
    el._vDebounceCallback = callback
  },
  /**
   * 1. 清理timer
   * 2. 移除事件监听
   * 3. 清理handler
   * @param el
   */
  beforeUnmount(el: DebouncedInputElement) {
    // console.log('组件卸载之前。。。')
    if (el._vDebounceHandler) {
      clearTimeout(el._vDebounceTimer)
      el.removeEventListener('input', el._vDebounceHandler)
      el._vDebounceHandler = null
    }

    delete el._vDebounceTimer
    delete el._vDebounceCallback
    delete el._vDebounceDelay
  },
}
