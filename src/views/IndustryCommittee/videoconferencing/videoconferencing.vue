<template>
  <div id="videoconferencing">
    <MyHeader :title="'视频会议'" />

    <div class="vide_clos1">
      <div class="vide_clos1_t">
        <div class="vide_clos1_t_t">
          <p>星期一</p>
        </div>
        <div class="vide_clos1_t_c">
          <p>17：39：12</p>
        </div>
        <div class="vide_clos1_t_b">
          <p>你有会议需要参与，请按时签到参与</p>
        </div>
      </div>
      <div class="vide_clos1_b">
        <div v-for="(item,index) in lists" :key="index" @click="clickactive(index),nuber=index">
          <p :class="nuber==index?'actives':''">{{item}}</p>
        </div>
      </div>
    </div>
    <div class="vide_clos21" v-show="ber0">
      <!--1-->
      <div class="vide_clos21_clos1">
        <div class="vide_clos21_clos1_titi">
          <p>关于加强党建工作的部署会议</p>
        </div>
        <div class="vide_clos21_clos1_content">
          <div class="vide_clos21_clos1_content1">
            <div>
              <p>
                与我相关:
                <span style="color: #2C62EE;">需要参与</span>
              </p>
              <p>
                主持人员:
                <span style="color: #2C62EE;">张理书记</span>
              </p>
            </div>
            <div>
              <p>
                <span>线上</span>|
                <span>线下</span>
              </p>
            </div>
          </div>
          <div class="vide_clos21_clos1_content2">
            <p>
              打卡时间:
              <span style="color: #2C62EE;">2018-12-15 09:00~10:00 ~ 2018-12-15 09:00~10:00</span>
            </p>
          </div>
          <div class="vide_clos21_clos1_content3">
            <p>
              会议时间:
              <span style="color: #2C62EE;">2018-12-15 09:00~10:00 ~ 2018-12-15 09:00~10:00</span>
            </p>
          </div>
          <div class="vide_clos21_clos1_content4">
            <p>
              打卡地点:
              <span style="color: #2C62EE;">张理书记</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="vide_clos22" v-show="ber1">暂无数据</div>
    <!--2-->
    <div class="vide_clos23" v-show="ber2">
      <!--3-->
      <div class="vide_clos21_clos1_content">
        <div class="vide_clos21_clos1_content1">
          <div>
            <p>
              与我相关:
              <span style="color: #2C62EE;">需要参与</span>
            </p>
            <p>
              主持人员:
              <span style="color: #2C62EE;">张理书记</span>
            </p>
          </div>
          <div>
            <p>查看详情</p>
          </div>
        </div>
        <div class="vide_clos21_clos1_content3">
          <p>
            会议时间:
            <span style="color: #2C62EE;">2018-12-15 09:00~10:00 ~ 2018-12-15 09:00~10:00</span>
          </p>
        </div>
        <div class="vide_clos21_clos1_content4">
          <p>
            会议地点:
            <span style="color: #2C62EE;">会议大楼办公室</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "../../../components/public/MyHeader";

export default {
  data() {
    return {
      lists: ["会议预告", "会议签到", "晚期会议"],
      nuber: 0,
      ber0: true,
      ber1: false,
      ber2: false
    };
  },
  components: {
    MyHeader
  },
  methods: {
    clickactive(e) {
      if (e == 0) {
        this.ber0 = true;
        this.ber2 = false;
        this.ber1 = false;
      }
      if (e == 1) {
        this.ber1 = true;
        this.ber0 = false;
        this.ber2 = false;
      }
      if (e == 2) {
        this.ber2 = true;
        this.ber1 = false;
        this.ber0 = false;
      }
    }
  }
};
</script>

<style scoped="scoped">
@import url("videoconferencing.css");
</style>
