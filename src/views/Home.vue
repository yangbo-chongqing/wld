<template>
  <div class="home">
    <Myhead :showArea="'重庆'" />
    <MySwipe class="swpie" :swipeList="swipeList" />
    <Tools :toolsList="toolsList" />
    <div style="background: #FFFFFF;width:100%;height:52px;margin-top:15px">
      <div class="trumpet">
        <div>
          <img style="margin-left:16px" src="../assets/image/trumpet.png" alt />
        </div>
        <div>
          <span>五里店街道召开上半年总结会</span>
        </div>
      </div>
    </div>
    <Lines />
    <Titlemore :title="'社区动态'" />
    <ul>
      <li v-for="(item , index) in newsList" :key="index">
        <NewsList :news="item" />
        <!-- <textList v-else :news="item" /> -->
      </li>
    </ul>
    <foo :number="0" />
  </div>
</template>

<script>
// @ is an alias to /src
import Myhead from "../components/Home/Myhead";
import MySwipe from "../components/Home/MySwipe";
import Tools from "../components/Home/Tools";
import Lines from "../components/public/Lines";
import Titlemore from "../components/public/Titlemore";
import NewsList from "../components/public/NewsList";
import foo from "../components/tabbar.vue";
export default {
  name: "Home",
  components: {
    Myhead,
    MySwipe,
    Tools,
    Lines,
    NewsList,
    Titlemore,
    foo
  },
  data() {
    return {
      swipeList: [
        {
          people_pic: require("../assets/image/banner1.png")
        },
        {
          people_pic: require("../assets/image/banner2.png")
        },
        {
          people_pic: require("../assets/image/banner3.png")
        }
      ],
      toolsList: [
        {
          title: "党组织",
          img: require("../assets/image/party.png"),
          pageRouter: "/Organization"
        },
        {
          title: "业委会",
          img: require("../assets/image/committee.png"),
          pageRouter: "/indComYh"
        },
        {
          title: "视频会议",
          img: require("../assets/image/video.png"),
          pageRouter: "/videoconferencing"
        },
        {
          title: "便民服务",
          img: require("../assets/image/bm.png"),
          pageRouter: "/Convenient"
        },
        {
          title: "物业服务",
          img: require("../assets/image/wy.png"),
          pageRouter: "/RealEstate"
        },
        {
          title: "左邻右舍",
          img: require("../assets/image/zlys.png"),
          pageRouter: "/Neighbor"
        }
      ],
      newsList: [
        {
          title: "云阳县人民政府办公室施方案的通知工作的实施方案的通知",
          CreateName: "杨柳村管理员",
          create_date: "2020-07-03 10:03:13",
          areaName: "杨柳村",
          contentPic:
            "http://119.3.196.255:7604/images/wuzai/information/20200706100643237.jpg"
        },
        {
          title: "云阳县人民政府办公室施方案的通知工作的实施方案的通知",
          CreateName: "杨柳村管理员",
          create_date: "2020-07-03 10:03:13",
          areaName: "杨柳村",
          contentPic:
            "http://119.3.196.255:7604/images/wuzai/information/20200706100643237.jpg"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style  scoped>
.home {
  box-sizing: border-box;
  padding-bottom: 2rem;
  overflow: hidden;
}

.trumpet {
  margin: 0 30px 40px 30px;
  background: #f5f5f5;
  height: 64px;
  color: #8a8a8a;
  flex: start;
  display: flex;
}
.trumpet img {
  width: 48px;
  height: 48px;
}
.trumpet div:last-child {
  padding-bottom: 10px;
}
.trumpet div span {
  height: 70px;
  font-size: 18px;
  line-height: 70px;
  margin-left: 16px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>