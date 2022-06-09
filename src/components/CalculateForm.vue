<template lang="pug">
  form(@keyup.enter.prevent="calculate()")
    textarea(v-model="value")
    button(@click.prevent="calculate()") biba
</template>

<script>
import {sumOfTwoMin} from "@/utils/sumOfTwoMin";

export default {
  name: "CalculateForm",
  data() {
    return {
      value: ''
    }
  },
  methods: {
    calculate() {
      let result = 0
      const value = this.value.replace(/\s+/g, '')

      if(value !== ''){
        result = sumOfTwoMin(value.split(','))
      }

      this.$emit('calculate', result)
    },
  }
}
</script>

<style scoped>

</style>
