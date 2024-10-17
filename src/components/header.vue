<template>
  <div class="header_container">
    <img class="back_icon" src="../assets/back.png" @click="toHome"/>
    <img class="github_icon" src="../assets/github.png" @click="toGithub"/>
    <img class="tool_icon" src="../assets/beans_tool.png" @click="toTools"/>
  </div>
</template>
<script setup>
import router from "@/router";

const toGithub=function (){
  location.href = 'https://github.com/ddddkw/Beans_web/'
}
const toTools = function () {
  router.push('/tools_web')
}
const toHome = function (){
  router.push('/')
}
</script>
<style lang="scss" scoped>
.header_container {
  height: 60px;
  line-height: 60px;
  width: 100%;
  position: fixed;
  top: 0px;
  background: transparent;
}
.back_icon {
  position: absolute;
  top: 13px;
  right: 130px;
  height: 30px;
  width: 30px;
  cursor: pointer;
}
.github_icon {
  position: absolute;
  top: 13px;
  right: 30px;
  height: 30px;
  width: 30px;
  cursor: pointer;
}
.tool_icon {
  position: absolute;
  top: 13px;
  right: 80px;
  height: 30px;
  width: 30px;
  cursor: pointer;
}
</style>
