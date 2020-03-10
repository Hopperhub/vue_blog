<template>
  <div class="wrap">
    <Header></Header>
    <div class="body">
      <h-input v-model="inputVal" />
			<div>{{inputVal}}</div>
    </div>
  </div>
</template>

<script>
import Header from './Header/index'
import HInput from './Form/HInput'

export default {
  name: 'Index',
  components: {
    Header,
    HInput
  },
  data () {
    return {
      inputVal: '123'
    }
  }
}
</script>

<style scoped>
</style>
