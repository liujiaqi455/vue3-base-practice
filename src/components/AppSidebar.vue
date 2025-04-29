<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import { ConstantRoutes } from '@/router'

const route = useRoute()

const isActiveRoute = function (currentPath: string) {
  return route.matched.some((child) => child.path === currentPath)
}

const isShowIconHome = ref(false)
</script>
<template>
  <aside class="sidebar">
    <div class="sidebar-home">
      <div>
        <div class="home-trigger">
          <router-link
            to="/"
            class="home-trigger-link"
            @mouseenter="isShowIconHome = true"
            @mouseleave="isShowIconHome = false"
          >
            <div class="home-icon-group">
              <SvgIcon
                name="icon-coding"
                class="icon__coding"
                :class="{ hidden: isShowIconHome }"
                :size="24"
              />
              <SvgIcon name="icon-home" class="icon__home" :class="{ hidden: !isShowIconHome }" />
            </div>
          </router-link>
          <div class="home-tag">
            <span>标准版</span>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar-menus">
      <div class="sidebar-menus-inner">
        <router-link
          v-for="child in ConstantRoutes"
          :key="child.name"
          :to="child.path"
          :class="{ active: isActiveRoute(child.path) }"
          class="menu-item"
        >
          <SvgIcon :name="child.meta?.icon" />
          <span>{{ child.meta?.title }}</span>
        </router-link>
      </div>
    </div>
    <div class="sidebar-more">
      <div>
        <router-link to="/" class="menu-item">
          <SvgIcon name="icon-grid" />
        </router-link>
        <router-link to="/" class="menu-item">
          <SvgIcon name="icon-tongzhi1" />
        </router-link>
        <router-link to="/" class="menu-item">
          <SvgIcon name="icon-shezhi" />
        </router-link>
        <router-link to="/" class="menu-item">
          <SvgIcon name="icon-question" />
        </router-link>
        <div class="user-info-avatar">
          <img src="@/assets/images/demo.png" alt="" />
        </div>
      </div>
    </div>
  </aside>
</template>
<style lang="scss" scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 64px;
  height: 100%;
  background-color: $element-common-bg;
  border-right: 1px solid $element-border-deep-color;
  overflow: hidden auto;
  scrollbar-width: none;
  z-index: 1030;
  &-home {
    display: flex;
    justify-content: center;
    padding: 16px 0;
    height: 64px;
    .home-trigger {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
      margin-bottom: -8px;
      overflow: hidden;
      cursor: pointer;
      &-link {
        border: 0.5px solid $element-hover-bg;
        border-radius: 8px;
        overflow: hidden;
        color: #333;
        &:active {
          color: #333; /* 或指定具体颜色 */
        }
      }
    }
    .home-icon-group {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 32px;
      height: 32px;
      background-color: #fff;
      .icon__coding,
      .icon__home {
        position: absolute;
      }
    }
    .home-tag {
      position: relative;
      bottom: 8px;
      span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 18px;
        padding: 0 4px;
        background: $element-active-bg;
        border-radius: 3px;
        font-size: 10px;
        color: $link-deep-color;
      }
    }
  }
  .menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 52px;
    height: 56px;
    margin-bottom: 4px;
    border-radius: 3px;
    color: #666;
    &:hover {
      background: $element-hover-bg;
    }
    &.active {
      color: $link-active-color;
      background: $element-active-bg;
    }
  }
  &-menus {
    flex: 1 1;
    display: flex;
    flex-direction: column;
    overflow: hidden auto;
    scrollbar-width: none;
    &-inner {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 2px 0;
      font-size: 12px;
    }
  }
  &-more {
    display: flex;
    align-items: center;
    justify-content: center;
    .menu-item {
      width: 48px;
      height: 36px;
    }
    .user-info-avatar {
      display: flex;
      align-items: center;
      width: 48px;
      height: 36px;
      padding: 6px 12px;
      margin: 4px 0 8px;
      border-radius: 3px;
      cursor: pointer;
      &:hover {
        background: $element-hover-bg;
      }
      img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
    }
  }
}
</style>
