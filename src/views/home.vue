<template>
  <div class="body">
    <div class="stars" ref="starsRef">
      <div class="star" v-for="(item, index) in starsCount" :key="index"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref, onMounted,onUpdated,onUnmounted} from 'vue'
let starsRef = ref(null); // 定义一个响应式的变量

const starsCount = 800; //星星数量
const distance = 900; //间距

onMounted(() => {
  let starNodes = Array.from(starsRef.value.children); // 将其子元素转化为一个数组
  starNodes.forEach((item) => {
    let speed = 0.2 + Math.random() * 1;
    let thisDistance = distance + Math.random() * 300;
    item.style.transformOrigin = `0 0 ${thisDistance}px`;
    item.style.transform = `
        translate3d(0,0,-${thisDistance}px)
        rotateY(${Math.random() * 360}deg)
        rotateX(${Math.random() * -50}deg)
        scale(${speed},${speed})`;
  });
});
// 在响应式状态变化后且更新DOM树后调用
onUpdated(()=>{

})
// 卸载之后调用
onUnmounted(()=>{

})
</script>
<style lang="scss" scoped>
@import "./home";
</style>
