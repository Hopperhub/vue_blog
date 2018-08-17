<template>
  <div class="header">
    <h2 class="title">
      <img src="../../assets/blog.svg" alt="">
      {{name}}
    </h2>
    <div>
      <Button @click="open">Default</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      name: 'My Blog'
    }
  },
  methods: {
    open () {
      this.$Notice.info({
        title: '你是谁'
      })
    }
  }
}
</script>

<style scoped>
.header {
  height: 64px;
  line-height: 64px;
  box-shadow: 0px 0px 2px #ccc;
  padding: 0 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.header .title img {
  width: 20px;
  vertical-align: middle;
}
</style>
