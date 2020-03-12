<template>
  <div class="wrap">
    <Header></Header>
    <div class="body">
      <h-form :model="model" :rules="rules">
        <h-form-item label="用户名" prop="userName">
          <h-input v-model="model.userName" placeholder="请输入用户名"/>
        </h-form-item>
        <h-form-item label="密码">
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
      console.log(this.model);
    }
  }
};
</script>

<style scoped>
</style>
