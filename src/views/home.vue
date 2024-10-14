<template>
  <div class="body">
    <div class="stars" ref="starsRef">
      <div class="star" v-for="(item, index) in starsCount" :key="index"></div>
    </div>
    <div class="home_remark">
      {{currentText}}
    </div>
    <div class="entry_class">
      <el-button>进入blog...</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {ref, onMounted,onUpdated,onUnmounted} from 'vue'

let remarkList = ref(['茶一碗，酒一樽，熙熙攘攘一闲人','鹏北海，凤朝阳，又携书剑路茫茫'])
let starsRef = ref(null); // 定义一个响应式的变量
const intervalId = ref<number | null>(null); // 明确类型为 number | null
let currentText = ref('')
const currentIndex = ref(0);
const currentItem = ref<string | null>(null);

const starsCount = 800; //星星数量
const distance = 900; //间距

onMounted(() => {
  startLoop()
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
const nextItem = () => {
  currentItem.value = remarkList.value[currentIndex.value];
  currentIndex.value = (currentIndex.value + 1) % remarkList.value.length;
  startTyping(currentItem.value)
};
const startLoop = ()=>{
  nextItem()
  const intervalLoop = setInterval(nextItem, 3000); // 每 2 秒切换到下一个项目
  onUnmounted(() => {
    clearInterval(intervalLoop);
  });
}
const startTyping = (val) => {
  let index = 0;
  if(intervalId.value) {
    clearInterval(intervalId.value);
  } else {
    intervalId.value = setInterval(() => {
      if (index < val.length) {
        currentText.value += val.charAt(index);
        index++;
      } else {
        clearInterval(intervalId.value);
      }
    }, 200); // 每 200 毫秒显示一个字
  }

};
</script>
<style lang="scss" scoped>
@import "./home";
</style>
