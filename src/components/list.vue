<template>
	<div id="list">
		<div class="clos1_list" v-for="(item,index) in mylist" :key="index" @click="getindex(index)">
			<div class="clos1_list_l">
				<img :src="item.icont" />
				<span>{{item.text}}</span>
			</div>
			<div class="clos1_list_r">
				<img src="../assets/icon/icon1/jiaotou.png" />
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{}
		},
		props:["mylist"],
		methods:{
			getindex(index){
				this.$emit("getindex",index)
			}
		}
	}
</script>

<style scoped>
	#list{
		width: 100%;
		height: auto;
		overflow: hidden;
		background: #fff;
		margin-bottom: 0.5rem;
	}
	.clos1_list{
		width: 96%;
		height: 100%;
		margin: auto;
		overflow: hidden;
		background: #fff;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #DADADA;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
	}
	.clos1_list_l{
		flex: 2;
		line-height: 112px;
		position: relative;
	}
	.clos1_list_l img{
		width: 40px;
		height:40px;
		position: absolute;
		top: 50%;
		margin-top: -3vw;
	}
	.clos1_list_l span{
		margin-left: 2rem;
		font-size: 0.8rem;
		color: #444;
	}
	.clos1_list_r{
		flex: 1;
		position: relative;
	}
	.clos1_list_r img{
		width: 26px;
		height: 40px;
		position: absolute;
		right: 0;
		top: 50%;
		margin-top: -1.5vw;
	}
</style>
