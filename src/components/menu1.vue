<template>
	<div id="menu1">
		<div class="menu1_clos1">
			<div class="menu1_clos1_box">
				<!-- <div class="titi">
					<img src="../assets/icon/icon1/titiicon.png" />
					<span>{{titi}}</span>
				</div> -->
				<div class="list">
					<div class="list_box" v-for="(item,index) in list1" :key="index" @click="goto(index)">
						<img :src="item.imgs" />
						<span>{{item.text1}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{}
		},
		props:[
			'list1',
			'index'
		],
		methods:{
			goto(index) {
			this.$emit("getData", index);
			}
		}
	}
</script>

<style scoped="scoped">
	#menu1 {
		width: 100%;
		height: auto;
		overflow: hidden;
	}

	.menu1_clos1 {
		width:90%;
		height: auto;
		margin: auto;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}
	.menu1_clos1_box{
		width: 100%;
		height: auto;
		margin: auto;
		overflow: hidden;
	}
	.titi{
		width: 100%;
		height: 6vh;
		background: #fff;
		border-bottom: 1px solid #E5E5E5;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		display: flex;
		flex-direction: row;
		line-height: 6vh;
		position: relative;
	}
	.titi img{
		width: 4vw;
		height: 4vw;
		position: absolute;
		top: 50%;
		margin-top: -2vw;
	}
	.titi span{
		margin-left: 6vw;
		font-size: 1rem;
		color: #444;
	}
	.list_box{
		width: 25%;
		height: auto;
		margin-top: 0.3rem;
		position: relative;
		display: flex;
		flex-direction: column;
	}
	.list{
		display: flex;
		flex-direction: row;
		justify-content:space-between;
		flex-wrap: wrap;
		background: #fff;
		padding-bottom: 0.5rem;
	}
	.list_box img{
		width: 80px;
		height: 80px;
		position: absolute;
		left: 50%;
		margin-left: -40px;
	}
	.list_box span{
		display: block;
		text-align: center;
		margin-top: 96px;
		font-size: 14px;
		color: #444;
	}
</style>
