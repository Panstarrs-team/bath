<template lang="pug">
  div
    span {{detail}}
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    let bathDetail

    await $axios
      .get('/bath', { params: { id: params.slug } })
      .then((result) => {
        bathDetail = result.data
      })
      .catch((err) => {
        if (err.response.status === 404) {
          bathDetail = '存在しない銭湯です。'
        }

        if (err.response.status === 500) {
          bathDetail =
            'エラーが発生しました。\nしばらくしてもう一度お試しください'
        }
      })

    return {
      detail: bathDetail
    }
  }
}
</script>

<style lang="scss"></style>
