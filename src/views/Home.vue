<template>
  <div class="home">
    <!--SectionA-->
    <section style="height: 100vh">
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
import axios from 'axios';
import firebaseData from '../../firebase/firebaseLink.js';
import HomeServiceCards from '../components/HomeComponents/HomeServiceCards.vue';
import AdvantageCardsContainer from '../components/HomeComponents/AdvantageCardsContainer.vue';
import ContactForm from '../components/HomeComponents/ContactForm.vue';
import PriceCard from '../components/HomeComponents/PriceCard.vue';

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
    };
  },
  computed: {
    showCounter() {
      return this.user.message.length > 0;
    },
  },
  methods: {
    resetValues() {
      this.user.username = '';
      this.user.email = '';
      this.user.message = '';
    },
    showToaster(message, icon, type) {
      this.$toasted.show(message, {
        duration: 3000,
        icon,
        type,
      });
    },
    submit() {
      if (!this.regex.name.test(this.user.username)) {
        this.showToaster(
          'Please enter a valid name',
          'exclamation-circle',
          'error'
        );
      } else if (!this.regex.email.test(this.user.email)) {
        this.showToaster(
          'Please enter a valid e-mail address',
          'exclamation-circle',
          'error'
        );
      } else if (this.user.message.length < 10) {
        this.showToaster(
          'Please enter at least 10 characters',
          'exclamation-circle',
          'error'
        );
      } else if (this.user.message.length > 300) {
        this.showToaster(
          'Please enter less than 300 characters',
          'exclamation-circle',
          'error'
        );
      } else {
        axios.post(firebaseData.link, this.user).then(
          () => {
            this.showToaster(
              'Thanks for your message. I will respond in 24 hours.',
              'check-circle',
              'success'
            );
          },
          (error) => this.showToaster(error, 'exclamation-circle', 'error')
        );
        this.resetValues();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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

// .price__cards {
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
//   text-align: center;
//   width: 100%;
//   height: 100%;
// }

// .card {
//   perspective: 150rem;
//   z-index: 1000;
//   cursor: pointer;
//   position: relative;
//   height: 50rem;
//   width: 30rem;

//   &__side {
//     height: 50rem;
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     backface-visibility: hidden;
//     transition: all 2s ease;
//     box-shadow: 0 1.5rem 4rem rgba(#000, 0.15);

//     &--front {
//       background-color: $white;

//       & figure {
//         height: 50%;
//         position: relative;
//         clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);

//         &::after {
//           content: '';
//           top: 0;
//           left: 0;
//           background-color: rgba(0, 0, 0, 0.6);
//           position: absolute;
//           width: 100%;
//           height: 100%;
//         }
//       }

//       & figure img {
//         object-fit: cover;
//         width: 100%;
//         height: 100%;
//       }

//       & figcaption {
//         position: absolute;
//         bottom: 4rem;
//         right: 2rem;
//         color: $white;
//         z-index: 1000;
//         font-size: 2rem;
//         text-transform: uppercase;
//         font-weight: 800;
//         background-color: $pink;
//         padding: 0.5rem 1rem;
//         box-shadow: 1rem 1rem 1rem (rgba(0, 0, 0, 0.8));
//         text-shadow: 0.3rem 0.3rem 1rem (rgba(0, 0, 0, 0.8));
//       }
//     }

//     &--back {
//       background: linear-gradient(grey 5%, black 95%);
//       transform: rotateY(180deg);
//       display: flex;
//       justify-content: space-evenly;
//       align-items: center;
//       height: 100%;
//       width: 100%;
//       flex-direction: column;
//       color: $white;

//       small {
//         font-size: 3rem;
//         font-weight: 800;
//       }

//       a {
//         background: $pink;
//         width: 18rem;
//         color: $white;
//         padding: 1.5rem 3rem;
//         border-radius: 100px;
//         font-size: 1.5rem;
//         text-transform: uppercase;
//         font-weight: 800;
//         transition: all 0.5s;
//         text-decoration: none;

//         &:hover {
//           transform: translateY(-5px);
//           box-shadow: 0.4rem 0.4rem 0.7rem (rgba($white, 0.6));
//         }
//       }
//     }
//     &--details {
//       background: linear-gradient(grey 5%, black 95%);
//       height: 55%;
//       margin-top: -2.5rem;

//       & ul {
//         list-style: none;
//         display: flex;
//         flex-direction: column;
//         padding: 1.5rem;
//         padding-top: 4.5rem;
//       }

//       & i {
//         color: $pink;
//         margin-right: 5px;
//         margin-top: 2px;
//       }

//       & li {
//         color: $white;
//         font-size: 1.5rem;
//         font-weight: 500;
//         display: flex;
//         line-height: 2rem;
//         margin-bottom: 2.2rem;
//       }
//     }
//   }

//   &:hover &__side--front {
//     transform: rotateY(180deg);
//   }
//   &:hover &__side--back {
//     transform: rotateY(0);
//   }
// }

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

    input,
    textarea {
      background-color: transparent;
      border: 2px solid #787878;
      color: $white;
      font-weight: 500;
      outline: none;

      &:active {
        border: 2px solid $white;
      }
    }

    input {
      min-height: 4rem;
      font-size: 2rem;
      font-weight: 400;
    }

    textarea {
      min-height: 25rem;
      font-size: 2.5rem;
      font-weight: 400;
      padding: 2px;
    }

    & label {
      font-size: 2rem;
      font-weight: 500;
      text-transform: uppercase;
    }

    &--details {
      display: flex;
      flex-direction: row;
    }

    &--textarea {
      display: flex;
      flex-direction: column;
      margin-top: 3.5rem;
    }

    &--div {
      width: 45%;
      margin-right: 4rem;

      & h1 {
        font-size: 4rem;
        text-transform: uppercase;
        margin-bottom: 3rem;
      }
    }
    &--name {
      margin-right: 5rem;
    }
    &--name,
    &--email {
      display: flex;
      flex-direction: column;
      width: 50%;
      margin-bottom: 3rem;
    }

    &--button {
      margin-top: 4rem;
      padding: 2rem 3.5rem;
      text-transform: uppercase;
      color: $white;
      outline: none;
    }
  }

  .counter {
    font-size: 1.4rem;
    opacity: 0;
  }

  .counter.show {
    opacity: 1;
  }
}

@media screen and (max-width: 600px) {
  .container {
    &__div {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      padding: 2rem;
      height: 200vh;
    }
    &__problem {
      flex: none;
      & strong {
        font-size: 3rem;
      }
      & h5 {
        font-size: 2rem;
        margin-bottom: 20px;
      }
    }
    &__repair {
      flex: none;
      justify-content: center;
      align-items: center;
      &--heading {
        font-size: 3rem;
      }
      &--p {
        font-size: 2rem;
      }
    }
  }
}
</style>
