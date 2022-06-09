<template lang="pug">
  form(@keyup.enter.prevent="calculate()")
    textarea(v-model="value")
    error-message(:message="error")
    button(@click.prevent="calculate()") biba
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

<style scoped>

</style>
