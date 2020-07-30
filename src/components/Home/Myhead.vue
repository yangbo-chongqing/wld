<template>
  <div class="myheader">
    <div>
      <img src="../../assets/image/Frame 239.png" alt />
      <span>{{ showArea }}</span>
    </div>
    <p>首页</p>
  </div>
</template>
<script>
export default {
  props: {
    // showPopup: {
    //   type: Function,
    //   required: true
    // },
    showArea: {
      type: String,
      required: true
    }
  }
};
</script>
<style   scoped>
.myheader {
  display: flex;
  color: #2c62ee;
  height: 88px;
  align-items: center;

  width: 750px;
  padding: 26px 0 30px 30px;
  box-sizing: border-box;
}
.myheader div img {
  width: 32px;
  height: 32px;
  vertical-align: text-bottom;
}
.myheader div {
  position: relative;
}
.myheader div span {
  font-size: 26px;
  color: #2c62ee;
  height: 32px;
  margin-left: 16px;
  margin-top: -8px;
}
.myheader p {
  font-size: 36px;
  margin: 0 auto;
  padding-right: 120px;
  color: #444444;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: normal;
}
</style>