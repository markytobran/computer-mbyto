<template>
  <div class="advantage__div--cards">
    <div class="advantage__div--card">
      <i :class="iconName"></i>
      <h4>{{ cardHeader }}</h4>
      <hr />
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: ['cardHeader', 'iconName'],
};
</script>

<style lang="scss" scoped>
.advantage__div--card {
  height: 100%;
  width: 380px;
  border: 2px solid $pink;
  border-top-right-radius: 70%;
  border-bottom-left-radius: 20%;
  padding: 2.2rem;
  box-shadow: 3rem 3rem 2rem rgba(0, 0, 0, 0.8);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }

  & hr {
    width: 80%;
    margin: 0 auto;
  }

  & i {
    font-size: 4rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  & h4 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  & p {
    font-size: 1.5rem;
    margin-top: 1rem;
    opacity: 0.6;
  }
}
</style>
