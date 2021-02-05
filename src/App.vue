<template>
  <div id="app">
    插件开发
    <cl-button>12312313</cl-button>
    <cl-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </cl-switch>
   
  </div>
</template>

<script>
// import Vue from "vue";
// import Plugin from "./plugin";
// const { Button , Switch} = Plugin
// Vue.use(Button);
// Vue.use(Switch);

export default {
  name: "App",
  data() {
    return {
      value: true,
    };
  },
  components: {},
  watch: {
    value() {
      console.log(this.value);
    },
  },
  mounted() {
   
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
