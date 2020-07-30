<template>
  <div>
    <MyHeader :title="'左邻右舍'" />
    <img src="../assets/image/Neighbor/ljbanner.png" alt />
    <pic :picList="picList" />
  </div>
</template>
<script>
import MyHeader from "../components/public/MyHeader";
import pic from "../components/neighbor/pic";
export default {
  name: "Neighbor",
  components: {
    MyHeader,
    pic
  },
  data() {
    return {
      picList: [
        {
          title: "志愿者之家",
          list: [
            {
              img: require("../assets/image/Neighbor/zlys1.png"),
              name: "志愿者服务队"
            },
            {
              img: require("../assets/image/Neighbor/zlys2.png"),
              name: "义工组织"
            },
            {
              img: require("../assets/image/Neighbor/zlys3.png"),
              name: "社工组织"
            },
            {
              img: require("../assets/image/Neighbor/zlys5.png"),
              name: "身边驴友"
            }
          ]
        },
        {
          title: "邻里助",
          list: [
            {
              img: require("../assets/image/Neighbor/zlys4.png"),
              name: "漂书屋"
            },
            {
              img: require("../assets/image/Neighbor/zlys5.png"),
              name: "身边驴友"
            },
            {
              img: require("../assets/image/Neighbor/zlys6.png"),
              name: "微厨定制"
            }
          ]
        },
        {
          title: "邻里乐",
          list: [
            {
              img: require("../assets/image/Neighbor/zlys7.png"),
              name: "小丫雀艺术团"
            },
            {
              img: require("../assets/image/Neighbor/zlys8.png"),
              name: "欢乐竹棒鼓舞队"
            },
            {
              img: require("../assets/image/Neighbor/zlys9.png"),
              name: "鹤发童心门球队"
            },
            {
              img: require("../assets/image/Neighbor/zlys10.png"),
              name: "气排球队"
            },
            {
              img: require("../assets/image/Neighbor/zlys11.png"),
              name: "紫花拳剑队"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style  scoped>
img {
  width: 100%;
  /* height: 336px; */
  margin-top: 88px;
}
</style>