<template>
  <div class="bg-white p-3 px-5 flex justify-between items-center">
    <div class="flex items-center">
      <div class="flex items-center mr-2" @click="menuService.toggleState">

        <!-- <i class="fas fa-align-left mr-2 text-gray-600 cursor-pointer" v-if="menuService.close.value" ></i>
        <i class="fas fa-align-right mr-2 text-gray-600 cursor-pointer" v-else ></i> -->
        <icon-indent-left theme="outline" size="20" fill="#5470C6" class="mr-2 text-gray-600 cursor-pointer" v-if="menuService.close.value" />
        <icon-indent-right theme="outline" size="20" fill="#5470C6" class="mr-2 text-gray-600 cursor-pointer" v-else/>
      </div>
      <Breadcrumb class="hidden md:block" />
    </div>
    <div class="relative flex justify-between items-center cursor-pointer">
      <Notification class="mr-8" />
      <!-- <i class="fas fa-border-none mr-5 cursor-pointer" @click="fullScreen"></i> -->
      <icon-full-screen-one
        v-if="!isFullscreen"
        theme="outline"
        size="22"
        fill="#333"
        class="mr-5 cursor-pointer"
        @click="fullScreen"
      />
      <icon-off-screen-one
        v-else="isFullscreen"
        theme="outline"
        size="22"
        fill="#333"
        class="mr-5 cursor-pointer"
        @click="fullScreen"
      />
      <div class="group relative">
        <div class="flex justify-center items-center">
          <img
            :src="user.info?.avatar"
            alt=""
            class="h-8 w-8 rounded-full object-cover"
          />
          <span class="text-sm text-gray-600 ml-2">{{ user?.info?.name }}</span>
        </div>
        <section
          class="group-hover:block absolute right-0 top-full z-50 bg-white shadow-sm px-3 whitespace-nowrap border rounded-md hidden"
        >
          <div class="flex items-center cursor-pointer border-b py-3">
            <!-- <a class="fas fa-folder"></a> -->
            <icon-log theme="outline" size="18" fill="#333" />
            <span class="text-xs text-gray-600 ml-2">文档资料</span>
          </div>
          <div class="flex items-center cursor-pointer border-b py-3">
            <icon-home theme="outline" size="18" fill="#333" />
            <span class="text-xs text-gray-600 ml-2">网站首页</span>
          </div>
          <div
            class="flex items-center cursor-pointer border-b py-3"
            @click="utils.user.logout()"
          >
            <icon-logout theme="outline" size="18" fill="#333" />
            <span class="text-xs text-gray-600 ml-2">退出登陆</span>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import userStore from '@/store/userStore'
import utils from '@/utils'
import menuService from '@/composables/menu'
import Notification from '@/components/notification.vue'
import Breadcrumb from '@/components/breadcrumb.vue'
const user = userStore()
const isFullscreen = ref<boolean>(false)
const fullScreen = () => {
  isFullscreen.value
    ? document.exitFullscreen()
    : document.documentElement.requestFullscreen()
  isFullscreen.value = !isFullscreen.value
}
</script>

<style scoped></style>
