<template xmlns="http://www.w3.org/1999/html">
  <div class="container">
    <Header />
    <div class="blog_container">
      <div class="container_left">
        <div class="blog_left">
          <div class="article_title">测试文章标题</div>
          <div class="article_time">
            <el-icon><Calendar/></el-icon>&nbsp;<span>2024-10-17</span>
          </div>
          <div class="article_content">
            当你使用半透明背景颜色时，选择合适的文字颜色非常重要，以确保文本的可读性和视觉效果。对于背景颜色 background-color: rgba(255, 255, 255, 0.2);，即一个非常浅的半透明白色背景，建议使用深色的文字颜色，以确保对比度和可读性。
          </div>
          <div class="article_bottom">阅读更多</div>
        </div>
        <div class="blog_left">
          <div class="article_title">测试文章标题</div>
          <div class="article_time">
            <el-icon><Calendar/></el-icon>&nbsp;<span>2024-10-17</span>
          </div>
          <div class="article_content">
            当你使用半透明背景颜色时，选择合适的文字颜色非常重要，以确保文本的可读性和视觉效果。对于背景颜色 background-color: rgba(255, 255, 255, 0.2);，即一个非常浅的半透明白色背景，建议使用深色的文字颜色，以确保对比度和可读性。
          </div>
          <div class="article_bottom">阅读更多</div>
        </div>
        <div class="blog_left">
          <div class="article_title">测试文章标题</div>
          <div class="article_time">
            <el-icon><Calendar/></el-icon>&nbsp;<span>2024-10-17</span>
          </div>
          <div class="article_content">
            当你使用半透明背景颜色时，选择合适的文字颜色非常重要，以确保文本的可读性和视觉效果。对于背景颜色 background-color: rgba(255, 255, 255, 0.2);，即一个非常浅的半透明白色背景，建议使用深色的文字颜色，以确保对比度和可读性。
          </div>
          <div class="article_bottom">阅读更多</div>
        </div>
        <div class="blog_left">
          <div class="article_title">测试文章标题</div>
          <div class="article_time">
            <el-icon><Calendar/></el-icon>&nbsp;<span>2024-10-17</span>
          </div>
          <div class="article_content">
            当你使用半透明背景颜色时，选择合适的文字颜色非常重要，以确保文本的可读性和视觉效果。对于背景颜色 background-color: rgba(255, 255, 255, 0.2);，即一个非常浅的半透明白色背景，建议使用深色的文字颜色，以确保对比度和可读性。
          </div>
          <div class="article_bottom">阅读更多</div>
        </div>
        <div class="blog_left">
          <div class="article_title">测试文章标题</div>
          <div class="article_time">
            <el-icon><Calendar/></el-icon>&nbsp;<span>2024-10-17</span>
          </div>
          <div class="article_content">
            当你使用半透明背景颜色时，选择合适的文字颜色非常重要，以确保文本的可读性和视觉效果。对于背景颜色 background-color: rgba(255, 255, 255, 0.2);，即一个非常浅的半透明白色背景，建议使用深色的文字颜色，以确保对比度和可读性。
          </div>
          <div class="article_bottom">阅读更多</div>
        </div>
        <div class="blog_left">
          <div class="article_title">测试文章标题</div>
          <div class="article_time">
            <el-icon><Calendar/></el-icon>&nbsp;<span>2024-10-17</span>
          </div>
          <div class="article_content">
            当你使用半透明背景颜色时，选择合适的文字颜色非常重要，以确保文本的可读性和视觉效果。对于背景颜色 background-color: rgba(255, 255, 255, 0.2);，即一个非常浅的半透明白色背景，建议使用深色的文字颜色，以确保对比度和可读性。
          </div>
          <div class="article_bottom">阅读更多</div>
        </div>
        <div class="blog_left">
          <div class="article_title">测试文章标题</div>
          <div class="article_time">
            <el-icon><Calendar/></el-icon>&nbsp;<span>2024-10-17</span>
          </div>
          <div class="article_content">
            当你使用半透明背景颜色时，选择合适的文字颜色非常重要，以确保文本的可读性和视觉效果。对于背景颜色 background-color: rgba(255, 255, 255, 0.2);，即一个非常浅的半透明白色背景，建议使用深色的文字颜色，以确保对比度和可读性。
          </div>
          <div class="article_bottom">阅读更多</div>
        </div>
      </div>
      <div class="container_right">
        <div class="blog_search">
          <el-input
              v-model="searchValue"
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
      </div>
    </div>
    <Footer ref="footerRef"/>
  </div>
</template>
<script lang="ts" setup>
import Footer from '../../components/footer.vue'
import {ref} from "vue";
import Header from '../../components/header.vue'
const footerRef = ref(null);
let searchValue = ref('')

const searchBlog = function () {

}

</script>
<style lang="scss">
@import "index.css";
</style>
