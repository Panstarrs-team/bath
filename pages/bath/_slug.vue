<template lang="pug">
  div
    span {{item}}
</template>

<script>
export default {
  asyncData({ params }) {
    return {
      item: params.slug
    }
  }
}
</script>

<style lang="scss"></style>
