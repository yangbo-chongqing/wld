<template>
  <div class="picall">
    <div v-for="(item,n) in picList" :key="n">
      <Titlemore :title="item.title" />
      <div class="smallpic" v-for="(i,index) in item.list" :key="index">
        <div>
          <img class="titlepic" :src="i.img" />
        </div>
        <div>{{i.name}}</div>
      </div>
      <div class="line"></div>
    </div>
    <div>
      <img class="add" src="../../assets/image/Neighbor/add.png" alt />
    </div>
  </div>
</template>
<script>
import Titlemore from "./Titlemore";
export default {
  components: {
    Titlemore
  },
  props: {
    picList: {
      type: Array,
      required: true
    }
  }
};
</script>
<style lang="stylus" scoped>
.picall {
  width: 100%;
}

.picall>div:last-child {
  width: 88px;
  height: 88px;
  position: fixed;
  bottom: 200px;
  right: 50px;
}

.smallpic {
  width: 33%;
  display: inline-block;
  height: 228px;
  text-align: center;
  padding-top: 48px;
  box-sizing: border-box;
  border-right: 2px solid #F5F5F5;
  border-bottom: 2px solid #F5F5F5;
}

.smallpic:nth-child(3n+1) {
  border-right: none !important;
}

.line {
  background: #F5F5F5;
  width: 100%;
  height: 16px;
}

.smallpic>div:first-child {
  width: 80px;
  height: 80px;
  display: inline-block;
}

.titlepic {
  width: 100%;
  display: inline-block;
}

.smallpic>div:last-child {
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  padding-top: 20px;
}

.add {
  width: 100%;
  opacity: 0.8;
}
</style>