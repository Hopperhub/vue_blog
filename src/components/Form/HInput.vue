<template>
  <div>
    <input :type="type" :value="value" @input="input" />
  </div>
</template>

<script>
export default {
  name: 'HInput', // input 组件
  model: {
    // 组件上的 v-model 会默认使用名为 value 的 prop 和名为 input 的 event 事件
    prop: 'value',
    event: 'input'
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    input ({ target: { value } }) {
        this.$emit('input', value);
    }
  }
}
</script>
