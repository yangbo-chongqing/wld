<template>
  <div>
    <MyHeader :title="'商家服务'" />
    <div class="content">
      <div class="titles">
        <div
          @click="select(index)"
          :class="{'title':true,'active':num==index}"
          v-for="(item,index) in selectTit"
          :key="index"
        >
          <div v-if="num==index">
            <img src="../../assets/image/block.png" alt />
          </div>
          <span>{{item}}</span>
        </div>
      </div>
      <div style="width:100%">
        <MySwipe class="swpie" :swipeList="swipeList" />
        <div class="contentBottom">
          <div class="contentP" v-for="(item,index) in content" :key="index">
            <div class="contentTit">{{item.Title}}</div>
            <div class="contentPic">
              <div class="pic" v-for="(i,j) in item.list" :key="j">
                <img :src="i.img" alt />
                <div>{{i.name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MyHeader from "../public/MyHeader";
import MySwipe from "../Home/MySwipe";

export default {
  name: "ConvenientDetail",
  components: {
    MyHeader,
    MySwipe,
  },
  data() {
    return {
      selectTit: [
        "热门推荐",
        "美食",
        "家政",
        "送药上门",
        "上门理疗",
        "免费书吧",
        "上门理发",
        "生活用品",
      ],
      swipeList: [
        {
          people_pic: require("../../assets/image/Convenient/detail/banner1.png"),
        },
        {
          people_pic: require("../../assets/image/Convenient/detail/banner2.png"),
        },
        {
          people_pic: require("../../assets/image/Convenient/detail/banner3.png"),
        },
      ],
      content: [
        {
          Title: "精选商家",
          list: [
            {
              img: require("../../assets/image/Convenient/detail/ConvenientDetail6.png"),
              name: "桐君阁大药房",
            },
            {
              img: require("../../assets/image/Convenient/detail/ConvenientDetail5.png"),
              name: "华明康大药房",
            },
            {
              img: require("../../assets/image/Convenient/detail/ConvenientDetail4.png"),
              name: "阳光大药房",
            },
            {
              img: require("../../assets/image/Convenient/detail/ConvenientDetail3.png"),
              name: "自家人大药房",
            },
          ],
        },
        {
          Title: "上门理疗",
          list: [
            {
              img: require("../../assets/image/Convenient/detail/ConvenientDetail2.png"),
              name: "adorr发廊",
            },
            {
              img: require("../../assets/image/Convenient/detail/ConvenientDetail1.png"),
              name: "星辰靓装",
            },
            {
              img: require("../../assets/image/Convenient/detail/ConvenientDetail3.png"),
              name: "魅力丽人",
            },
            {
              img: require("../../assets/image/Convenient/detail/ConvenientDetail4.png"),
              name: "爱豆",
            },
          ],
        },
      ],
      num: 0, //默认类型
    };
  },
  methods: {
    select(n) {
      //选择类型
      this.num = n;
    },
  },
};
</script>
<style scoped>
.content {
  padding-top: 88px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
}

.titles {
  background: #f7fbff;
  width: 208px;
  height: 750px;
  box-sizing: border-box;
}

.title {
  width: 750px;
  height: 92px;
  line-height: 92px;
  color: #444444;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: 500;
  box-sizing: border-box;
  font-size: 28px;
}

.title div:first-child {
  width: 38px;
  height: 40px;
  display: inline-block;
}

.title span {
  padding-left: 50px;
}

.title img {
  vertical-align: text-bottom;
}

.active span {
  padding: 0;
  padding-left: 10px;
}

.title div:first-child img {
  width: 100%;
}

.active {
  background: #ffffff;
  color: #2c62ee;
}

.swpie {
  width: 480px;
  box-sizing: border-box;
  overflow-x: hidden;
  margin-left: 32px;
}

.pic {
  width: 200px;
  display: flex;
  flex-wrap: wrap;
}

.contentBottom {
  padding: 44px 32px 24px 30px;
  box-sizing: border-box;
}

.contentPic {
  display: flex;
  flex-wrap: wrap;
}

.pic:nth-child(2n) {
  padding-left: 18px;
}

.pic img {
  padding-top: 32px;
  width: 100%;
  padding-bottom: 28px;
}

.pic div {
  color: #444444;
  width: 200px;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
}

.contentTit {
  color: #2c62ee;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
}

.contentP {
  padding: 44px 32px 56px 30px;
  box-shadow: 0px 2px 6px rgba(218, 218, 218, 0.32);
}
</style>