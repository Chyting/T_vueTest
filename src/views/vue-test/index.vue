<template>
  <div>
    <div class="box-linear"></div>
    <el-button @click="vuexData">{{name}}</el-button>
    <hr />
    <h2>{{title}}</h2>
    <input v-model="name" />
    <h1>{{name}}</h1>
    <el-button @click="clickMe" type="primary">点击我</el-button>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      name: '搞笑呢',
      title: 'hello world'
    };
  },
  mounted() {
    // this.$store.dispatch('saveFirstName', '王二麻子');
    // this.name = this.$store.state.firstName;
    window.setTimeout(() => {
      this.title = '你好啊';
    }, 100);
  },
  watch: {
    title: {
      handler() {
        this.title = '我有改变啦';
      },
      imediate: true
    }
  },
  methods: {
    ...mapActions(['saveFirstName']),
    vuexData() {
      this.$store.commit('saveFirstName', 'lisi');
      // this.$store.dispatch('saveFirstName','王二麻子')
      // this.saveFirstName('lis')
      this.name = this.$store.state.firstName;
    },
    clickMe() {
      this.title = '我不太好噢❤';
    }
  }
};
</script>
<style lang="less" scoped>
html {
  padding: 20px;
}
.box-linear {
  width: 100px;
  height: 100px;
  border: 1px solid blue;
  background-image: linear-gradient(90deg, rgb(192, 32, 197) 30%, #446fcc 70%);
}
</style>