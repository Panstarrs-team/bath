<template lang="pug">
  .top
    section.top-report.inner-margin
      Heading(:subTitle="'編集室ピックアップ！'") おすすめの銭湯
      .top-report__reports
        a(v-for="post in recommendedPosts.slice(0, 6)" :href="post.link")
          .top-report__report
            img(:src="post.imageUrl").top-report__report__img
            .top-report__report__text
              h3.top-report__report__title {{post.name}} 
              p.top-report__report__desc {{post.desc}} 
</template>

<script>
import Heading from '~/components/heading'

export default {
  layout: 'base',
  data() {
    return {
      recommendedPosts: [
        {
          name: '金春湯',
          link: 'https://example.com',
          desc:
            '江戸時代から続く金春湯。\n当時は、芸者さんが通っていたとのこと！',
          imageUrl:
            'https://iwiz-lifemagazine.c.yimg.jp/im_siggZFtwOdArgPGh9kYdpo4WTw---x800/d/mellow-01/citykumamoto_atobe/3b/9/e438'
        },
        {
          name: '龍神堂爆弾温泉2',
          link: 'https://example.com',
          desc:
            '江戸時代から続く金春湯。\n当時は、芸者さんが通っていたとのこと！',
          imageUrl:
            'https://www.jalan.net/news/img/2019/08/1908_kanto_2_043-670x443.jpg'
        },
        {
          name: '龍神堂爆弾温泉3',
          link: 'https://example.com',
          desc:
            '江戸時代から続く金春湯。\n当時は、芸者さんが通っていたとのこと！',
          imageUrl:
            'https://cdn.advertimes.com/wp-content/uploads/2019/01/at9012800058.jpg'
        },
        {
          name: '龍神堂爆弾温泉4',
          link: 'https://example.com',
          desc:
            '江戸時代から続く金春湯。\n当時は、芸者さんが通っていたとのこと！',
          imageUrl:
            'https://www.visit.city-tokyo-nakano.jp/wp-content/uploads/2019/04/IMG_1978.jpg'
        },
        {
          name: '龍神堂爆弾温泉',
          link: 'https://example.com',
          desc:
            '江戸時代から続く金春湯。\n当時は、芸者さんが通っていたとのこと！',
          imageUrl:
            'https://katsushika1010.com/wp-content/uploads/2016/12/01_kana_kanamachiyu_a.jpg'
        },
        {
          name: '龍神堂爆弾温泉2',
          link: 'https://example.com',
          desc:
            '江戸時代から続く金春湯。\n当時は、芸者さんが通っていたとのこと！',
          imageUrl:
            'https://sumaity.com/press/system/press_image/2017/09/01/V5hG-jJonF4XhTqbZGUJP9rLCgk5LeQO6HBKybfkdLg/extract/5823c984cd035d56f9d7edff1754024a_m.jpg'
        }
      ]
    }
  },
  components: {
    Heading
  }
}
</script>

<style lang="scss">
.top-report {
  padding: 0 20px;

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

    a {
      text-decoration: none;
    }
  }

  &__report {
    filter: drop-shadow(0 0 0.75rem $bg-gray);
    border-radius: 5px;
    background-color: $bg-white;
    overflow: hidden;
    transform: translateY(0px);
    transition: 0.1s ease;

    &:hover {
      transform: translateY(-5px);
    }

    &__text {
      color: $bg-dark;
      padding: 10px 20px 15px 20px;
    }

    &__title {
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 2px;
      margin-bottom: 10px;
      color: $text-gray;
    }

    &__desc {
      font-size: 10px;
      font-weight: 400;
      letter-spacing: 1px;
      color: $text-gray;
      white-space: pre-wrap;
    }

    &__img {
      height: 120px;
      object-fit: cover;
      width: 100%;
    }
  }
}
</style>
