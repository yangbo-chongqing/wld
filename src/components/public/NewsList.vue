<template>
  <div class="NewsList" @click.stop="go('社区动态详情')">
    <!--@click="goNews(news.news_id)"-->
    <img :src="news.contentPic" />
    <div class="info">
      <h6>
        <span v-show="!news.isNotice">
          <span class="fontcolor">「</span>
          {{news.typeName | formatType}}
          <span class="fontcolor">」</span>
        </span>
        {{ news.title }}
      </h6>
      <p>
        <span>
          <img src="../../assets/image/clock.png" alt />
          <span>{{news.create_date | formatTime}}</span>
        </span>
        <span>
          <img src="../../assets/image/book.png" alt />
          <span>{{ news.CreateName }}</span>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsList",
  props: {
    news: {
      type: Object,
      required: true
    }
  },
  methods: {
    //去新闻页面
    goNews(news_id) {
      this.switchPage({
        pageRouter: "/NewsDetails.html",
        params: {
          news_id
        }
      });
    },
    go(title) {
      this.$router.push({
        path: "/newsDetails",
        query: {
          title: title
        }
      });
    }
  },
  created() {
    console.log(this.news);
  },
  filters: {
    formatTime(date) {
      let index = date.lastIndexOf(" "); //截取空格前的年月日  不要具体的时间
      return date.substring(0, index);
    },
    formatType(type) {
      return "街道之声";
    },
    formatUserImg(img) {
      return baseImgUrl + img;
    }
    // formatImg(pic) {
    //   if (!pic) {
    //     return require("../../assets/img/noImg.png"); //如果后台提供的图片地址为null，使用默认图片
    //   } else {
    //     return pic;
    //   }
    // }
  }
};
</script>

<style scoped lang="stylus">
.NewsList {
  width: 100%;
  box-sizing: border-box;
  background: #ffffff;
  height: 240px;
  padding: 52px 30px 63px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #e3e3e3;

  img {
    width: 220px;
    height: 165px;
    border-right: 10px;
  }

  .info {
    width: 446px;
    height: 165px;

    h6 {
      width: 100%;
      height: 110px;
      line-height: 38px;
      font-size: 28px;
      nLine();
      font-weight: 400;

      span {
        color: #000;
      }
    }

    p {
      margin-top: 20px;
      height: 24px;
      display: flex;
      margin-right: 16px;
      align-items: center;

      img {
        width: 24px;
        height: 24px;
        margin-right: 16px;
      }

      span {
        font-size: 24px;
        color: #8A8A8A;
      }

      &:last-of-type {
        justify-content: space-between;

        span {
          display: flex;
          align-items: center;
          color: #8A8A8A;
        }
      }
    }
  }
}

.fontcolor {
  color: #2C62EE !important;
}
</style>
