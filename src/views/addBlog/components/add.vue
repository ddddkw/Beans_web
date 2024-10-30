<template>
  <div>
    <el-card class="card_style">
      <div class="btn_header">
        <el-button theme="primary" @click="saveVlog">保存</el-button>
      </div>
      <el-form ref="form" class="form_style" layout="inline" label-width="auto">
        <el-form-item label="标题：" label-align="left" name="name">
          <el-input v-model="formData.title" style="width: 200px" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="标签：" label-align="left" name="name">
          <el-select
              v-model="tags"
              creatable
              filterable
              multiple
              placeholder="多选支持自定义创建"
              style="width: 200px"
              @create="createOptions"
          >
            <el-option v-for="item in options" :key="item.id" :value="item.id" :label="item.tag"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-form class="form_style" >
        <el-form-item label="摘要：" label-align="left" name="name">
          <el-input v-model="formData.summary" type="textarea"  :autosize="{ minRows: 3, maxRows: 4 }" placeholder="请输入摘要" />
        </el-form-item>
      </el-form>
      <div style="border: 1px solid #ccc;margin-top: 20px">
        <MdEditor style="overflow-y: hidden;" :customIcon="CustomIcon" v-model="content" :showToolbarName="true"/>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { MdEditor } from 'md-editor-v3';
import type { CustomIcon } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {onBeforeUnmount, ref, onMounted} from 'vue'
import {addBlog, getTags, addTags} from "@/methods/blog.ts";
let tags = ref([])
const options = ref([])
const content = ref('');

let formData=ref({
  "author": "",
  "content": "",
  "createTime": "",
  "id": "",
  "summary": "",
  "tagTypes": "",
  "title": "",
  "userId": ""
})

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
})

onMounted(()=>{
  getTags().send(true).then(res=>{
    options.value = res.data
  })
})

const setData=(val)=>{
  formData.value = val
  tags.value = val.tagTypes.split(',').map(String)
  content.value = val.content
}

const saveVlog=()=>{
  formData.value.content = content.value
  formData.value.tagTypes = tags.value.join(',')
  if(!formData.value.content||!formData.value.title||!formData.value.summary||!formData.value.tagTypes){
  }
  addBlog(formData.value).send(true).then(res=>{
  })
}

const createOptions = (val) => {
  options.value.push({
    label: `${val}`,
    value: val,
  });
  addTags({tag: val}).then(res=>{
    tags.value=[]
    getTags().send(true).then(res=>{
      options.value = res.data
    })
  })
};
defineExpose({setData})
</script>
<style lang="scss" scoped>
@import "add.css";
</style>
