<template>
  <div class="wrap">
    <Header></Header>
    <div class="body">
      <h-form>
        <h-form-item label="用户名">
          <h-input v-model="inputVal" placeholder="请输入用户名"/>
        </h-form-item>
      </h-form>
			<div>{{inputVal}}</div>
    </div>
  </div>
</template>

<script>
import Header from './Header/index'
import HForm from './Form/HForm'
import HFormItem from './Form/HFormItem'
import HInput from './Form/HInput'

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
      inputVal: ''
    }
  }
}
</script>

<style scoped>
</style>
