<template lang="pug">
  p(v-if="message") Ошибка! {{message}}
</template>

<script>
export default {
  name: "ErrorMessage",
  props: {
    message: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>

<style scoped>

</style>
