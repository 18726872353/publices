<template>
  <div id="gverify">
    <canvas id="verifyCanvas" style="cursor: pointer;"></canvas>
  </div>
</template>
<script>
// import GVerify from '@/plugins/gVerify.js'
require("@/plugins/gVerify.js");
import Vue from "vue";
export default {
  data() {
    return {};
  },
  mounted() {
    let code = new GVerify("gverify");
    console.log(code);
    console.log(code.options.code)
  }
};
</script>
<style>
#gverify {
  width: 300px;
  height: 200px;
}
</style>