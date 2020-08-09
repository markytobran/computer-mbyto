<template>
  <footer>
    <div class="contact__image">
      <img src="../assets/logo.png" />
    </div>
    <div class="contact__copyright">
      <p>Copyright © 2020 Mbyto All rights reserved.</p>
    </div>
    <div class="contact__button">
      <a>
        <i class="fas fa-arrow-down"></i>
      </a>
    </div>
  </footer>
</template>

<script>
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
    display: flex;
    cursor: pointer;
    transition: all 1s;
    margin-right: 5px;

    &:hover {
      transform: rotateX(180deg);
    }

    & i {
      color: #fff;
      position: absolute;
      left: 35%;
      top: 35%;
      font-size: 3rem;
    }
  }
}
</style>