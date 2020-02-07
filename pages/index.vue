<template lang="pug">
  .top
    section.recommend-section
      Heading(:subTitle="'編集室ピックアップ！'") おすすめの銭湯
      .recommend-section__reports.inner-margin
        //- Card(v-for="(post, key) in recommendedPosts.slice(0, 6)" :key="key" :post="post").recommend-section__report
      span {{ recommendedPosts }}
    section.mood-section
      Heading(:subTitle="'壁の絵、ケロリン、風情ある銭湯も。'") 雰囲気でたのしむ
      .mood-section__reports.inner-margin
        //- Card(v-for="(post, key) in nostalgicPosts.slice(0, 2)" :key="key" :thumbnailHeight="240" :post="post")
</template>

<script>
import firebase from 'firebase/app'
import Heading from '~/components/Heading'
// import Card from '~/components/Card'

// import recommendedPosts from '~/data/recommendedPosts.json'
// import nostalgicPosts from '~/data/nostalgicPosts.json'

import 'firebase/firestore'

export default {
  layout: 'base',
  components: {
    Heading
    // Card
  },
  data() {
    // return {
    //   recommendedPosts,
    //   nostalgicPosts
    // }
  },

  async asyncData() {
    const returnPosts =  (recommended, nostalgic) => {
      return {
        recommendedPosts: recommended,
        nostalgicPosts: nostalgic
      }
    }
    const testArray = []
    const db = await firebase
      .firestore()
      .collection('versions')
      .doc('1')
      .collection('article')
    return db
      .where('isPublished', '==', true)
      .where(
        'publishedAt',
        '<=',
        firebase.firestore.Timestamp.fromDate(new Date())
      )
      .limit(3)
      .orderBy('publishedAt')
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach((doc, i) => {
          testArray.push(doc.data())

          returnPosts(doc.data(), doc.data())
        })
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error)
      })
  }
  // mounted() {
  //   console.log(this.poo)
  //   const poo = async () => {
  //     const db = firebase
  //       .firestore()
  //       .collection('versions')
  //       .doc('1')
  //       .collection('article')
  //     const snapshot = await db
  //       .where('isPublished', '==', true)
  //       .where('publishedAt', '<=', firebase.firestore.Timestamp.now())
  //       .limit(3)
  //       .orderBy('publishedAt')
  //       .get()
  //     console.log(snapshot.size)
  //     console.log(this.recommendedPosts)
  //   }
  //   poo()
  // }
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
      :nth-child(1) {
        background-color: red;
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
