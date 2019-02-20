<template>
  <div class = 'home'>
    <input type="text" v-model.trim="user">
    <button @click="encrypts">加密</button>
    <p>加密:{{ encrpt }}</p>
    <button @click="depass">解密</button>
    <p>解密:{{ decrpt }}</p>
  </div>
</template>
<script>
 // 加解密测试
import aes from "@/plugins/aes.js";
export default {
  data() {
    return {
      user: "",
      encrpt: "",
      decrpt: "",
      salt: "as48sa4fas84df9a4f894saf94sa89",
      iv: "7979s7ad9fsd8f4s9af84499849s4f98a4f98"
    };
  },
  methods: {
    // 加解密测试
    encrypts() {
      this.encrpt = aes.encrypt(this.salt, this.iv, "中电国康", this.user);
    },
    depass() {
      this.decrpt = aes.decrypt(this.salt, this.iv, "中电国康", this.encrpt);
      console.log(this.decrpt);
    }
  }
};
</script>
<style lang="less" scoped>
.home{
  p{
    color:red;
  }
}
</style>
