import Vue from "vue";
import Vuex from "vuex";

import getters from './getters/getters'
import mutations from './mutations/mutations'
import actions from './actions/actions'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    salt: 'as48sa4fas84df9a4f894saf94sa89',

    iv: '7979s7ad9fsd8f4s9af84499849s4f98a4f98',
    // 环境配置
    env: "test",
    // 版本
    version:""
  },
  getters,
  mutations,
  actions
});