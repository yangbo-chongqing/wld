<template>
	<div id="titi">
		<div class="clos3_titi">
			<div class="clos3_titi_l">
				<img :src="icon" />
				<span>{{tititext}}</span>
			</div>
			<div class="clos3_titi_r" v-show="ber">更多></div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{}
		},
		props:['icon','tititext','ber']
	}
</script>

<style scoped="scoped">
	.clos3_titi{
		width: 100%;
		height: 88px;
		background: #fff;
		line-height: 88px;
		font-size:16px;
		color: #444;
		position: relative;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #e5e5e5;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
	}
	.clos3_titi .clos3_titi_l{
		flex: 2;
	}
	.clos3_titi .clos3_titi_r{
		flex: 1;
		text-align: right;
		margin-right: 16px;
		font-size: 14px;
		color: #8a8a8a;
	}
	.clos3_titi img{
		width: 40px;
		height: 40px;
		position: absolute;
		top: 50%;
		margin-top: -20px;
		left: 16px;
	}
	.clos3_titi span{
		margin-left: 2rem;
	}
</style>
