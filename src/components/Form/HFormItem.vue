<template >
	<div class="form__item">
		<label class="form__item__label" v-if="label">{{label}}</label>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'HFormItem', // formItem 组件
	inject: ['form', 'bus'],
	provide() {
		return {
			prop: this.prop,
		};
	},
	props: {
		label: {
			type: String,
			default: '',
		},
		prop: {
			type: String,
			default: '',
		},
	},
	mounted() {
		this.eventListen();
	},
	methods: {
		eventListen() {
			if (!this.prop) return false;
			this.bus.$on(this.prop, prop => {
				console.log(prop);
			});
		},
	},
};
</script>