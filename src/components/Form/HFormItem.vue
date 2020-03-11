<template >
	<div class="form__item">
		<label class="form__item__label" v-if="label">{{label}}</label>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'HFormItem', // formItem 组件
	props: {
		label: {
			type: String,
			default: '',
		},
	},
};
</script>