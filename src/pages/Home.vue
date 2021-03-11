<!--
 * @Author: your name
 * @Date: 2021-03-10 21:59:34
 * @LastEditTime: 2021-03-11 15:06:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun-study/vue-app/src/pages/Home.vue
-->
<template>
  <div>
    Home
    <button @click="goToReactApp">react app</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToReactApp() {
      history.pushState({}, "", "/reactApp");
    },
  },
};
</script>

<style></style>
