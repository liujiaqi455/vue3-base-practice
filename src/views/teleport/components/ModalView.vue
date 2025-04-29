<template>
  <Teleport to="body">
    <div ref="outer">
      <Transition name="fade-out">
        <div v-if="isShow" @click.self="isShow = !isShow" class="modal">
          <div class="modal-container" ref="container">
            <div class="modal-header">header</div>
            <div class="modal-body">body</div>
            <div class="modal-footer">footer</div>
            <button @click="isShow = !isShow" class="modal-btn-close">关闭</button>
          </div>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>
<script lang="ts" setup>
const isShow = defineModel({ type: Boolean, default: false })
</script>
<style lang="scss" scoped>
.modal {
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.5);
  z-index: 9998;
  transition: opacity 0.3s ease;
  &-container {
    position: relative;
    min-width: 600px;
    margin: auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: transform 0.3s ease;
  }
  &-btn {
    &-close {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
}

.fade-out-enter-from,
.fade-out-leave-to {
  opacity: 0;
}

.fade-out-enter-from .modal-container,
.fade-out-leave-to .modal-container {
  transform: scale(1.1);
}
</style>
