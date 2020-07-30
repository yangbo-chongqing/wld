<template>
  <div class="Organization">
    <MyHeader :title="'在线学习'" />
    <div class="topmenu">
      <div @click="changeMenu(1)">
        <p :class="menu == 1 ? 'active' : ''">我的党组织</p>
        <span v-if="menu == 1"></span>
      </div>
      <div @click="changeMenu(2)">
        <p :class="menu == 2 ? 'active' : ''">物业党支部</p>
        <span v-if="menu == 2"></span>
      </div>
      <div @click="changeMenu(3)">
        <p :class="menu == 3 ? 'active' : ''">业委会党支部</p>
        <span v-if="menu == 3"></span>
      </div>
    </div>
    <div class="line"></div>
    <div class="first" v-if="menu == 1">
      <div class="blueBg">
        <img src="../assets/image/Organization/blueBackground.png" alt />
        <div class="whiteBg">
          <div>
            <span>党员</span>
            <span>支部书记</span>
          </div>
          <div>
            人物介绍：
            <span>暂无</span>
          </div>
        </div>
        <div class="sjName">桂海啸</div>
        <div class="topPic">
          <img src="../assets/image/Organization/portrait.png" alt />
        </div>
      </div>
      <div class="firstlist">
        <div class="contitle">
          <img style="width:20px;height:20px;z-index:1" src="../assets/image/block.png" alt />
          <span>成员信息</span>
        </div>
        <div class="contentlast">
          <div class="foot">
            <img src="../assets/image/photo1.png" alt />
            <div>
              <div>
                <span>
                  周洪裕
                  <img style="vertical-align: sub" src="../assets/image/partyIcon.png" alt />
                </span>
                <span>支部书记</span>
              </div>
              <div>21分</div>
            </div>
          </div>
          <div class="foot">
            <img src="../assets/image/photo2.png" alt />
            <div>
              <div>
                <span>
                  周树荣
                  <img style="vertical-align: sub" src="../assets/image/partyIcon.png" alt />
                </span>
                <span>委员</span>
              </div>
              <div>21分</div>
            </div>
          </div>
          <div class="foot">
            <img src="../assets/image/photo2.png" alt />
            <div>
              <div>
                <span>
                  冯常礼
                  <img style="vertical-align: sub" src="../assets/image/partyIcon.png" alt />
                </span>
                <span>委员</span>
              </div>
              <div>21分</div>
            </div>
          </div>
          <div class="foot">
            <img src="../assets/image/photo2.png" alt />
            <div>
              <div>
                <span>
                  杨勇
                  <img style="vertical-align: sub" src="../assets/image/partyIcon.png" alt />
                </span>
                <span>委员</span>
              </div>
              <div>21分</div>
            </div>
          </div>
          <div class="foot">
            <img src="../assets/image/photo2.png" alt />
            <div>
              <div>
                <span>
                  桂海啸
                  <img style="vertical-align: sub" src="../assets/image/partyIcon.png" alt />
                </span>
                <span>委员</span>
              </div>
              <div>21分</div>
            </div>
          </div>
          <div class="foot">
            <img src="../assets/image/photo2.png" alt />
            <div>
              <div>
                <span>
                  范孝文
                  <img style="vertical-align: sub" src="../assets/image/partyIcon.png" alt />
                </span>
                <span>委员</span>
              </div>
              <div>21分</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contitle" v-if="menu == 2">
      <img style="width:20px;height:20px;z-index:1" src="../assets/image/block.png" alt />
      <span>成员信息</span>
    </div>
    <div class="contentlast" v-if="menu == 2">
      <div class="foot">
        <img src="../assets/image/photo1.png" alt />
        <div>
          <div>
            <span>
              周洪裕
              <img style="vertical-align: sub" src="../assets/image/partyIcon.png" alt />
            </span>
            <span>支部书记</span>
          </div>
          <div>21分</div>
        </div>
      </div>
      <div class="foot">
        <img src="../assets/image/photo2.png" alt />
        <div>
          <div>
            <span>
              周树荣
              <img style="vertical-align: sub" src="../assets/image/partyIcon.png" alt />
            </span>
            <span>委员</span>
          </div>
          <div>21分</div>
        </div>
      </div>
      <div class="foot">
        <img src="../assets/image/photo2.png" alt />
        <div>
          <div>
            <span>
              冯常礼
              <img style="vertical-align: sub" src="../assets/image/partyIcon.png" alt />
            </span>
            <span>委员</span>
          </div>
          <div>21分</div>
        </div>
      </div>
      <div class="foot">
        <img src="../assets/image/photo2.png" alt />
        <div>
          <div>
            <span>
              杨勇
              <img style="vertical-align: sub" src="../assets/image/partyIcon.png" alt />
            </span>
            <span>委员</span>
          </div>
          <div>21分</div>
        </div>
      </div>
      <div class="foot">
        <img src="../assets/image/photo2.png" alt />
        <div>
          <div>
            <span>
              桂海啸
              <img style="vertical-align: sub" src="../assets/image/partyIcon.png" alt />
            </span>
            <span>委员</span>
          </div>
          <div>21分</div>
        </div>
      </div>
      <div class="foot">
        <img src="../assets/image/photo2.png" alt />
        <div>
          <div>
            <span>
              范孝文
              <img style="vertical-align: sub" src="../assets/image/partyIcon.png" alt />
            </span>
            <span>委员</span>
          </div>
          <div>21分</div>
        </div>
      </div>
    </div>
    <div class="contitle" v-if="menu == 3">
      <img style="width:20px;height:20px;z-index:1" src="../assets/image/block.png" alt />
      <span>成员信息</span>
    </div>
    <div class="contentlast" v-if="menu == 3">
      <div class="foot">
        <img src="../assets/image/photo1.png" alt />
        <div>
          <div>
            <span>
              杨善东
              <img style="vertical-align: sub" src="../assets/image/partyIcon.png" alt />
            </span>
            <span>支部书记</span>
          </div>
          <div>21分</div>
        </div>
      </div>
      <div class="foot">
        <img src="../assets/image/photo2.png" alt />
        <div>
          <div>
            <span>
              谢全江
              <img style="vertical-align: sub" src="../assets/image/partyIcon.png" alt />
            </span>
            <span>委员</span>
          </div>
          <div>21分</div>
        </div>
      </div>
      <div class="foot">
        <img src="../assets/image/photo2.png" alt />
        <div>
          <div>
            <span>
              李杰
              <img style="vertical-align: sub" src="../assets/image/partyIcon.png" alt />
            </span>
            <span>委员</span>
          </div>
          <div>21分</div>
        </div>
      </div>
      <div class="foot">
        <img src="../assets/image/photo2.png" alt />
        <div>
          <div>
            <span>
              王清平
              <img style="vertical-align: sub" src="../assets/image/partyIcon.png" alt />
            </span>
            <span>委员</span>
          </div>
          <div>21分</div>
        </div>
      </div>
      <div class="foot">
        <img src="../assets/image/photo2.png" alt />
        <div>
          <div>
            <span>
              石亮
              <img style="vertical-align: sub" src="../assets/image/partyIcon.png" alt />
            </span>
            <span>委员</span>
          </div>
          <div>21分</div>
        </div>
      </div>
      <div class="foot">
        <img src="../assets/image/photo2.png" alt />
        <div>
          <div>
            <span>
              陈运国
              <img style="vertical-align: sub" src="../assets/image/partyIcon.png" alt />
            </span>
            <span>委员</span>
          </div>
          <div>21分</div>
        </div>
      </div>
    </div>
    <div class="contitle" v-if="menu == 3">
      <img style="width:20px;height:20px;z-index:1" src="../assets/image/block.png" alt />
      <span>议事制度</span>
    </div>
    <div v-if="menu == 3" class="contentlast">
      <div class="foot">
        南方上格林业委会党支部议事会制度
        <br />一、召开时间
        <br />业委会党支部议事会一般在每次业委会召开前举行,根据实际工作需要可随时召开。
        <br />二、与会人员
        <br />(一)召集人。业委会党支部议事会由支部书记召集和主持。
        <br />(二)参会人。支部全体党员参加，必要时也可吸收相关业委会非党员委员参加。
        <br />三、主要任务
        <br />(一)研究物业治理。梳理党总支委员会、党总支物业议事会交办的工作任务和群众反映的物业治理问题，研究解决方案，向业委会提出合理化意见建议。
        <br />(二)加强党员教育。教育引导党员发挥先锋模范作用,依法依规履行职责带头做好业委会工作，树立业委会良好形象。
      </div>
    </div>
    <div class="contitle" v-if="menu == 2">
      <img style="width:20px;height:20px;z-index:1" src="../assets/image/block.png" alt />
      <span>议事会制度</span>
    </div>
    <div v-if="menu == 2" class="contentlast">
      <div class="foot">
        南方上格林物业党支部议事会制度
        <br />一、召开时间
        <br />物业党支部议事会一般每月召开一次，根据实际工作需要可随时召开。
        <br />二、与会人员
        <br />(一)召集人。物业党支部议事会由支部书记召集和主持。
        <br />(二)参会人。支部全体党员参加，必要时也可吸收相关物业公司非党员领导、 员工代表参加。
        <br />三、主要任务
        <br />(一)研究物业治理。梳理党总支委员会、党总支议事会交办的物业治理工作 任务和群众反映的物业治理问题，研究解决方案，向物业公司提出合理化意见建 议，督促物业公司落实。
        <br />(二) 加强党员教育。教育引导党员发挥先锋模范作用，带头做好物业服务 工作，树立良好形象。
      </div>
    </div>
    <div class="contitle" v-if="menu == 2||menu ==3">
      <img style="width:20px;height:20px;z-index:1" src="../assets/image/block.png" alt />
      <span>物业电话</span>
    </div>
    <div v-if="menu == 2||menu ==3" class="contentlast">
      <div class="foot">67021020</div>
    </div>
  </div>
