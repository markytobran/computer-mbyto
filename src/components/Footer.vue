<template>
  <footer>
    <div class="contact__image">
      <img src="../assets/logo.png" />
    </div>
    <div class="contact__copyright">
      <p>Copyright © 2021 Mbyto All rights reserved.</p>
    </div>
    <div class="contact__button" @click="toTheTop">
      <a>
        <i class="fas fa-arrow-up"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    toTheTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style scoped lang="scss">
footer {
  height: 14vh;
  background: rgba(#272829, 0.95);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.contact {
  &__image {
    & img {
      width: 10rem;
      height: 5rem;
    }
  }
  &__copyright {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 800;
  }
  &__button {
    width: 8rem;
    height: 8rem;
    background-color: #ffb7c5;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-right: 5px;

    & a {
      height: 100%;
      width: 100%;
    }

    & i {
      color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3rem;
    }
  }
}

@media screen and (max-width: 600px) {
  .contact {
    &__image {
      & img {
        width: 6rem;
        height: 2rem;
      }
    }
    &__copyright {
      color: #fff;
      font-size: 1.2rem;
      font-weight: 800;
    }
    &__button {
      width: 6rem;
      height: 6rem;
    }
  }
}
</style>
