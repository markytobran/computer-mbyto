<template>
  <div class="advantage__div">
    <h1>Our advantages</h1>
    <hr class="advantage__div--hr" />
    <div class="advantage__div--cards">
      <!--Individual Card-->
      <advantage-card
        cardHeader="Individual Approach"
        iconName="far fa-thumbs-up"
      >
        <template>
          <p>
            We use an individual approach to each client and we never offer you
            a set of standard decisions for your business.
          </p>
        </template>
      </advantage-card>
      <!--Qualified Card-->
      <advantage-card
        cardHeader="Qualified Employees"
        iconName="far fa-comments"
      >
        <template>
          <p>
            Brave is a team of designers, developers, marketing experts and
            managers who are ready to work on a personalized web solution.
          </p>
        </template>
      </advantage-card>
      <!--Website Card-->
      <advantage-card cardHeader="Websites" iconName="far fa-window-maximize">
        <template>
          <p>
            Our expert team can design a landing page of any complexity.
            Everything depends on what you are looking for.
          </p>
        </template>
      </advantage-card>
      <!--Payment Card-->
      <advantage-card
        cardHeader="Various Payment Methods"
        iconName="far fa-credit-card"
      >
        <template>
          <p>
            We provide a variety of payment methods that include Paypal,
            Visa/Mastercard/American Express and lots of others, which can be
            customized.
          </p>
        </template>
      </advantage-card>
    </div>
  </div>
</template>

<script>
import AdvantageCard from './AdvantageCard.vue'
export default {
  components: {
    AdvantageCard,
  },
}
</script>

<style lang="scss" scoped>
.advantage__div {
  margin-left: 4rem;
  width: 60%;
  h1 {
    font-size: 4rem;
    text-transform: uppercase;
    margin-bottom: 3rem;
  }
  &--hr {
    background: linear-gradient(to right, $grey, $pink);
    width: 10rem;
    height: 5px;
    outline: none;
    border: 0;
  }
  &--cards {
    display: grid;
    margin-top: 4rem;
    grid-template-columns: 1fr 1fr;
    column-gap: 5rem;
    row-gap: 5rem;
  }
}

@media screen and (max-width: 1250px) {
  .advantage__div {
    width: 100%;
    h1 {
      margin-top: 50px;
    }
    &--cards {
      display: grid;
      margin-top: 4rem;
      grid-template-columns: 1fr 1fr;
      column-gap: 5rem;
      row-gap: 5rem;
    }
  }
}

@media screen and (max-width: 700px) {
  .advantage__div {
    width: 100%;
    h1 {
      margin-top: 50px;
    }
    &--cards {
      display: grid;
      margin-top: 4rem;
      grid-template-columns: 1fr;
      column-gap: 5rem;
      row-gap: 5rem;
    }
  }
}
</style>
