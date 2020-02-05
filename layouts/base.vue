<template lang="pug">
  div.container
    header.container__header
      .waves
        .waves__dark
        .waves__light
      .container__header__texts.inner-margin
        nuxt-link(to="/")
          h1.container__title フロぶらりー
            img(src="~/assets/images/icons/hot_tub.svg")
        h3.container__subtitle おふろを探そう。
    main
      nuxt
</template>

<style lang="scss">
body {
  margin: 0;
  background-image: url('~assets/images/textures/wave.svg');
  background-repeat: repeat;
  background-size: 120px;

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto', 'Noto Sans JP', sans-serif;
    margin: 0;
    letter-spacing: 1px;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  main {
    padding: 20px 0 40px 0;
  }
}

.container {
  &__header {
    position: relative;
    background-color: $bg-white;
    min-height: 100px;
    padding: 10px 20px;
    margin-bottom: 60px;

    &__texts {
      display: flex;
      justify-content: space-between;
    }

    .waves {
      &__light {
        position: absolute;
        top: calc(100% - 30px);
        left: 0;
        width: 100%;
        height: 70px;
        background-position: bottom;
        background-size: 500px;
        background-image: url('~assets/images/wave_light.svg');
        animation: waves 6s ease-in-out infinite alternate;
      }

      &__dark {
        @extend .waves__light;
        top: calc(100% - 10px);
        background-size: 500px;
        background-image: url('~assets/images/wave_dark.svg');
        animation: waves 9s ease-in-out infinite alternate-reverse;
      }

      @keyframes waves {
        from {
          background-position-x: 0px;
        }
        to {
          background-position-x: 200px;
        }
      }
    }
  }

  &__title {
    display: inline-block;
    letter-spacing: 2px;
    font-size: 16px;
    font-weight: 500;
    line-height: 100px;
    color: $text-black;

    img {
      display: inline-block;
      vertical-align: middle;
      margin-left: 10px;
      padding-bottom: 5px;
      object-fit: contain;
      width: 25px;
      height: 25px;
    }
  }

  &__subtitle {
    @extend .container__title;
    font-weight: 400;
    font-size: 12px;
  }
}
</style>
