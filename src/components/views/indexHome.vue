<template>
  <div>
    <!-- 轮播模块 -->
    <div>
      <van-swipe :autoplay="4000" indicator-color="white">
        <van-swipe-item v-for="(image, index) in swipeImg.images" :key="index">
          <van-image width="100%" height="10rem" fit="fill" lazy-load :src="image">
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 应用模块 -->
    <div>
      <van-list
        v-model="vanList.loading"
        :finished="vanList.finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in vanList.list" :key="item" :title="item" />
      </van-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vanList: {
        list: [],
        loading: false,
        finished: false,
      },
      swipeImg: {
        images: [
          "https://img.yzcdn.cn/vant/apple-1.jpg",
          "https://img.yzcdn.cn/vant/apple-2.jpg",
        ],
      },
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.vanList.list.push(this.vanList.list.length + 1);
        }

        // 加载状态结束
        this.vanList.loading = false;

        // 数据全部加载完成
        if (this.vanList.list.length >= 40) {
          this.vanList.finished = true;
        }
      }, 1000);
    },
  },
};
</script>
<style>
</style>