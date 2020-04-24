<template lang="pug">
  .heading
    h2.heading__title: slot
    span(v-if="subTitle").heading__subtitle {{subTitle}}
</template>

<script>
export default {
  props: {
    subTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.heading {
  padding: 0 0 35px 0;
  text-align: center;

  &__title {
    padding: 0 0 8px 0;
    font-size: 17px;
    font-weight: 500;
    letter-spacing: 2px;
    margin: 0 auto;
  }

  &__subtitle {
    padding: 0 0 10px 0;
    font-size: 9px;
    font-weight: 500;
    letter-spacing: 2px;
    margin: 0 auto;
  }
}
</style>
