<template>
  <div class="view_container">
    <el-icon class="reBack" :size="20" @click="reBack"><Back/></el-icon>
    <div class="blog_title">{{viewItem.title}}</div>
    <div class="view_body">
      <MdPreview :editorId="id" :modelValue="viewItem.content" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { MdPreview, MdCatalog  } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';
import { ref } from 'vue'
import { defineProps } from 'vue';

const props = defineProps({
  viewItem: {
    type: Object,
    default: {}
  },
});
const id = 'preview-only';
const emit = defineEmits(['reBack'])
const reBack=()=>{
  emit('reBack');
}
</script>
<style lang="scss" scoped>
@import "viewBlog.css";
</style>
