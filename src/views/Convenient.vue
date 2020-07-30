<template>
  <div>
    <MyHeader :title="'便民服务'" />
    <img class="banner" src="../assets/image/banner.png" alt />
    <div @click="go(item.url)" v-for="(item , index) in list" :key="index">
      <div class="contentall">
        <img class="imgage" src="../assets/image/Convenient/bm1.png" alt />
        <div>
          <div v-if="item.content" class="have">
            <span>{{item.title}}</span>
            <span>{{item.content}}</span>
          </div>
          <div v-if="!item.content" class="notHave">{{item.title}}</div>
          <div>
            <img src="../assets/image/arrow.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyHeader from "../components/public/MyHeader";
export default {
  name: "Convenient",
  components: {
    MyHeader
  },
  data() {
    return {
      list: [
        {
          img: "../assets/image/Convenient/bm1.png",
          title: "家电维修",
          content: "家用电器上门维修服务，解决搬运难题",
          url: "/ConvenientDetail"
        },
        {
          img: "../assets/image/Convenient/bm2.png",
          title: "社保查询"
        },
        {
          img: "../assets/image/Convenient/bm3.png",
          title: "社区食堂"
        },
        {
          img: "../assets/image/Convenient/bm4.png",
          title: "家政服务",
          content: "家政上门服务，随叫随到，帮你轻松解决家务"
        },
        {
          img: "../assets/image/Convenient/bm5.png",
          title: "学生托管"
        },
        {
          img: "../assets/image/Convenient/bm6.png",
          title: "商家服务",
          content: "送货上门服务，随叫随到，足不出户购物"
        }
      ]
    };
  },
  methods: {
    go(url) {
      this.$router.push(url);
    }
  }
};
</script>
<style  scoped>
.contentall {
  display: flex;
  padding: 34px 30px;
  box-sizing: border-box;
}
.contentall > div {
  width: 100%;

  display: flex;
  justify-content: space-between;
}
.banner {
  width: 100%;
  margin-top: 44px;
}
.contentall img {
  margin-top: 10px;
}
.notHave {
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: normal;
  margin-left: 26px;
  color: #444444;
  font-size: 28px;
  line-height: 72px;
}
.have {
  display: flex;
  flex-direction: column;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: normal;
  margin-left: 26px;
}
.have span:first-child {
  color: #444444;
  font-size: 28px;
}
.have span:last-child {
  color: #8a8a8a;
  font-size: 24px;
}
.imgage {
  width: 56px;
  height: 56px;
}
.contentall div img {
  margin-top: 20px;
  width: 14px;
  height: 24px;
}
</style>