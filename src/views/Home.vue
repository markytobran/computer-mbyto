<template>
  <div class="home">
    <!--SectionA-->
    <section class="cleaning-background">
      <div class="background">
        <video autoplay muted loop>
          <source src="../assets/video/vid.mp4" type="video/mp4" />
        </video>
        <div class="container">
          <div class="container__div">
            <div class="container__problem">
              <strong>Have a problem?</strong>
              <h5>With your computer</h5>
            </div>
            <div class="container__repair">
              <h3 class="container__repair--heading">
                Computer repair
                <span class="container__repair--span">Fast</span> and
                <span class="container__repair--span">Secure</span>
              </h3>
              <p class="container__repair--p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                iste, laudantium porro modi rerum deleniti ipsam odit, corporis
                nulla iure cum corrupti, ad neque itaque! Facere aliquid sit
                esse aut.
              </p>
            </div>
          </div>
          <!--Home service cards-->
          <home-service-cards />
        </div>
      </div>
    </section>
    <!--SectionB-->
    <section class="price__container">
      <div class="price__div">
        <h1>Prices</h1>
      </div>
      <!--Price-Cards-->
      <price-card
        cardHeader="PC Maintenance"
        :cardDetails="pcDetailsList"
        imgName="comp.jpg"
        url="/services/maintenance"
      />
      <price-card
        cardHeader="PC/Laptop Repair"
        :cardDetails="laptopRepairList"
        imgName="repair.jpg"
        url="/services/repair"
      />
      <price-card
        cardHeader="Landing pages"
        :cardDetails="pcDetailsList"
        imgName="website.jpg"
        url="/services/website"
      />
    </section>
    <!--SectionC-->
    <section class="contact">
      <div class="contact__container">
        <div class="contact__heading">
          <h2>Contacts</h2>
          <p>Get help now!</p>
        </div>
        <div class="contact__email">
          <div class="contact__email--div">
            <i class="fas fa-envelope-open-text"></i>
          </div>
          <p>
            <a>hello@mbyto.co.uk</a>
          </p>
        </div>
        <div class="contact__mobile">
          <div class="contact__mobile--div">
            <i class="fas fa-mobile-alt"></i>
          </div>
          <p>07590248919</p>
        </div>
      </div>
      <div class="contact__form">
        <contact-form />
        <!--Advantage Cards Container-->
        <advantage-cards-container />
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import firebaseData from '../../firebase/firebaseLink.js'
import HomeServiceCards from '../components/HomeComponents/HomeServiceCards.vue'
import AdvantageCardsContainer from '../components/HomeComponents/AdvantageCardsContainer.vue'
import ContactForm from '../components/HomeComponents/ContactForm.vue'
import PriceCard from '../components/HomeComponents/PriceCard.vue'

