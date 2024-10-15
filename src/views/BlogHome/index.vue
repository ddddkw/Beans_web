<template>
  <div class="container">
    <div class="blog_container">
      blog_home
    </div>
    <Footer ref="footerRef"/>
  </div>
</template>
<script lang="ts" setup>
import Footer from '../../components/footer.vue'
import {ref} from "vue";
const footerRef = ref(null);

</script>
<style lang="scss">
@import "index.css";
</style>
