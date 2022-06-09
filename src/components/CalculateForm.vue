<template lang="pug">
  form(@keyup.enter.prevent="calculate()")
    textarea.form-item(v-model="value")
    error-message.form-item(:message="error")
    button.form-item(@click.prevent="calculate()") Вычислить
</template>

<script>
import ErrorMessage from "@/components/ErrorMessage";
const sumOfTwoMin = require('@/utils/sumOfTwoMin')

export default {
  name: "CalculateForm",
  components: {ErrorMessage},
  data() {
    return {
      value: '',
      error: ''
    }
  },
  methods: {
    calculate() {
      this.$emit('beforeCalculate')
      this.error = ''

      const value = this.value.replace(/\s+/g, '')

      try {
        const result = sumOfTwoMin(value.split(','))
        this.$emit('calculate', result)
      } catch (e) {
        this.error = e.message || ''
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
textarea
  width 100%
  max-width 320px
  height 180px
  padding 16px
  border none
  border-radius 15px
  background-color white
  box-shadow 0px 0px 5px rgba(0, 0, 0, 0.15)
  resize none
  font-family font-family Avenir, Helvetica, Arial, sans-serif
  font-size 18px
  color #2c3e50

textarea:focus-visible
  border none
  outline none
  box-shadow 0px 0px 5px rgba(0, 0, 0, 0.25)

button
  width 150px
  height 45px
  border none
  border-radius 15px
  background-color #42b983
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  font-family font-family Avenir, Helvetica, Arial, sans-serif
  font-size 18px
  font-weight 600
  color white
  cursor pointer

button:hover
  background-color #3ca676
  transition background-color 1s

button:active
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  transition background-color 0,5s

form
  display flex
  flex-direction column
  align-items center

.form-item
  margin-bottom 16px
  display block
</style>
