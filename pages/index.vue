<template lang="pug">
  .top
    section.recommend-section
      Heading(:subTitle="'全部素敵だけどね。'") おすすめの銭湯
      .recommend-section__reports.inner-margin
        Card(v-for="(post, key) in parsedRecommendedPosts.slice(0, 6)" :key="key" :post="post" :thumbnailHeight='160').recommend-section__report
    section.mood-section
      Heading(:subTitle="'壁の絵、ケロリン、風情ある銭湯も。'") 雰囲気でたのしむ
      .mood-section__reports.inner-margin
        //- Card(v-for="(post, key) in nostalgicPosts.slice(0, 2)" :key="key" :thumbnailHeight="240" :post="post")
</template>

<script>
import Heading from '~/components/Heading'
import Card from '~/components/Card'

export default {
  layout: 'base',
  components: {
    Heading,
    Card
  },
  async asyncData({ $axios }) {
    let recommended

    await $axios
      .get('/api/recommended')
      .then((posts) => {
        recommended = posts.data
      })
      .catch((err) => console.error(err))

    return { recommendedPosts: recommended }
  },
  computed: {
    parsedRecommendedPosts() {
      return Object.keys(this.recommendedPosts)
    }
  }
}
</script>

<style lang="scss">
.recommend-section {
  padding: 30px 20px 80px 20px;

  &__reports {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;

    @media screen and (max-width: $size-tablet) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: $size-mobile) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__report {
    @media screen and (max-width: $size-mobile) {
      grid-template-columns: repeat(1, 1fr);

      &:nth-of-type(4),
      &:nth-of-type(5),
      &:nth-of-type(6) {
        display: none;
      }
    }
  }
}

.mood-section {
  padding: 60px 20px;

  &__reports {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;

    @media screen and (max-width: $size-mobile) {
      grid-template-columns: repeat(1, 1fr);
    }

    a {
      text-decoration: none;
    }
  }
}
</style>
