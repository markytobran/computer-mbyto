<template>
  <div class="services">
    <div class="services__card">
      <div class="services__card-maintenance" id="maintenance"></div>
      <h5>PC Maintenance</h5>
    </div>
    <div class="services__card">
      <div class="services__card-repair" id="repair"></div>
      <h5>Pc/Laptop repair</h5>
    </div>
    <div class="services__card">
      <div class="services__card-landing" id="landing"></div>
      <h5>Landing Pages</h5>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.services {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.5);
  height: 60vh;
  border-radius: 20px;

  &__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 20%;
    background: url('../../assets/img/homecards/logo/box4.png') no-repeat fixed
      center;
    background: rgba(255, 255, 255, 0.1);
    margin-right: 7rem;
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.5s ease-in-out;

    &-maintenance {
      background: url('../../assets/img/homecards/logo/box4.png') no-repeat
        center;
      height: 200px;
      width: 400px;
      background-size: contain;
    }

    &-repair {
      background: url('../../assets/img/homecards/logo/box5.png') no-repeat
        center;
      height: 200px;
      width: 400px;
      background-size: contain;
    }

    &-landing {
      background: url('../../assets/img/homecards/logo/box7.png') no-repeat
        center;
      height: 200px;
      width: 400px;
      background-size: contain;
    }

    &:hover {
      background: #ffb7c5;
    }

    & h5 {
      font-size: 2.5rem;
      width: 80%;
      margin-top: 25px;
      text-transform: uppercase;
    }
  }
}
</style>
