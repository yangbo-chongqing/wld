<!-- 加入组织 -->
<template>
	<div id="joinorga">
		<van-form @submit="onSubmit">
			<van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
			<van-dropdown-menu>
			  <van-dropdown-item v-model="value1" :options="option1" />
			</van-dropdown-menu>
			<div class="ages">
				<van-dropdown-menu>
				  <van-dropdown-item v-model="value2" :options="option2" />
				</van-dropdown-menu>
			</div>
			<div style="margin: 16px;">
				<van-button round block type="info" native-type="submit">
					提交
				</van-button>
			</div>
		</van-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username:'',// 姓名
				value1: 0,
				value2: 0,
				option1: [//男女
				    { text: '男', value: 0 },
				    { text: '女', value: 1 }
				],
				option2: [//年龄
				    { text: '18', value: 0 },
				    { text: '19', value: 1 },
					{ text: '20', value: 2 },
					{ text: '21', value: 3 },
					{ text: '22', value: 4 },
					{ text: '23', value: 5 },
					{ text: '24', value: 6 },
					{ text: '25', value: 7 },
					{ text: '26', value: 8 },
					{ text: '27', value: 9 },
					{ text: '28', value: 10 },
					{ text: '29', value: 11 },
					{ text: '30', value: 12 },
					{ text: '31', value: 13 },
					{ text: '32', value: 14 },
					{ text: '33', value: 15 },
					{ text: '34', value: 16 },
					{ text: '35', value: 17 },
					{ text: '36', value: 18 },
					{ text: '37', value: 19 },
					{ text: '38', value: 20 },
					{ text: '39', value: 21 },
					{ text: '40', value: 22 },
					{ text: '41', value: 23 },
					{ text: '42', value: 24 },
					{ text: '43', value: 25 },
					{ text: '44', value: 26 },
					{ text: '45', value: 27 },
					{ text: '46', value: 28 },
					{ text: '47', value: 29 },
					{ text: '48', value: 30 },
					{ text: '49', value: 31 },
					{ text: '50', value: 32 }
				],
			}
		},
		methods: {

			onSubmit(values) {
				console.log('submit', values);
			}

		}
	}
</script>

<style>
</style>
