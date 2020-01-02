import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    getData:[]//总数据
  },
  mutations: {
    getData(state,actions){
      state.getData=actions
    }
  },
  actions: {
    getList({commit}){
      Axios.get("/api/List").then(({data})=>{
          console.log(data)
          commit("getData",data.list)
      })
    }
  },
  modules: {
  }
})
