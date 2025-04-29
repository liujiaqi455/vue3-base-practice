import { produce, type Draft } from 'immer'
import { ref, computed, shallowRef, type ShallowRef } from 'vue'

export function useImmer<T>(baseState: T) {
  const state = shallowRef(baseState)

  const initialState = baseState

  // 快照历史
  let snapshots: T[] = [initialState]

  const currentIndex = ref(0)

  const maxStackSize = 100

  const isUndoAvailable = computed(() => currentIndex.value > 0)

  const undo = () => {
    if (!isUndoAvailable.value) return
    currentIndex.value--
    snapshots.pop()
    state.value = snapshots[currentIndex.value]
  }

  const redo = () => {
    snapshots = [initialState]
    currentIndex.value = 0
    state.value = snapshots[currentIndex.value]
  }

  const updateState = (updater: (draft: Draft<T>) => void) => {
    const newState = produce<T>(state.value, updater)

    if (currentIndex.value >= maxStackSize) {
      snapshots.shift()
    } else {
      currentIndex.value++
    }
    snapshots.push(newState)

    state.value = newState
  }

  return { state: state as ShallowRef<T>, updateState, undo, isUndoAvailable, redo }
}
