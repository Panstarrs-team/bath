<template lang="pug">
  a(href="https://google.com")
    .card
      img(:src="post.thumbnail" :style="`height: ${thumbnailHeight}px`").card__img
      .card__text
        h3.card__title {{post.title}} 
        p.card__desc {{post.description}} 
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    thumbnailHeight: {
      type: Number,
      default: 120
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  filter: drop-shadow(0 0 10px $bg-gray);
  border-radius: 5px;
  background-color: $bg-white;
  overflow: hidden;
  transform: translateY(0px);
  transition: 0.1s ease;
  height: 100%;

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
    object-fit: cover;
    width: 100%;
  }
}
</style>
