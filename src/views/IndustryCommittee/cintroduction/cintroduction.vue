<template>
  <div id="cintroduction">
    <MyHeader :title="'人物介绍'" />
    <div class="cintroduction_clos1">
      <div class="cintroduction_clos1_top">
        <div class="cintroduction_clos1_top_l">
          <!-- 标题图标-->
          <img src="../../../assets/icon/icon1/icon001.png" />
        </div>
        <div class="cintroduction_clos1_top_c">
          <!-- 标题-->
          <span>人物信息</span>
        </div>
        <div class="cintroduction_clos1_top_r">
          <div class="lines"></div>
        </div>
        <!-- 线-->
      </div>
      <div class="cintroduction_clos1_bott">
        <div class="cintroduction_clos1_bott_l">
          <img src="../../../assets/back/picter1.png" />
        </div>
        <div class="cintroduction_clos1_bott_r">
          <p>姓 名：周树荣</p>
          <p>职 务：社区党委委员</p>
          <p>是否党员：否</p>
          <p>联系电话：158****1271</p>
        </div>
      </div>
    </div>
    <div class="cintroduction_clos1">
      <div class="cintroduction_clos1_top">
        <div class="cintroduction_clos1_top_l">
          <!-- 标题图标-->
          <img src="../../../assets/icon/icon1/icon002.png" />
        </div>
        <div class="cintroduction_clos1_top_c">
          <!-- 标题-->
          <span>职务介绍</span>
        </div>
        <div class="cintroduction_clos1_top_r">
          <div class="lines"></div>
        </div>
        <!-- 线-->
      </div>
      <div class="contents">
        <p>
          杨邦维一行首先来到井口镇宏城名都社区，了解了宏城名都社区相关情况。据介绍，宏城名都社区坚决将
          矛盾化解在萌芽状态，提炼出“三联三心”工作法（即党建联抓强核心、治理联议显齐心、服务联动促贴心）
          ，积极引导居民参与社会治理，有效提升社会治理能力，维护辖区社会安定。 杨邦维一行首先来
          到井口镇宏城名都社区，了解了宏城名都社区相关情况。据介绍，宏城名都社区坚决将矛盾化解在萌芽状态，
          提炼出“三联三心”工作法（即党建联抓强核心、治理联议显齐心、服务联动促贴心），积极引导居民参与社会治理，
          有效提升社会治理能力，维护辖区社会安定。随后，杨邦维一行来到井口镇经济桥社区。据介绍，经济桥社区
          打造“家在社区·五桥连心”创文示范项目，架起了社区与居民群众之间的五座“连心桥”，让枫桥经验在社区落地生根。
          杨邦维一行首先来到井口镇宏城名都社区，了解了宏城名都社区相关情况。据介绍，宏城名都社区坚决将矛盾化解在
          萌芽状态，提炼出“三联三心”工作法（即党建联抓强核心、治理联议显齐心、服务联动促贴心），积极引导居民参与社
          会治理，有效提升社会治理能力，维护辖区社会安定。 杨邦维一行首先来到井口镇宏城名都社区，了解了宏城
          名都社区相关情况。据介绍，宏城名都社区坚决将矛盾化解在萌芽状态，提炼出“三联三心”工作法（即党建联抓强核心、
          治理联议显齐心、服务联动促贴心），积极引导居民参与社会治理，有效提升社会治理能力，维护辖区社会安定。
          随后，杨邦维一行来到井口镇经济桥社区。据介绍，经济桥社区打造“家在社区·五桥连心”创文示范项目，架起了社区
          与居民群众之间的五座“连心桥”，让枫桥经验在社区落地生根。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "../../../components/public/MyHeader";
export default {
  name: "cintroduction",
  components: {
    MyHeader,
  },
};
</script>

<style scoped="scoped">
@import url("cintroduction.css");
</style>
