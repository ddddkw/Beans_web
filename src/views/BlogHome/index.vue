<template xmlns="http://www.w3.org/1999/html">
  <div class="container">
    <Header />
    <img ref="movingElement" class="desk_pet" src="../../assets/Squirrel.gif">
    <div v-if="!isViewBlog" class="blog_container">
      <div class="container_left">
        <div class="blog_item">
          <div class="blog_left" v-for="(item,index) in BlogsList" :key="index">
            <div class="article_title">{{item.title}}</div>
            <div class="article_time">
              <el-icon><Calendar/></el-icon>&nbsp;<span>{{item.createTime}}</span>
            </div>
            <div class="article_content">
              简介：{{item.summary}}
            </div>
            <div class="article_bottom" @click="readMore(item)">阅读更多</div>
          </div>
        </div>
        <el-pagination class="pagination" layout="prev, pager, next" :total="50" />
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
          <div class="recommend_articles">推荐文章：</div>
          <div v-for="(item,index) in BlogsList" :key="index" class="relatedItems">
            {{item.title}}
          </div>
        </div>
        <div class="relatedTags">
          <el-tag class="tag_item" v-for="(item,index) in tagsList" :key="index" type="primary">{{item.tag}}</el-tag>
        </div>
      </div>
    </div>
    <div v-if="isViewBlog" class="blog_container">
      <viewBlog ref="viewBlogRef" @reBack="reBack" :viewItem="viewItem"/>
    </div>
    <Footer ref="footerRef"/>
  </div>
</template>
<script lang="ts" setup>
import Footer from '../../components/footer.vue'
import {ref, onMounted, onUnmounted, nextTick} from "vue";
import Header from '../../components/header.vue'
import viewBlog from '../addBlog/components/viewBlog.vue'
import { getCurrentInstance } from 'vue';
import {getTags} from "@/methods/blog";

const { proxy } = getCurrentInstance();

const footerRef = ref(null);
const viewBlogRef = ref(null);
let value = ref('')
let isViewBlog = ref(false)
let transformOptions =ref({x:0,y:0})
const movingElement = ref(null)
let timeoutId;
let BlogsList = ref([])
let viewItem = ref({})
let tagsList = ref([])
let queryForm = ref({
  "createTime": "",
  "pageIndex": 1,
  "pageSize": 10,
  "summary": "",
  "tagType": "",
  "title": "",
  "total": ''
})

onMounted(async ()=>{
  await nextTick()
  moveRandomly()
  getBlogsList()
  getTags().send(true).then(res=>{
    tagsList.value = res.data
  })
});
onUnmounted(()=>{
  clearTimeout(timeoutId);
})
const readMore = function (item:object) {
  viewItem.value = item
  isViewBlog.value=true
}

const reBack = function (){
  isViewBlog.value=false
}
const searchBlog = function () {

}
const getBlogsList = function (){
  proxy.$http.post('beans/Blogs/QueryList',queryForm.value).then((res)=>{
    BlogsList.value= res.data.records
    BlogsList.value.forEach(item=>{
      item.createTime = item.createTime.split('T')[0]
    })
  })
}
const moveTimeout = function (){
  timeoutId = setTimeout(()=>{
    moveRandomly()
  },500)
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
  if (Math.abs(transformOptions.value.x) > containerWidth) {
    transformOptions.value.x =0
  }
  if (Math.abs(transformOptions.value.y) > containerHeight) {
    transformOptions.value.y =0
  }
  // 更新元素的位置
  element.style.transform = `translate(${transformOptions.value.x}px, ${transformOptions.value.y}px)`;

  moveTimeout()
}
</script>
<style lang="scss">
@import "index.css";
</style>
