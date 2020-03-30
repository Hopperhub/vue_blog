import Vue from 'vue';

export default function (component, props) {
	// vue 实例
	const vm = new Vue({
		render: h => h(component, {props}),
	}).$mount();
	// 挂载 DOM 元素
	document.body.appendChild(vm.$el);

	// 回收
	// 组件实例
	const comp = vm.$children[0];
	comp.remove = () => {
		document.body.removeChild(vm.$el);
		comp.$destroy();
	}
	return comp;
}
