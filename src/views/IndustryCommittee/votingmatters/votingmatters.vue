<template>
	<div id="votingmatters">
		<div class="votingmatters_clos1">
			<div class="votingmatters_clos1_l" v-for="(item,index) in titis" :key="index" @click="tableqh(index),shuz=index">
				<p :class="shuz==index?'activejpsx':''">{{item}}</p>
			</div>
		</div>
		<div class="contents">
			<div class="contents1" v-if="nuber">
				<div class="content_clos1s">
					<div class="content_clos1s_l">
						<img src="../../../assets/back/myback.png" />
					</div>
					<div class="content_clos1s_r">2</div>
				</div>
			</div>
			<div class="contents1" v-else>1</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				nuber:true,
				shuz:0,
				titis:['待开始','已结束']
			}
		},
		methods:{
			tableqh(e){//切换选项卡
				console.log(e);
				var es=true
				if(e==0){
					this.nuber=true
				}else{
					this.nuber=false
				}
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("votingmatters.css");
</style>
