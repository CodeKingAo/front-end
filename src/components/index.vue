<template>
  <div>
    <header>
      <van-sticky>
        <van-nav-bar title="这里是主题呢" >
          <template #left>
            <van-icon name="arrow-left" size="18" />
          </template>
          <template #right>
            <van-icon name="search" size="18" />
          </template>
        </van-nav-bar>
      </van-sticky>
    </header>
    <section>
      <router-view />
    </section>
    <footer>
      <van-tabbar v-model="vanTabbar.active">
        <van-tabbar-item icon="home-o" @click="toTabbar()">标签1</van-tabbar-item>
        <van-tabbar-item icon="search" @click="toTabbar()">标签2</van-tabbar-item>
        <van-tabbar-item icon="friends-o" @click="toTabbar()">标签3</van-tabbar-item>
        <van-tabbar-item icon="setting-o" @click="toTabbar()">标签4</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vanTabbar: {
        active: 0,
        tabbars: [
          "/views/van-tabbar/tabbarOne",
          "/views/van-tabbar/tabbarTwo",
          "/views/van-tabbar/tabbarThree",
          "/views/van-tabbar/tabbarFour",
        ],
      },
    };
  },
  watch: {
    $route(to, from) {
      // 对路由变化作出响应...
    },
  },
  mounted() {},
  methods: {
    toTabbar() {
      this.$router.push({ path: this.vanTabbar.tabbars[this.vanTabbar.active] });
    },
  },
};
</script>
<style>
</style>