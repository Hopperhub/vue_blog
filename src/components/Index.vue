<template>
	<div class="wrap">
		<Header></Header>
		<div class="body">
			<h-form :model="model" :rules="rules" ref="loginForm">
				<h-form-item label="用户名" prop="userName">
					<h-input v-model="model.userName" placeholder="请输入用户名"/>
				</h-form-item>
				<h-form-item label="密码" prop="password">
					<h-input v-model="model.password" type="password" placeholder="请输入用户名"/>
				</h-form-item>
				<h-form-item>
					<button @click="login">登录</button>
				</h-form-item>
			</h-form>
		</div>
	</div>
</template>

<script>
import Header from './Header/index';
import HForm from './Form/HForm';
import HFormItem from './Form/HFormItem';
import HInput from './Form/HInput';
import Notice from './Notice';
import create from '../utils/create';

export default {
	name: 'Index',
	components: {
		Header,
		HForm,
		HFormItem,
		HInput
	},
	data () {
		return {
			model: {
				userName: '',
				password: '',
			},
			rules: {
				userName: [{
					required: true,
					message: '请输入用户名',
				}],
				password: [{
					required: true,
					message: '请输入密码',
				}],
			},
		};
	},
	methods: {
		login() {
			this.$refs.loginForm.validate(res => {
				// if (res) {
				// 	this.$Message.success('表单校验通过');
				// } else {
				// 	this.$Message.error('表单校验失败');
				// }
				const notice = create(Notice, {
					title: '提醒',
					message: res ? '表单校验通过' : '表单校验失败',
				});
				notice.show();
			})
		}
	}
};
</script>
