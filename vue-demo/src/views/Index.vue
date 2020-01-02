<template>
  <div>
    <div v-for="(item,index) in getData" :key="index">
        <div class="left">
            <img :src="item.dataimg" alt="">  
        </div>
        <div class="center">
                 <p>{{item.datatitle}}</p>
                 <p>{{item.dataname}}</p>
        </div>
        <div class="right">
        17:00
        </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from "vuex"

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      getData: state => state.getData
    })
  },
  methods: {
    ...mapActions({
      getList: "getList"
    })
  },
  created() {
    this.getList();
  }
};
</script>

<style lang="scss" scoped>
</style>