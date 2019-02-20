import cookie from '@/plugins/cookie.js';
import aes from "@/plugins/aes.js";
import store from '@/store';
export let publicJS = {
    // params方式传值的跳转函数
    paramsNavgationTo(that, name, params) {
        that.$router.push({
            name,
            params
        });
    },
    // query方式传值的跳转函数
    queryNavgationTo(that, path, query) {
        that.$router.push({
            path,
            query
        });
    },
    demo() {
        console.log('测试一下')
    },
    // 加密
    encrypts(randId, data) {
        let iv = store.state.iv;
        let salt = store.state.salt
        return aes.encrypt(salt, iv, randId, data);
    },
    // 解密
    decrypts(randId, data) {
        let iv = store.state.iv;
        let salt = store.state.salt
        return aes.decrypt(salt, iv, randId, data);
    }
}