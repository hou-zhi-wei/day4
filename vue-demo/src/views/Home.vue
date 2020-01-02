<template>
  <div class="home">
    <header></header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <router-link to="/Home/Index">首页</router-link>
      <router-link to="/Home/Classify">分类</router-link>
      <router-link to="/Home/My">我的</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {

  }
};
</script>
<style lang="scss">
    .home{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    header{
      width: 100%;
      height: 50px;
      background: #eee;
    }
    main{
      flex: 1;
      overflow: hidden;
      overflow: auto;
    }
    footer{
      width: 100%;
      height: 50px;
      background: #eee;
      display: flex;
      a{
        width: 33.3%;
        text-align: center;
        line-height: 50px;
      }
    }
    a:hover{
      background: #f00;
    }
</style>
