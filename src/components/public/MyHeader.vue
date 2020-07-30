<template>
  <div id="MyHeader" :class="{isTransparent:bg}">
    <img class="i" src="../../assets/image/icon/back.png" @click="goBack" />
    <slot>
      <span>{{ title }}</span>
    </slot>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  props: {
    title: {
      type: String,
      required: true
    },
    bg: {
      type: Boolean,
      required: false,
      default: false
    },
    back: {
      type: Function,
      required: false,
      default: function() {}
    }
  },
  methods: {
    goBack() {
      this.back();
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="stylus">
#MyHeader {
  min-width: 320px;
  max-width: 750px;
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  }

  .i {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-40%);
    font-size: 30px;
    width: 36px;
  }
}
</style>
