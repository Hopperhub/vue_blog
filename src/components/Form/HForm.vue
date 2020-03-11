<template>
	<div class="form">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'HForm', // HForm 组件
	provide() { // 向子孙代组件注入一个依赖
		return {
			form: this,
		};
	},
	props: {
		model: { // 表单数据对象
			type: Object,
			required: true,
		},
		rules: { // 校验规则对象
			type: Object,
		},
	},
};
</script>
