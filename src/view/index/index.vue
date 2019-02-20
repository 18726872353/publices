<template>
    <div style='home'>
        <router-view />
    </div>
</template>
<script>
export default {
    mounted (){
        // let encryptData = this.publicJS.encrypts('中电国康','赵虎')
        // console.log(encryptData)
        // console.log(this.publicJS.decrypts('中电国康',encryptData));
    }
}
</script>
<style scope>
    .home{
        width:800px;
        height:600px;
        background: #f2f2f2;
    }
</style>
