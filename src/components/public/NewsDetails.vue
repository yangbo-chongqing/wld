<template>
  <div>
    <MyHeader :title="title" />
    <div class="font">
      <div>
        <h4>南方上格林小区管理规约</h4>
      </div>
      <div>
        <div>
          来源：上格林街道 | 发布日期:
          <span>2019/12/21 11:10</span>
        </div>
        <div>
          <span>212</span>次浏览
        </div>
      </div>
      <div>
        第一章总则
        <br />第一条为维护南方上格林小区全体业主、使用人的合法权益和公共秩序，保障物业的安全与合理使用，营造安全、文明、方便、舒适的生活与工作环境。根据《中华人民共和国物权法》、《物 业管理条例》(园务院令第 379号)、《重庆市物业管理条例》 、《重庆市业主大会和业主委员会活动规则(试行)》等相关法律法规的规定，结合实际，制订本规约。
        <br />第二条本规约对物业管理区域内的全体业主、使用人均具有约束力。
        <br />第三条本规约所称业主，是指房屋的所有权人，包括房屋权属证明记载的权利人以及未取得房屋权属证明，但已办理房屋权属初始登记的买受人或建造人。使用人，是指业主以外的物业的承租人或其他实际使用物业的人。
        <br />第四条本物业管理区域内物业的基本情况。 物业名称:南方上格林小区物业管理区域概况:房屋总建筑面积: 447720.4 平方米，业主户数2706户。
        <br />物业管理区域四至:东至:江溉路对山立交与江北城立交道路边线;西至:五黄路、江洲立交与五里店立交道路连线，邻重庆市路桥收费处;南至:江北城立交与江洲立交道路边线;北至:重庆市城投闲置地块边线。
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./MyHeader";
export default {
  name: "NewsDetails",
  components: {
    MyHeader
  },
  data() {
    return {
      title: this.$route.query.title
    };
  },

  created() {}
};
</script>

<style scoped >
.font {
  margin-top: 88px;
  padding: 32px 30px 0 30px;
  font-family: Source Han Sans CN;
  font-style: normal;
  box-sizing: border-box;
}

.font h4 {
  font-weight: 500;
  font-size: 32px;
}

.font > div:nth-child(2) {
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  color: #444444;
  font-size: 24px;
}
.font > div:nth-child(2) > div:first-child > span {
  color: #8a8a8a;
}
.font > div:nth-child(2) > div:last-child > span {
  color: #2c62ee;
}
.font > div:last-child {
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: 350;
  font-size: 32px;
  padding-top: 34px;
}
</style>