</template>
<script>
import MyHeader from "../components/public/MyHeader";
export default {
  name: "Organization",
  components: {
    MyHeader,
  },
  data() {
    return {
      menu: 1,
    };
  },
  methods: {
    changeMenu(e) {
      this.loading = false;
      this.finished = false;
      this.videoList = [];
      this.textList = [];

      this.pageCurrent = 1;
      if (e == 1) {
        this.menu = e;
        // this.loading = false;
        // this.finished = false;
        // this.videoList = [];
        // this.pageCurrent = 1;
      } else if (e == 2) {
        this.menu = e;
        // this.loading1 = false;
        // this.finished1 = false;
        // this.textList = [];
        // this.pageCurrent = 1;
      } else {
        this.menu = e;
      }
    },
  },
};
</script>
<style lang="stylus"  scoped>
.Organization {
  padding-top: 176px;
  min-height: 100vh;
  box-sizing: border-box;
}

.topmenu {
  width: 100%;
  height: 88px;
  position: fixed;
  top: 88px;
  left: 0;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  z-index: 2;

  div {
    position: relative;
    width: 33% !important;
    text-align: center;
    box-sizing: border-box;

    p {
      font-size: 28px;
      color: #8a8a8a;
      line-height: 88px;
    }

    p.active {
      color: #2C62EE;
    }

    span {
      width: 40px;
      height: 6px;
      background: #2C62EE;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 12px;
      margin: auto;
      box-shadow: 0 0 8px #2C62EE;
      border-radius: 4px;
    }
  }
}

