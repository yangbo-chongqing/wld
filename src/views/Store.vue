<template>
  <div class="Store">
    <!--头部 搜索 标题栏 -->
    <div id="MyHeader">
      <div>
        <img src="../assets/image/icon/back.png" class="i" @click="goBack" />
      </div>

      <slot>
        <span>积分商城</span>
      </slot>
      <img class="img" src="../assets/image/Store/seach.png" alt />
    </div>
    <div class="contentHead">
      <img src="../assets/image/Store/blueBackground.png" alt />
      <div>
        <div class="leftImg">
          <img src="../assets/image/Store/gift.png" alt />
        </div>
        <div>
          <h4>126积分</h4>
          <h5>赚取积分 兑换心仪商品</h5>
        </div>
        <div>
          <span>规则</span>
          <div class="rightPic">
            <img src="../assets/image/Store/help.png" alt />
          </div>
        </div>
      </div>
    </div>
    <!-- <Lines style="margin-top:10px" /> -->
    <div class="contitle">
      <div>
        <img src="../assets/image/block.png" alt />
        <span class="fonttitle">积分来源</span>
      </div>
      <div>查看详情</div>
    </div>
    <div class="contentPic">
      <img src="../assets/image/Store/sc1.png" alt />
      <img src="../assets/image/Store/sc2.png" alt />
      <img src="../assets/image/Store/sc3.png" alt />
      <img src="../assets/image/Store/sc4.png" alt />
    </div>
    <div class="selectAll">
      <div
        :class="{'select':true,'active':index==num}"
        v-for=" (item,index) in listTit"
        :key="index"
        @click="select(index)"
      >
        <span>{{item.tit1}}</span>
        <span>{{item.Tit2}}</span>
        <span v-if="num==index">
          <img src="../assets/image/Store/active.png" alt />
        </span>
      </div>
    </div>
    <div class="details">
      <div class="detail" v-for=" (item,index) in listTit" :key="index">
        <img src="../assets/image/Store/sc5.png" alt />
        <div>新鲜蔬菜水果农产品名称新鲜蔬菜水...</div>
        <div>
          <span>50g/袋</span>
          <span>包邮</span>
        </div>
        <div>
          <span>
            ￥
            <span>2</span>
            积分
          </span>
          <span>兑换:52次</span>
          <span>
            <img src="../assets/image/Store/sc6.png" alt />
          </span>
        </div>
      </div>
    </div>
    <foo :number="1" />
  </div>
</template>
<script>
import Lines from "../components/public/Lines";
import foo from "../components/tabbar.vue";

export default {
  name: "Store",
  components: {
    Lines,
    foo
  },
  data() {
    return {
      listTit: [
        { tit1: "蔬菜", Tit2: "新鲜蔬菜" },
        { tit1: "水果", Tit2: "本地水果" },
        { tit1: "干货", Tit2: "好吃干货" },
        { tit1: "土特产", Tit2: "本地特产" },
        { tit1: "药材", Tit2: "食用药材" }
      ],
      num: 0
    };
  },
  methods: {
    select(n) {
      this.num = n;
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="stylus" scoped>
.Store {
  background: #F7FBFF;
  width: 100%;
  min-width: 320px;
  max-width: 750px;
}

#MyHeader {
  min-width: 320px;
  max-width: 750px;
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  z-index: 2;

  &.isTransparent {
    background-color: transparent;
  }

  span {
    font-size: 36px;
    padding-left: 30px;
  }

  .img {
    padding-right: 20px;
    wdith: 100%;
  }

  .i {
    position: absolute;
    top: 50%;
    padding-left: 20px;
    transform: translateY(-40%);
    font-size: 30px;
    width: 36px;
  }
}

.contentHead {
  margin-top: 88px;
  position: relative;
  background: #F8F8F8;
  height: 240px;
}

.contentHead>img {
  width: 100%;
}

.contentHead>div {
  display: flex;
  align-items: center;
  width: 690px;
  margin: 0 30px;
  box-sizing: border-box;
  position: absolute;
  top: 72px;
  height: 156px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 5px 5px #8A8A8A;
}

.leftImg {
  width: 80px !important;
  height: 80px !important;
  padding-left: 32px !important;
}

.rightPic {
  display: inline-block;
  margin-left: 16px;
  width: 32px;
  height: 32px;
}

.rightPic img {
  vertical-align: text-bottom;
  width: 100%;
}

.contentHead>div img:first-child {
  width: 100%;
}

.contentHead>div>div:nth-child(2) {
  padding-left: 32px;
  font-family: Source Han Sans CN;
  font-style: normal;
}

.contentHead>div>div:nth-child(2)>h4 {
  color: #2C62EE;
  font-weight: 500;
  font-size: 40px;
}

.contentHead>div>div:nth-child(2)>h5 {
  color: #8A8A8A;
  font-weight: normal;
  font-size: 28px;
  padding-top: 14px;
}

.contentHead>div>div:last-child {
  padding-left: 120px;
}

.contentHead>div>div:last-child >span {
  color: #8A8A8A;
  font-size: 28px;
  font-weight: normal;
}

.contentHead>div>div:last-child >img {
  padding-left: 16px;
  display: inline-block;
  vertical-align: text-bottom;
}

.contitle {
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e3e3e3;
}

.contitle div:first-child {
  width: 50%;
  height: 88px;
  display: flex;
  align-items: center;
}

.fonttitle {
  margin-left: 16px;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  color: #444444;
}

.contitle img {
  width: 40px;
  vertical-align: baseline;
  outline-style: none;
}

.contitle div:last-child {
  color: #8a8a8a;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: 350;
  font-size: 30px;
}

.contentPic {
  padding: 20px 10px 0px 30px;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  font-size: 0;
}

.contentPic img {
  width: 50%;
}

.contentPic img {
  font-size: 0;
}

.selectAll {
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
}

.select {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 142px;
  text-align: center;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: normal;
  background: #F7FBFF;
}

.select>span:nth-child(1) {
  padding-top: 10px;
  color: #444444;
  font-size: 28px;
}

.select>span:nth-child(2) {
  color: #8C8C8C;
  font-size: 24px;
}

.active>span:nth-child(1) {
  color: #2C62EE;
  font-size: 32px;
  font-weight: bold;
}

.active>span:nth-child(2) {
  color: #2C62EE;
}

.details {
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
}

.detail {
  width: 360px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: #fff;
  padding: 16px 12px 40px 10px;
  margin-right: 15px;
  margin-bottom: 15px;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: normal;
}

.detail > :nth-child(2) {
  font-size: 28px;
  color: #444444;
}

.detail > :nth-child(3) {
  color: #DADADA;
  margin-top: 10px;
}

.detail > :nth-child(3) span {
  border: 2px solid #DADADA;
  padding: 6px 10px 6px 10px;
  margin-right: 15px;
}

.detail > :nth-child(4) {
  color: #2C62EE;
  font-size: 28px;
}

.detail > :nth-child(4)>span:first-child>span {
  font-size: 38px;
}

.detail > :nth-child(4)>span:nth-child(2) {
  color: #DADADA;
  margin-left: 10px;
  font-size: 26px;
}

.detail img:last-child {
  margin-left: 48px;
  vertical-align: text-bottom;
}
</style>
