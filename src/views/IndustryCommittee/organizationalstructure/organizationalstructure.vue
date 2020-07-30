<template>
	<div id="orgZatLstr">
		<div class="orgZatLstr_box">
			<div v-for="(item,index) in topcontent" :key="index">
				<div class="orgZatLstr_box_clos1">
					<div class="orgZatLstr_box_clos1_titi">
						<img src="../../../assets/icon/icon1/titiicon.png" />
						<span>标题</span>
					</div>
					<div class="orgZatLstr_box_clos1_content">
						<p>
							{{item.content}}
						</p>
					</div>
				</div>
				<div class="orgZatLstr_box_clos2">
					<div class="orgZatLstr_box_clos1_titi">
						<img src="../../../assets/icon/icon1/titiicon.png" />
						<span>联系电话</span>
					</div>
					<p>{{item.title}}</p>
					<p>{{item.dianhua2}}</p>
				</div>
			</div>
			<div class="orgZatLstr_box_clos3">
				<div class="orgZatLstr_box_clos1_titi">
					<img src="../../../assets/icon/icon1/titiicon.png" />
					<span>标题</span>
				</div>
				<div class="orgZatLstr_box_clos3_list" v-for="(item,index) in list" :key="index">
					<div class="orgZatLstr_box_clos3_list_l">
						<img :src="item.expert_pic" />
					</div>
					<div class="orgZatLstr_box_clos3_list_r">
						<div class="orgZatLstr_box_clos3_list_r_l">
							<div>{{item.expert_name}}</div>
							<div>{{item.expert_profession}}</div>
						</div>
						<div class="orgZatLstr_box_clos3_list_r_r">
							<p>{{item.expert_type}}分</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {loding} from '../../../apis.js'
	import {incrmentloding} from '../../../apis.js'
	export default{
		data(){
			return{
				topcontent:[],
				list:[
					{
						name:'李晓峰',
						zhiw:'党支部书记',
						jifen:21
					},
					{
						name:'李晓峰2',
						zhiw:'党支部书记',
						jifen:8
					}
				]
			}
		},
		methods:{
			Initialloading:function(){
				var that=this
				loding(res=>{
					 console.log(res)
					this.topcontent=res
				})
			},
			a:function(){
				incrmentloding(msg=>{
					this.list=msg
					console.log(msg)
				})
				console.log(this.data)
			}
		},
		mounted() {
			this.Initialloading()
			this.a()
		}
	}
	
</script>

<style scoped>
	@import url("organizationalstructure.css");
</style>
