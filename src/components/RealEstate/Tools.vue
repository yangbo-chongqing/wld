<template>
  <div id="Tools">
    <div v-for="(item ,index) in toolsList" :key="index" @click="goPage(item.pageRouter)">
      <img :src="item.img" />
      <p>{{ item.title}}</p>
    </div>
  </div>
</template>

<script>
// import { isLogin } from "../../apis";
import { Dialog } from "vant";
// import {
//   modifyArea,
//   modifyShowArea,
//   modifyUserInfo
// } from "../../store/actionTypes";
export default {
  name: "Tools",
  props: {
    toolsList: {
      type: Array,
      required: true
    }
  },
  methods: {
    // goPage(pageRouter) {
    //   this.$router.push(pageRouter);
    // }
    //   async goPage(pageRouter) {
    //     //获取后台结果
    //     let result = await isLogin();
    //     //获取前端结果
    //     let userInfo = this.$store.state.userInfo;
    //     /*************没有登录******************/
    //     //先判断本地提高效率
    //     if (!userInfo) {
    //       this.$store.dispatch(modifyUserInfo);
    //       this.$store.dispatch(modifyArea);
    //       this.$store.dispatch(modifyShowArea);
    //       Dialog.confirm({
    //         title: "温馨提示",
    //         message: "您还没有登录，是否前往登录页面进行登录？"
    //       })
    //         .then(msg => {
    //           this.$router.push("/login.html");
    //         })
    //         .catch(err => {});
    //       return null;
    //     }
    //     /***************被后台提踢出************/
    //     if (~~result.code === 0 && ~~result.status === 400 && userInfo) {
    //       this.$store.dispatch(modifyUserInfo);
    //       this.$store.dispatch(modifyArea);
    //       this.$store.dispatch(modifyShowArea);
    //       Dialog.alert({
    //         title: "温馨提示",
    //         message: "账号已在另一台设备登录，您已被强制下线！"
    //       }).then(() => {
    //         this.$router.push("/login.html");
    //       });
    //       return null;
    //     }
    //     /**************判断后台结果 没有登录*************/
    //     if (~~result.code === 0 && ~~result.status === 400) {
    //       Dialog.confirm({
    //         title: "温馨提示",
    //         message: "您还没有登录，是否前往登录页面进行登录？"
    //       })
    //         .then(() => {
    //           this.$router.push("/login.html");
    //         })
    //         .catch(() => {});
    //       return null;
    //     }
    //     if (pageRouter == "/member.html" && !userInfo.isMenber) {
    //       Dialog.confirm({
    //         title: "温馨提示",
    //         message: "您不是党员，是否前往绑定党员信息？"
    //       }).then(() => {
    //         this.$router.push("/profile.html");
    //       });
    //     } else if (~~result.code === 0 && ~~result.status === 200) {
    //       /***************后台登陆了*****************/
    //       this.switchPage({ pageRouter });
    //     }
    //   }
  }
};
</script>

<style scoped lang="stylus">
#Tools {
  width: 100%;
  height: 200px;
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;

  div {
    width: 25%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    img {
      width: 88px;
      height: 88px;
      margin-bottom: 20px;
    }

    p {
      margin: 0;
      font-size: 28px;
    }
  }
}
</style>