export default {
  components: {
    HomeServiceCards,
    AdvantageCardsContainer,
    ContactForm,
    PriceCard,
  },
  name: 'Home',
  data() {
    return {
      user: {
        username: '',
        email: '',
        message: '',
      },
      regex: {
        name: /^[a-z ,.'-]+$/i,
        email: /\S+@\S+\.\S+/,
      },
      landingPagesList: [
        'Most recent technologies',
        'Responsive design',
        'SEO',
        'Well designed',
        'Modern looking',
      ],
      laptopRepairList: [
        'Apple & Windows services',
        'Router setup',
        'Hardware/Software installations',
        'Virus removal',
        'Fast solution',
      ],
      pcDetailsList: [
        'Dust free PC/Laptop',
        'Better performance',
        'Extended computer life-span',
        'Faster and more efficient airflow',
        'Fast Fresh and Friendly',
      ],
    }
  },
  computed: {
    showCounter() {
      return this.user.message.length > 0
    },
  },
  methods: {
    resetValues() {
      this.user.username = ''
      this.user.email = ''
      this.user.message = ''
    },
    showToaster(message, icon, type) {
      this.$toasted.show(message, {
        duration: 3000,
        icon,
        type,
      })
    },
    submit() {
      if (!this.regex.name.test(this.user.username)) {
        this.showToaster(
          'Please enter a valid name',
          'exclamation-circle',
          'error'
        )
      } else if (!this.regex.email.test(this.user.email)) {
        this.showToaster(
          'Please enter a valid e-mail address',
          'exclamation-circle',
          'error'
        )
      } else if (this.user.message.length < 10) {
        this.showToaster(
          'Please enter at least 10 characters',
          'exclamation-circle',
          'error'
        )
      } else if (this.user.message.length > 300) {
        this.showToaster(
          'Please enter less than 300 characters',
          'exclamation-circle',
          'error'
        )
      } else {
        axios.post(firebaseData.link, this.user).then(
          () => {
            this.showToaster(
              'Thanks for your message. I will respond in 24 hours.',
              'check-circle',
              'success'
            )
          },
          (error) => this.showToaster(error, 'exclamation-circle', 'error')
        )
        this.resetValues()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.cleaning-background {
  height: 100vh;
}

.background {
  height: 100vh;
  position: relative;
}
.background::after {
  content: '';
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
}

.container {
  position: absolute;
  color: $white;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;

  &__div {
    display: flex;
    height: 30vh;
    padding: 9rem;
    justify-content: center;
    align-items: center;
  }
  &__problem {
    flex: 0 0 50%;
    & strong {
      font-size: 6rem;
      text-transform: uppercase;
    }
    & h5 {
      font-size: 4rem;
      font-weight: 300;
      text-transform: uppercase;
    }
  }
  &__repair {
    flex: 0 0 50%;
    &--heading {
      font-size: 4rem;
    }
    &--span {
      color: $pink;
      text-transform: uppercase;
    }
    &--p {
      font-size: 2rem;
    }
  }
}

.price__container {
  height: 85vh;
  background-color: $white;
  position: relative;
  display: flex;
  padding: 4rem;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: $pink;
    clip-path: circle(40%);
    animation: shrink 8s infinite cubic-bezier(0.45, 0.46, 0.74, 0.72);
  }
}
.price__div {
  position: absolute;
  color: black;
  z-index: 1000;
  width: 100%;
  & h1 {
    font-size: 10rem;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
  }
}

@keyframes shrink {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(2.5);
  }
  100% {
    transform: scaleX(1);
  }
}

.contact {
  height: 115vh;
  background: #272829;
  background-repeat: no-repeat;

  &__container {
    display: flex;
    justify-content: space-between;
    padding: 4rem 5rem;
    color: $white;
    border-bottom: 1px solid $white;
  }

  &__heading {
    justify-content: flex-start;
    h2 {
      font-size: 6rem;
      text-transform: uppercase;
    }
    p {
      font-size: 3rem;
      text-transform: uppercase;
    }
  }

  &__email,
  &__mobile {
    display: flex;
    margin-top: 2rem;
    height: 7rem;
    z-index: 1;
    cursor: pointer;

    &:hover &--div::after {
      width: 140%;
      height: 140%;
    }

    & div {
      background-color: $pink;
      height: 100%;
      width: 7rem;
      border-radius: 50%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 3rem;

      &::after {
        content: '';
        background-color: $pink;
        opacity: 0.6;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all 0.5s ease-in;
        z-index: -1;
      }
    }
    & i {
      font-size: 3rem;
      position: absolute;
    }
    & p {
      font-size: 2rem;
      justify-self: center;
      align-self: center;
    }
  }
  &__form {
    display: flex;
    padding: 4rem;
    color: $white;
  }

  .counter {
    font-size: 1.4rem;
    opacity: 0;
  }

  .counter.show {
    opacity: 1;
  }
}
@media screen and (max-width: 1400px) {
  .cleaning-background,
  .background,
  .background::after,
  .background video {
    height: 130vh;
  }
  .container {
    &__div {
      height: 50vh;
    }
    &__problem {
      & strong {
        font-size: 4rem;
      }
      & h5 {
        font-size: 3rem;
      }
    }
    &__repair {
      flex: 0 0 50%;
      &--heading {
        font-size: 2.3rem;
      }
      &--p {
        font-size: 1.7rem;
      }
    }
  }

  .price__container {
    height: 115vh;
    display: flex;
    padding-bottom: 80px;
  }

  .contact {
    height: 260vh;
    &__container {
      display: flex;
    }
    &__form {
      display: flex;
      flex-direction: column;
      padding: 1rem;
    }
  }
}

@media screen and (max-width: 700px) {
  .cleaning-background,
  .background,
  .background::after,
  .background video {
    height: 170vh;
  }

  .container {
    &__div {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      padding: 2rem;
      height: 50vh;
    }
    &__problem {
      flex: 0 0 30%;
      & strong {
        font-size: 3rem;
      }
      & h5 {
        font-size: 2rem;
      }
    }
    &__repair {
      flex: 0 0 50%;
      &--heading {
        font-size: 3rem;
      }
      &--p {
        font-size: 2rem;
      }
    }
  }

  .price__container {
    height: 220vh;
    display: flex;
    flex-direction: column;
  }

  .contact {
    height: 280vh;
    &__container {
      display: flex;
      flex-direction: column;
    }
    &__form {
      display: flex;
      flex-direction: column;
      padding: 1rem;
    }
  }
}
</style>
