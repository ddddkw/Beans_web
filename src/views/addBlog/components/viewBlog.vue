<template>
  <div class="view_container">
    <el-icon :size="20" @click="reBack"><Back/></el-icon>
    <MdPreview :editorId="id" :modelValue="viewBlog.content" />
  </div>
</template>
<script lang="ts" setup>
import { MdPreview } from 'md-editor-v3';
import { ref } from 'vue'

let viewBlog = ref({content:'111'})
const id = 'preview-only';
const emit = defineEmits(['reBack'])
const reBack=()=>{
  emit('reBack');
}
</script>
<style lang="scss" scoped>
@import "viewBlog.css";
</style>
