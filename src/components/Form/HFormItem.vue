<template >
	<div class="form__item">
		<label class="form__item__label" v-if="label">{{label}}</label>
		<slot></slot>
		<p class="error" v-if="errorMsg">{{errorMsg}}</p>
	</div>
</template>

<script>
import Schema from 'async-validator';

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
	data() {
		return {
			errorMsg: '',
		};
	},
	mounted() {
		this.eventListen();
	},
	methods: {
		eventListen() {
			if (!this.prop) return false;
			this.bus.$on(this.prop, () => {
				this.validate();
			});
		},
		// 数据校验
		validate() {
			const { model, rules } = this.form;
			const value = model[this.prop];
			const rule = rules[this.prop];
			const schema = new Schema({ [this.prop]: rule });
			return schema.validate({ [this.prop]: value }, errors => {
				this.errorMsg = errors ? errors[0].message : '';
			});
		},
	},
};
</script>