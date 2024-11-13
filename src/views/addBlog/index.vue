<template>
  <div class="edit_container">
    <div class="add_blog" @click="addBlog">
      {{isAddBlog?'返回':'新增'}}
    </div>
    <el-card v-if="!isAddBlog" class="blog_body">
      <el-page-header @back="goBack" content="">
      </el-page-header><br/>

      <div class="blog_Item" v-for="(item,index) in blogList" :key="index">
        <div>
          <span style="font-weight: bold">
            title：
          </span>
          {{item.title}}
        </div>
        <div>
          <el-button type="text">删除</el-button>
          <el-button type="text" @click="editBlog(item)">编辑</el-button>
        </div>
      </div>
      <el-pagination class="pagination" layout="prev, pager, next" :total="total" />
    </el-card>
    <el-card v-if="isAddBlog" class="blog_body">
      <add/>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { getBlogsList } from '../../methods/blog'
import {onMounted, ref} from "vue";
import router from "@/router";
import add from './components/add.vue'
let queryForm = ref({
  "createTime": "",
  "pageIndex": 1,
  "pageSize": 10,
  "summary": "",
  "tagType": "",
  "title": "",
  "total": ''
})
let blogList = ref([])
let isAddBlog = ref(false)
let total = ref(0)
onMounted(()=>{
  getBlogsList(queryForm.value).send(true).then(res=>{
    blogList.value = res.data.records
    total.value = res.data.total
  })
})
const goBack=function (){
  router.push('/blog')
}
const addBlog = function (){
  isAddBlog.value = !isAddBlog.value
}
const editBlog = function (item){

}
</script>
<style lang="scss" scoped>
.edit_container {
  height: 100vh;
  position: relative;
}
.blog_body {
  width: 70%;
  height: 100%;
  margin: 0 auto;
}
.blog_Item {
  height: 50px;
  line-height: 50px;
  cursor: pointer;
  border-bottom: 1px solid #b4a8a8;
  display: flex;
  justify-content: space-between;
}
.pagination {
  float: right;
  margin-top: 10px;
}
.add_blog {
  position: absolute;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 25px;
  top: 10px;
  right: 240px;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
.add_blog:hover {
  color: #69b6f8;
}
</style>
