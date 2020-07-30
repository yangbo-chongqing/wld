<template>
	<div>
		<div class="listcontent" v-for="(item,index) in listcontent" :key="index">
			<div class="listcontent_l">
				<div class="listcontent_l_img">
					<img :src="item.imgs" />
				</div>
		    </div>
		    <div class="listcontent_r">
				<div class="listcontent_r_content">
					<div class="listcontent_r_content_t">
						<p>
						 <span style="color: #38ABFF;">[街道之声]</span>
						 <span>{{item.text}}</span>
						</p>
					</div>
					<div class="listcontent_r_content_b">
						<div class="listcontent_r_content_b_l">
							 <img :src="item.icon1" />
							<span>{{item.timer}}</span>
						</div>
						<div class="listcontent_r_content_b_r">
							<img :src="item.icon2" />
							<span style="color: #38ABFF;">{{item.lockcs}}</span>次
						</div>
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
			'listcontent'
		]
	}
</script>

<style>
	.listcontent{
		width: 100%;
		height: 238px;
		overflow: hidden;
		display: flex;
		flex-direction: row;
		border-bottom: 1px solid #E5E5E5;
		box-sizing: border-box;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		margin-bottom: 20px;
	}
	.listcontent .listcontent_l{
		flex: 1;
		position: relative;
	}
	.listcontent_l_img{
		width: 220px;
		height:166px;
		overflow: hidden;
		position: absolute;
		top: 50%;
		margin-top: -83px;
	}
	.listcontent .listcontent_l .listcontent_l_img img{
		width: 100%;
		height: 100%;
	}
	.listcontent .listcontent_r{
		flex: 2;
		padding-left: 24px;
		position: relative;
	}
	.listcontent_r_content{
		width: 100%;
		height: 5.1875rem;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 50%;
		margin-top: -2.5rem;
	}
	.listcontent_r_content_t{
		flex: 2;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
		font-size: 1rem;
		color: #444;
	} 
	.listcontent_r_content_b{
		flex: 1;
		display: flex;
		flex-direction: row;
		overflow: hidden;
	}
	.listcontent_r_content_b .listcontent_r_content_b_l{
		flex: 1;
		overflow: hidden;
		font-size: 0.75rem;
		color: #8A8A8A;
	}
	.listcontent_r_content_b_l img{
		width: 0.6875rem;
		height: 0.75rem;
		margin-top: 0.5rem;
	}
	.listcontent_r_content_b_l span{
		line-height: 1;
		margin-left: 0.2rem;
	}
	.listcontent_r_content_b .listcontent_r_content_b_r{
		flex: 1;
		position: relative;
		font-size: 0.75rem;
		line-height: 2.5;
	}
	.listcontent_r_content_b .listcontent_r_content_b_r span{
		margin-left: 1rem;
	}
	.listcontent_r_content_b_r img{
		width: 0.6875rem;
		height: 0.75rem;
		position: absolute;
		top: 50%;
		margin-top: -0.34rem;
	}
</style>
