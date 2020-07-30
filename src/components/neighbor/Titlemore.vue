<template >
  <div class="contitle">
    <div>
      <img
        style="width:20px;height:20px;vertical-align:baseline;outline-style:none"
        src="../../assets/image/block.png"
        alt
      />
      <span class="fonttitle">{{title}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Titlemore",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
<style  scoped>
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
.contitle div:last-child {
  color: #8a8a8a;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: 350;
  font-size: 30px;
}
</style>