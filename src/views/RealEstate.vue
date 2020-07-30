<template >
  <div class="RealEstate">
    <MyHeader :title="'物业服务'" />
    <img src="../assets/image/RealEstate/wybanner.png" alt />
    <Tools :toolsList="toolsList" />
    <Lines />
    <div class="center">
      <div>
        <div>房屋租赁信息发布</div>
        <div>当前区域个人精品房源</div>
        <div>
          <span>精品房源</span>
          <span>个人直租</span>
        </div>
      </div>
      <div>
        <img class="centerpic" src="../assets/image/RealEstate/wy5.png" alt />
      </div>
    </div>
    <Lines />
    <Titlemore :title="'物业公示'" />
    <ul>
      <!-- <li v-for="(item , index) in newsList" :key="index"> -->
      <li v-for="(item,index) in newsList" :key="index">
        <NewsList :news="item" />
        <!-- <textList v-else :news="item" /> -->
      </li>
    </ul>
  </div>
</template>
<script>
import MyHeader from "../components/public/MyHeader";
import Tools from "../components/RealEstate/Tools";
import Lines from "../components/public/Lines";
import Titlemore from "../components/public/Titlemore";
import NewsList from "../components/public/NewsList";
export default {
  name: "RealEstate",
  components: {
    MyHeader,
    Tools,
    Lines,
    Titlemore,
    NewsList
  },
  data() {
    return {
      toolsList: [
        {
          title: "物业缴费",
          img: baseImgUrl + "partydynamics.png",
          pageRouter: "/Organization"
        },
        {
          title: "物业保修",
          img: baseImgUrl + "elearning.png",
          pageRouter: "/member.html"
        },
        {
          title: "一键呼叫",
          img: baseImgUrl + "povertyalleviation.png",
          pageRouter: "/poverty.html"
        },
        {
          title: "物管建议",
          img: baseImgUrl + "conveniencequery.png",
          pageRouter: "/Convenient"
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
  }
};
</script>
<style lang="stylus" scoped>
.RealEstate>img {
  width: 100%;
  height: 336px;
  margin-top: 88px;
}

.center {
  width: 100%;
  height: 256px;
  display: flex;
  padding: 32px 48px 40px 48px;
  font-family: Source Han Sans CN;
  font-style: normal;
  text-align: center;
  box-sizing: border-box;
}

.center>div>div:first-child {
  font-size: 36px;
  font-weight: bold;
  text-shadow: 0px 4px 4px rgba(72, 91, 255, 0.2);
  color: #485BFF;
}

.center>div>div:nth-child(2) {
  color: #444444;
  font-size: 28px;
  font-weight: 500;
  margin-top: 48px;
}

.center>div>div:last-child {
  margin-top: 24px;
}

.center>div>div:last-child>span {
  width: 130px;
  height: 40px;
  background: #F5F5F5;
  color: #444444;
  font-size: 24px;
  font-weight: normal;
  padding: 8px 16px;
}

.center>div>div:last-child>span:last-child {
  margin-left: 10px;
}

.centerpic {
  width: 242px;
  height: 184px;
  margin-left: 100px;
  margin-top: 30px;
}
</style>