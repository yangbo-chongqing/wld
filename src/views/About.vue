<template>
  <div class="about">
    <!-- top -->
    <MyHeader :title="'我的'" />

    <div class="top">
      <div class="top_box">
        <div class="top_box_center">
          <div class="top_box_center_l">
            <div class="top_box_center_l_img">
              <img src="../assets/back/touxiang1.png" />
            </div>
            <div class="top_box_center_l_text">
              <p>李晓峰</p>
              <p>当前积分</p>
            </div>
          </div>
          <div class="top_box_center_r">
            <img src="../assets/icon/icon1/jiantou002.png" />
          </div>
        </div>
      </div>
    </div>
    <list :mylist="mylist" @getindex="getindex"></list>
    <list :mylist="mylist1" @getindex="getindex1"></list>
    <foo :number="2" />
  </div>
</template>
<style  scoped>
.about {
  width: 100%;
  box-sizing: border-box;
  min-width: 100%;
  background-color: #f5f5f5;
  margin-bottom: 3rem;
}
.top {
  width: 100%;
  margin-top: 88px;
  height: 336px;
  background-image: url(../assets/back/banck1111.png);
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}
.top_box {
  width: 100%;
  height: 200px;
  position: absolute;
  top: 50%;
  margin-top: -100px;
}
.top_box_center {
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
}
.top_box_center_l {
  flex: 4;
  display: flex;
  flex-direction: row;
}
.top_box_center_l_img {
  width: 160px;
  height: 160px;
  border: 2px solid #fff;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  background: #0000ee;
  margin-top: 20px;
  overflow: hidden;
}
.top_box_center_l_text {
  width: 50%;
  height: 100px;
  margin-top: 50px;
  position: relative;
  margin-left: 20px;
}
.top_box_center_l_text p:first-child {
  position: absolute;
  top: 0;
  font-size: 28px;
  color: #fff;
  font-weight: 600;
}
.top_box_center_l_text p:last-child {
  position: absolute;
  bottom: 0;
  color: #fff;
  font-size: 28px;
  font-weight: normal;
}
.top_box_center_l_img img {
  width: 100%;
  height: 100%;
}
.top_box_center_r {
  flex: 1;
  position: relative;
}
.top_box_center_r img {
  width: 26px;
  height: 40px;
  position: absolute;
  top: 50%;
  margin-top: -20px;
  right: 0;
}
</style>
<script>
import list from "../components/list.vue";
import foo from "../components/tabbar.vue";
import MyHeader from "../components/public/MyHeader";
export default {
  data() {
    return {
      mylist: [
        {
          icont: require("../assets/icon/icon1/icon0011.png"),
          text: "身份认证"
        },
        {
          icont: require("../assets/icon/icon1/icon0012.png"),
          text: "我的组织"
        },
        {
          icont: require("../assets/icon/icon1/icon0013.png"),
          text: "加入组织"
        }
      ],
      mylist1: [
        {
          icont: require("../assets/icon/icon1/icon0014.png"),
          text: "我的积分"
        },
        {
          icont: require("../assets/icon/icon1/icon0015.png"),
          text: "浏览历史"
        },
        {
          icont: require("../assets/icon/icon1/icon0016.png"),
          text: "信息审核"
        },
        {
          icont: require("../assets/icon/icon1/icon0017.png"),
          text: "账号设置"
        }
      ],
      indexs: 0,
      indexs1: 0
    };
  },
  components: {
    list,
    foo,
    MyHeader
  },
  methods: {
    getindex(index) {
      this.indexs = index;
      console.log(this.$data.indexs);
      var nuber = this.$data.indexs;
      switch (nuber) {
        case 1:
          this.$router.push("/joinorga");
          break;
      }
    },
    getindex1(index) {
      this.indexs1 = index;
      console.log(this.$data.indexs1);
    }
  }
};
</script>
