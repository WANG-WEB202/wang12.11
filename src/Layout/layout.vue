<template>
  <div class="layout">
      <header>
          <van-nav-bar
  title="消息"
  left-text="返回"
  right-text="+"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
      </header>
      <main>
          <router-view />
      </main>
      <footer>
          <van-tabbar route>
  <van-tabbar-item replace to="/home" icon="home-o">
  </van-tabbar-item>
  <van-tabbar-item replace to="/person" icon="search">
  </van-tabbar-item>
  <van-tabbar-item replace to="/my" icon="home-o">
  </van-tabbar-item>
</van-tabbar>
      </footer>
  </div>
</template>

<script>
export default {
    methods: {
    onClickLeft() {
    },
    onClickRight() {
    },
  },
}
</script>

<style>
.layout{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
main{
    flex: 1;
    overflow-y: auto;
}
</style>