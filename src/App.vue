<template lang="pug">
  div(id="app")
    biba
    calculate-form(@calculate="result = $event")
    p(v-if="result !== null") Cумма двух минимальных чисел {{result}}
    img(alt="Vue logo", src="./assets/logo.png")
    HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Biba from "@/components/Biba";
import CalculateForm from "@/components/CalculateForm";

export default {
  name: 'App',
  components: {
    CalculateForm,
    Biba,
    HelloWorld
  },
  data() {
    return {
      result: null,
    }
  },
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
