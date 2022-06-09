<template lang="pug">
  div(id="app")
    h3 Вычислите сумму двух наименьших чисел
    p Введите нескоколько чисел черз запятую, чтобы вычислить сумму
    calculate-form(@calculate="result = $event", @beforeCalculate="result = null")
    p(v-if="result !== null") Cумма двух минимальных чисел: {{result}}
</template>

<script>
import CalculateForm from "@/components/CalculateForm";

export default {
  name: 'App',
  components: {
    CalculateForm
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
