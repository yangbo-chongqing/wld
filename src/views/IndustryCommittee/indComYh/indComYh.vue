<template>
  <div id="indcomyh">
    <MyHeader :title="'业委会'" />

    <!-- clos1 -->
    <div class="clos1">
      <!-- topbanner -->
      <div class="clos1_banner">
        <img :src="imgs" />
      </div>
    </div>
    <div class="clos2">
      <menu1 :list1="list1" @getData="getData"></menu1>
    </div>
    <titi :icon="icon" :tititext="tititexttow"></titi>
    <div>
      <swper></swper>
    </div>
    <!-- clos3 -->
    <div class="clos3">
      <!-- 标题 -->
      <titi :icon="icon" :tititext="tititextonce" :ber="ber1"></titi>
      <!-- content -->
      <div class="content">
        <div class="content_box">
          <listcontent
            :listcontent="listcontent"
            v-for="(item,index) in listcontent"
            :key="index"
            :title="item"
          ></listcontent>
          <listcontent1></listcontent1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menu1 from "../../../components/menu1.vue";
import titi from "../../../components/titi.vue";
import listcontent from "../../../components/listcontent.vue";
import listcontent1 from "../../../components/liscontent1.vue";
import swper from "../../../components/swpers.vue";
import MyHeader from "../../../components/public/MyHeader";

export default {
  data() {
    return {
      current: 0,
      ber1: true,
      list: [],
      icon: require("../../../assets/icon/icon1/icontiti.png"),
      tititextonce: "公示公告",
      tititexttow: "组织成员",
      imgs: require("../../../assets/back/backg0012.png"),
      list1: [
        {
          imgs: require("../../../assets/icon/icon1/zuzjs.png"),
          text1: "组织架构"
        },
        {
          imgs: require("../../../assets/icon/icon1/tpsx.png"),
          text1: "票决事项"
        },
        {
          imgs: require("../../../assets/icon/icon1/yzxs.png"),
          text1: "意见搜集"
        }
      ],
      listcontent: [
        {
          imgs: require("../../../assets/back/imgs4.png"),
          text: "五里店街道召开上半年党群工作联席会1111",
          timer: "2020-5-20",
          lockcs: 300,
          icon1: require("../../../assets/icon/icon1/timer1.png"),
          icon2: require("../../../assets/icon/icon1/liulan.png")
        }
      ],
      indexs: 0
    };
  },
  components: {
    menu1,
    titi,
    listcontent,
    listcontent1,
    swper,
    MyHeader
  },
  methods: {
    getData(index) {
      var that = this;
      this.indexs = index;
      var nuber = that.$data.indexs;
      console.log(nuber);
      switch (nuber) {
        case 0:
          that.$router.push("/organizationalstructure");
          break;
        case 1:
          that.$router.push("/votingmatters");
          break;
        case 2:
          console.log(2);
          break;
      }
    }
  }
};
</script>
<style scoped>
@import url("indComYh.css");
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.van-swipe-item {
  width: 200px !important;
  height: 220px !important;
  background: #42b983;
  margin: auto;
}
</style>