.blueBg {
  width: 750px;
  position: relative;
}

.blueBg img {
  width: 100%;
}

.sjName {
  position: absolute;
  left: 280px;
  top: 154px;
  color: #FFFFFF;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
}

.whiteBg {
  width: 690px;
  height: 374px;
  position: absolute;
  top: 50%;
  left: 30px;
  background: #fff;
  box-shadow: 0 5px 5px #8A8A8A;
}

.whiteBg div:first-child {
  padding: 36px 0px 34px 250px;
  color: #8A8A8A;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  border-bottom: 4px solid #F5F5F5;
  display: flex;
  flex-direction: column;
}

.firstlist {
  padding-top: 160px;
}

.whiteBg div:last-child {
  padding: 24px 30px 40px 30px;
  color: #444444;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
}

.whiteBg div:last-child span {
  color: #8a8a8a;
}

.whiteBg div:first-child>span:last-child {
  color: #16DFA9;
  font-weight: 500;
  font-size: 32px;
}

.topPic {
  width: 196px;
  position: absolute;
  left: 60px;
  top: 76px;
}

.line {
  width: 100%;
  height: 16px;
  background: #F7FBFF;
}

.contitle {
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 30px;
  padding-bottom: 10px;
}

.contitle>span {
  color: #2C62EE;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  margin-left: 20px;
}

.contentall {
  position: relative;
}

.content {
  padding: 0 44px;
  margin-top: 0;
  transform: translateY(-40px);
  -ms-transform: translateY(-40px);
  -webkit-transform: translateY(-40px);
}

.content span {
  padding-left: 20px;
  box-sizing: border-box;
  display: inline-block;
  border-left: 2px solid #96B1F7;
  padding-top: 26px;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  padding-bottom: 20px;
}

.contentlast {
  padding: 0 44px;
  margin-top: 0;
  transform: translateY(-40px);
  -ms-transform: translateY(-40px);
  -webkit-transform: translateY(-40px);
}

.contentlast> div {
  padding-left: 20px;
  box-sizing: border-box;
  display: inline-block;
  border-left: 2px solid #96B1F7;
  padding-top: 26px;
  font-family: Source Han Sans CN;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  padding-bottom: 20px;
}

.foot {
  display: flex !important;
  font-family: Source Han Sans CN;
}

.foot>div {
  display: flex !important;
  margin-left: 24px;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #F5F5F5;
}

.foot>div:last-child {
  align-items: center;
  color: #2C62EE;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
}

.foot>div>div:first-child {
  display: flex !important;
  flex-direction: column;
}

.foot>div>div:last-child {
  text-align: end;
}

.foot>div>div>span:first-child {
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  color: #444444;
}

.foot>div>div>span:last-child {
  color: #8A8A8A;
  font-style: normal;
  margin-top: 18px;
  font-weight: 500;
  font-size: 24px;
}
</style>