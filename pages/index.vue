<template lang="pug">
  .top
    section.top-report.inner-margin
      .top-report__reports
        a(href="https://google.com")
          .top-report__report
            img(src="https://images.unsplash.com/photo-1568806265673-06ed9a645173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60").top-report__report__img
            .top-report__report__text めっちゃビルきれい
        a(href="https://google.com")
          .top-report__report
            img(src="https://images.unsplash.com/photo-1568806265673-06ed9a645173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60").top-report__report__img
            .top-report__report__text めっちゃビルきれい
        a(href="https://google.com")
          .top-report__report
            img(src="https://images.unsplash.com/photo-1568806265673-06ed9a645173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60").top-report__report__img
            .top-report__report__text めっちゃビルきれい
        a(href="https://google.com")
          .top-report__report
            img(src="https://images.unsplash.com/photo-1568806265673-06ed9a645173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60").top-report__report__img
            .top-report__report__text まるで実家の様な安心感そしていい匂いな気がするけどそうでもないだけどやっぱいい匂いかもしれないいや待てよそうでもないかもんー微妙そう思うけど値段はいい感じそして輝くウルトラソウル
</template>

<script>
export default {
  layout: 'base'
}
</script>

<style lang="scss">
.top-report {
  &__reports {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;

    a {
      text-decoration: none;
    }
  }
  &__report {
    filter: drop-shadow(0 0 0.75rem $bg-gray);
    border-radius: 5px;
    background-color: $bg-white;
    overflow: hidden;

    &__text {
      color: $bg-dark;
      padding: 10px;
    }

    &__img {
      height: 120px;
      object-fit: cover;
      width: 100%;
    }
  }
}
</style>
