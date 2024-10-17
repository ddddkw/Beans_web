<template>
  <div class="container">
    <Header />
    <div class="blog_container">
      <div  class="blog_item"></div>
    </div>
    <Footer ref="footerRef"/>
  </div>
</template>
<script lang="ts" setup>
import Footer from '../../components/footer.vue'
import {ref} from "vue";
import Header from '../../components/header.vue'
const footerRef = ref(null);

</script>
<style lang="scss">
@import "index.css";
</style>
