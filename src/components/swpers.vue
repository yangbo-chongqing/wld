<template>
	<div>
	    <!-- <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for="(item,index) in Swiperimg" :key="index" @click="gotocintroduction">
				<div>
					<img :src="item.imgs" />
				</div>
				<div>
					<p>{{item.text}}</p>
					<p>{{item.ipl}}</p>
				</div>
			</div>
	    </div> -->
		<div class="swiper-container" id="swiper">
 <div class="swiper-wrapper">
  <div class="swiper-slide" v-for="(item,$index) in Swiperimg">
  <img :src="item.imgs" @click="gotocintroduction"/>
  <p>{{item.text}}</p>
  <p>联系电话:{{item.ipl}}</p>
  </div>
 </div>
 <!-- Add Pagination -->
 <div class="swiper-pagination"></div>
 </div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';
	export default{
		data(){
			return{
				Swiperimg:[
					{
						imgs:require('../assets/back/pepol1.png'),
						text:'杨勇「党支部书记」',
						ipl:"188****1766"
					},
					{
						imgs:require('../assets/back/picter2.png'),
						text:'周树荣「社区党委委员」',
						ipl:"198****1766"
					},
					{
						imgs:require('../assets/back/picter1.png'),
						text:'桂海啸「支部书记」3',
						ipl:"198****1766"
					},
				],
		}
		
		},
		components: {
		    // Swiper,
		    // SwiperSlide
		  },
		  methods:{
		  	a(){
				var state=this;
		  		setTimeout(function () {
		  		 state.swiperObj = new Swiper('#swiper', {
		  		 loop: true,
				 effect : 'coverflow',
				 slidesPerView: 3,
				 centeredSlides: true,
		  		 pagination: '.swiper-pagination',
		  		 autoplay: 2000,
		  		 paginationClickable: true
		  		 });
		  		}, 100)
		  	},
		  	// 页面跳转人物介绍
		  	gotocintroduction(){
		  		this.$router.push('/cintroduction')
		  	}
		  },
		  mounted(){
		  	this.a()
		  },
	}
</script>

<style scoped="scoped">
	.swiper-wrapper{
	                width:1200px;
	                height:500px;
	            }
				.swiper-slide{
					width: 100px;
				}
				.swiper-slide-active{
				 background:#fff;
				 color:#000;}
				 .swiper-wrapper{
					width: 2000px;
				 }
				 .swiper-slide img{
					 width: 100%;
					 height: auto;
				 }
				 .swiper-slide p{
					 color: #000;
					 font-size: 14px;
					 text-align: center;
				 }
	/* .swiper-container{
		overflow: hidden;
		width: 100%;
	}
	 
	  .swiper-slide{
		  width: 180px;
		  height: 80px;
		  float: left;
		  background: red;
		  text-align: center;
		  font-size:14px;
	  }
	  .swiper-slide div:first-child{
		  width: 100%;
		  height: 30vw;
		  overflow: hidden;
	  }
	  .swiper-slide div:first-child img{
		  width: 100%;
		  height: 100%;
	  } */
</style>
