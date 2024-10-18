<template xmlns="http://www.w3.org/1999/html">
  <div class="container">
    <Header />
    <img ref="movingElement" class="desk_pet" src="../../assets/Squirrel.gif">
    <div v-if="!isViewBlog" class="blog_container">
      <div class="container_left">
        <div class="blog_left">
          <div class="article_title">测试文章标题</div>
          <div class="article_time">
            <el-icon><Calendar/></el-icon>&nbsp;<span>2024-10-17</span>
          </div>
          <div class="article_content">
            当你使用半透明背景颜色时，选择合适的文字颜色非常重要，以确保文本的可读性和视觉效果。对于背景颜色 background-color: rgba(255, 255, 255, 0.2);，即一个非常浅的半透明白色背景，建议使用深色的文字颜色，以确保对比度和可读性。
          </div>
          <div class="article_bottom" @click="readMore()">阅读更多</div>
        </div>
      </div>
      <div class="container_right">
        <div class="blog_search">
          <el-input
              v-model="value"
              style="width: 100%"
              placeholder="Please Input"
              :suffix-icon="Search"
              @change="searchBlog"
          />
        </div>
        <div class="relatedBlogs">
          <div class="relatedItems">
            vue3新特性详解
          </div>
          <div class="relatedItems">
            vue3新特性详解
          </div>
          <div class="relatedItems">
            vue3新特性详解
          </div>
          <div class="relatedItems">
            vue3新特性详解
          </div>
        </div>
        <div class="relatedTags">
          1111
        </div>
      </div>
    </div>
    <viewBlog v-if="isViewBlog" ref="viewBlogRef" @reBack="reBack"/>
    <Footer ref="footerRef"/>
  </div>
</template>
<script lang="ts" setup>
import Footer from '../../components/footer.vue'
import {ref, onMounted, onUnmounted, nextTick} from "vue";
import Header from '../../components/header.vue'
import viewBlog from '../addBlog/components/viewBlog.vue'

const footerRef = ref(null);
const viewBlogRef = ref(null);
let value = ref('')
let isViewBlog = ref(false)
let transformOptions =ref({x:0,y:0})
const movingElement = ref(null)
let timeoutId;
onMounted(async ()=>{
  await nextTick()
  moveRandomly()
});
onUnmounted(()=>{
  clearTimeout(timeoutId);
})
const readMore = function (value:string) {
  isViewBlog.value=true
}

const reBack = function (){
  isViewBlog.value=false
}
const searchBlog = function () {

}
const moveTimeout = function (){
  timeoutId = setTimeout(()=>{
    moveRandomly()
  },2000)
}
const moveRandomly = function () {
  if (!movingElement.value) return;

  const element = movingElement.value;
  const container = element.parentElement;

  // 获取容器的宽度和高度
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  // 获取元素的宽度和高度
  const elementWidth = element.offsetWidth;
  const elementHeight = element.offsetHeight;


  const randomy = (Math.floor(Math.random() * 10) + 1)%2
  // 生成随机方向
  let dx = randomy?Math.floor(Math.random() * (100 - 50 + 1)) + 10:-(Math.floor(Math.random() * (100 - 50 + 1)) + 10); // -5 到 5 之间的随机数
  let dy = randomy?Math.floor(Math.random() * (100 - 50 + 1)) + 10:-(Math.floor(Math.random() * (100 - 50 + 1)) + 10); // -5 到 5 之间的随机数

  // 计算新的位置
  let newX = element.offsetLeft + dx;
  let newY = element.offsetTop + dy;

  if (newX < 0) newX = 0;
  if (newY < 0) newY = 0;

  // 确保元素不会移出容器
  if (newX + elementWidth > containerWidth) {
    // transformOptions.value.x=0
    dx = 0;
  }
  if (newY + elementHeight > containerHeight) {
    // transformOptions.value.y=0
    dy = 0;
  }

  transformOptions.value.x = transformOptions.value.x+dx
  transformOptions.value.y = transformOptions.value.y+dy
  // 更新元素的位置
  element.style.transform = `translate(${transformOptions.value.x}px, ${transformOptions.value.y}px)`;

  moveTimeout()
}
</script>
<style lang="scss">
@import "index.css";
</style>
