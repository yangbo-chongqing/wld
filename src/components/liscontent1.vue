<template>
	<div>
		<div class="clos1">
			<div class="clos1_t">
				<span>[街道之声]五里店街道召开上半年党群工作联席会</span>
			</div>
			<div class="clos1_c">
				<div>
					<img src="../assets/back/imgs1.png" />
				</div>
				<div>
					<img src="../assets/back/imgs2.png" />
				</div>
				<div>
					<img src="../assets/back/imgs3.png" />
				</div>
			</div>
			<div class="clos1_b">
				<div class="clos1_b_l">
					<img src="../assets/icon/icon1/timer1.png" />
					<span>2020-6-20</span>
				</div>
				<div class="clos1_b_r">
					<img src="../assets/icon/icon1/liulan.png" />
					<span>300</span>次
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.clos1{
		width: 100%;
		height: 119px;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid #E5E5E5;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
	}
	.clos1 .clos1_t{
		height: 48px;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.clos1 .clos1_t span{
		font-size: 16px;
		color: #444;
	}
	.clos1 .clos1_c{
		height: 6rem;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.clos1 .clos1_c div{
		width: 31%;
		height: 100%;
		overflow: hidden;
	}
	.clos1 .clos1_c div img{
		width: 100%;
		height: 100%;
	}
	.clos1_b{
		display: flex;
		flex-direction: row;
		overflow: hidden;
	}
	.clos1_b div{
		flex: 1;
		font-size: 0.875rem;
		color: #8A8A8A;
	}
	.clos1_b div {
		line-height: 3rem;
	}
</style>
