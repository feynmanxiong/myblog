<template>
  <div>
    <h1>Home</h1>
    <el-button type="primary" @click="getArticle">调用后台接口</el-button>
    <el-input v-model="inpContent"></el-input>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      inpContent: 'HOME'
    }
  },
  methods: {
    getArticle () {
      this.$http.get('/api/getArticle')
        .then(res => {
          console.log('res', res)
          this.inpContent = res.data.data
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
