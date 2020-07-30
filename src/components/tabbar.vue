<template>
  <div id="tabbar">
    <div class="tabbar-list" v-for="(item,i) in tabbrlist" :key="i" @click="goto(i)">
      <img :src="item.icon" v-if="number==i" />
      <img v-else :src="item.activeicon" />
      <p @click="number=i" :class="number==i?'active':''">{{item.text}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "tableBar",
  props: {
    // showPopup: {
    //   type: Function,
    //   required: true
    // },
    number: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      nuber: 2,
      tabbrlist: [
        {
          icon: require("../assets/icon/home.png"),
          activeicon: require("../assets/icon/home1.png"),
          text: "首页"
        },
        {
          icon: require("../assets/icon/shopicon1-1.png"),
          activeicon: require("../assets/icon/shopicon1-2.png"),
          text: "积分商场"
        },
        {
          icon: require("../assets/icon/myicon1-1.png"),
          activeicon: require("../assets/icon/myicon.png"),
          text: "我的"
        }
      ]
    };
  },
  methods: {
    goto(index) {
      switch (index) {
        case 0:
          this.$router.push("/");
          break;
        case 1:
          this.$router.push("/Store");
          break;
        case 2:
          this.$router.push("/About");
          break;
      }
    }
  }
};
</script>

<style scoped>
#tabbar {
  width: 100%;
  height: 100px;
  border-top: 1px solid #f5f5f5;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
  z-index: 9999;
}
.tabbar-list {
  flex: 1;
  line-height: 100px;
  font-size: 20px;
  position: relative;
}
.tabbar-list img {
  width: 40px;
  height: 40px;
}
.tabbar-list img {
  position: absolute;
  top: 10px;
  left: 50%;
  margin-left: -20px;
  z-index: -1;
}
.tabbar-list p {
  text-align: center;
  line-height: 160px;
}
.active {
  color: #2c62ee;
}
</style>
