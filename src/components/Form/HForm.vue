<template>
	<div class="form">
		<slot></slot>
	</div>
</template>

<script>
import { EventBus } from '../../utils/utils';

export default {
	name: 'HForm', // HForm 组件
	provide() { // 向子孙代组件注入一个依赖
		return {
			form: this,
			bus: new EventBus(),
		};
	},
	props: {
		model: { // 表单数据
			type: Object,
			required: true,
		},
		rules: { // 校验规则
			type: Object,
		},
	},
};
</script>
