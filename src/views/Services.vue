<template>
  <div class="services">
    <section>
      <!----------------BANNER--------------------->
      <div class="image__container">
        <img src="../assets/img/maintenance.png" alt="maintenance" />
        <h2>Services</h2>
        <i class="fas fa-laptop-medical posi white"></i>
        <i class="fas fa-server posi white"></i>
        <i class="far fa-window-restore posi white"></i>
      </div>
      <div class="details__container">
        <!-----------COMPONENTS-------------------->

        <router-view></router-view>

        <!-----------NAVIGATION-------------------->
        <div class="navigation">
          <div class="navigation__div">
            <div>
              <h2>Solutions for you or your business</h2>
              <ul class="navigation__list">
                <router-link
                  to="/services/maintenance"
                  tag="li"
                  class="navigation__disc"
                >
                  <span class="navigation__disc-i"></span>Pc Maintenance
                </router-link>
                <router-link
                  to="/services/repair"
                  tag="li"
                  class="navigation__disc"
                >
                  <span class="navigation__disc-i"></span>Pc/Laptop Repair
                </router-link>
                <router-link
                  to="/services/website"
                  tag="li"
                  class="navigation__disc"
                >
                  <span class="navigation__disc-i"></span>Landing Pages
                </router-link>
              </ul>
            </div>
          </div>
          <!----------CONTACT---------------------->
          <div class="contact">
            <div class="contact__help">
              <div>
                <img src="../assets/img/avatar.jpg" alt="avatar" />
              </div>
              <p>Feel free to contact us, we are happy to help you!</p>
              <small>
                Mark Bran,
                <span>Software Engineer</span>
              </small>
            </div>
            <div class="contact__free">
              <h2>Our Contacts</h2>
              <div class="contact__consul">
                <p>Free consultation</p>
                <div class="contact__consul-div">
                  <i class="fas fa-phone-alt"></i>
                  <p>07590248919</p>
                </div>
              </div>
              <div class="contact__mail">
                <p>E-Mail:</p>
                <div>
                  <i class="fas fa-envelope"></i>
                  <p>hello@mbyto.co.uk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      result: 0,
      selected: 0,
    }
  },
  watch: {
    result(val) {
      const medi = document.querySelector('.fa-laptop-medical')
      const serv = document.querySelector('.fa-server')
      const browser = document.querySelector('.fa-window-restore')
      if (val === 0) {
        //Comp
        medi.classList.replace('white', 'pink')
        medi.classList.replace('grey', 'pink')
        //Serv
        serv.classList.replace('white', 'grey')
        serv.classList.replace('pink', 'grey')
        //Browser
        browser.classList.replace('pink', 'white')
        browser.classList.replace('grey', 'white')
      } else if (val === 1) {
        //Comp
        medi.classList.replace('pink', 'grey')
        medi.classList.replace('white', 'grey')
        //Serv
        serv.classList.replace('pink', 'white')
        serv.classList.replace('grey', 'white')
        //Bro
        browser.classList.replace('white', 'pink')
        browser.classList.replace('grey', 'pink')
      } else if (val === 2) {
        //Comp
        medi.classList.replace('pink', 'white')
        medi.classList.replace('grey', 'white')
        //Serv
        serv.classList.replace('grey', 'pink')
        serv.classList.replace('white', 'pink')
        //Bro
        browser.classList.replace('pink', 'grey')
        browser.classList.replace('white', 'grey')
      }
    },
  },
  methods: {
    generateNum() {
      setInterval(() => {
        this.result = Math.floor(Math.random() * 3)
      }, 1000)
    },
  },
  created() {
    this.generateNum()
  },
}
</script>

<style lang="scss" scoped>
.services {
  height: auto;
  margin-bottom: 100px;
}

.image__container {
  position: relative;
  margin: 0;
  padding: 0;

  & img {
    width: 100%;
    height: 30rem;
    filter: brightness(0.3);
  }

  & h2 {
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 4rem;
    color: white;
    text-transform: uppercase;
    border-bottom-width: 70%;
    animation: line 5s infinite ease-in-out;
  }
  & .pink {
    color: #ffb7c5;
  }
  & .grey {
    color: #787878;
  }
  & .white {
    color: white;
  }
  & .posi {
    font-size: 4rem;
    position: absolute;
  }
  & .fa-laptop-medical {
    top: 2rem;
    right: 2rem;
    animation: twist 10s infinite cubic-bezier(0.17, 0.67, 0.44, 0.42);
  }
  & .fa-server {
    top: 45%;
    right: 2rem;
    animation: twist 6s infinite cubic-bezier(0.17, 0.46, 0.32, 0.26);
  }

  & .fa-window-restore {
    bottom: 2rem;
    right: 2rem;
    animation: twist 9s infinite cubic-bezier(0.19, 0.75, 0.92, 0.25);
  }
}

.details__container {
  display: flex;
  width: 80%;
  margin: -5px auto;
}

/*******Navigation *********/
.navigation {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 2rem;
  padding-top: 4rem;
  width: 70%;

  & h2 {
    font-size: 3rem;
    font-weight: 800;
  }

  &__list {
    list-style-type: none;
    margin: 3rem 0;
  }
  &__disc {
    width: 60%;
    color: #787878;
    cursor: pointer;
    font-size: 2.5rem;
    line-height: 5rem;
    font-weight: 800;
    transition: all 0.3s ease-in-out;
    height: 50%;
    margin: 3rem 0;
    padding: 0 0.5rem;

    &:hover &-i {
      animation: up 0.8s ease-in-out;
    }

    &-i {
      display: inline-block;
      height: 2rem;
      width: 5px;
      background-color: #ffb7c5;
      margin-right: 3rem;
      transition: all 0.2s ease-in-out;
    }
  }
}

.contact {
  display: flex;

  &__help {
    margin-right: 2rem;
    width: 100%;

    & div {
      margin: 0 auto;
    }

    & img {
      display: block;
      width: 17rem;
      height: 17rem;
      margin-left: 1rem;
      border-radius: 10px;
      margin-bottom: 3rem;
      box-shadow: 5px 1rem 1rem rgba(0, 0, 0, 0.5);
    }

    & p {
      font-size: 2rem;
      margin-top: 1rem;
      margin-bottom: 3rem;
      width: 90%;
      transform: skewY(-5deg);
    }

    & small {
      margin-top: 4rem;
      font-size: 1.8rem;
      font-weight: 800;
    }
    & span {
      color: #ffb7c5;
      font-size: 1.8rem;
    }
  }
  &__free {
    width: 100%;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & h2 {
      font-size: 2.5rem;
      text-transform: uppercase;
      font-weight: 500;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
  }
  &__consul {
    margin-top: 15rem;
    & p:nth-child(1) {
      font-size: 1.8rem;
      text-transform: uppercase;
      opacity: 0.8;
    }
    &-div {
      display: flex;

      & i {
        margin-left: -2.5rem;
        margin-right: 5px;
        margin-top: 4px;
        font-size: 2rem;
        color: #ffb7c5;
        animation: shake 1s infinite ease-in-out;
      }

      & p {
        font-size: 1.8rem;
        font-weight: 800;
      }
    }
  }
  &__mail {
    margin-top: 1rem;

    & p:nth-child(1) {
      font-size: 1.8rem;
      text-transform: uppercase;
      opacity: 0.8;
    }

    & div {
      display: flex;

      & i {
        margin-left: -2.5rem;
        margin-right: 5px;
        font-size: 2rem;
        color: #ffb7c5;
        margin-top: 6px;
        animation: env 1s infinite ease-in-out;
      }

      & p {
        font-size: 1.8rem;
        font-weight: 800;
      }
    }
  }
}

/***Animations ***/
@keyframes line {
  0% {
    left: 2rem;
  }
  50% {
    left: 30%;
    transform: skewY(-15deg);
  }

  100% {
    left: 2rem;
  }
}

@keyframes twist {
  0% {
    right: 2rem;
  }
  50% {
    right: 40%;
  }
  100% {
    right: 2rem;
  }
}

@keyframes up {
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(90deg);
    transform-origin: bottom;
  }
  40% {
    transform: translate(3.2rem, 0);
  }
  80% {
    transform: rotate(-90deg);
    transform-origin: bottom left;
  }
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(3px);
  }
  40% {
    transform: translateX(-5px);
  }
  80% {
    transform: translateX(0);
  }
}

@keyframes env {
  0% {
    transform: translateY(0);
    transform: scale(1);
  }
  20% {
    transform: translateY(3px);
    transform: scale(1.05);
  }
  40% {
    transform: translateY(-5px);
    transform: scale(1.1);
  }
  80% {
    transform: translateY(0);
    transfrom: scale(1);
  }
}

.router-link-active {
  box-shadow: 1rem 1rem 1rem (rgba(0, 0, 0, 0.5));
  background: #ffb7c5;
  color: white;

  & span {
    opacity: 0;
  }
}

@media screen and (max-width: 1400px) {
  .details__container {
    display: flex;
    flex-direction: column-reverse;
    width: 95%;
    position: relative;
  }
  .navigation {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
  }

  .contact__free {
    display: flex;
    justify-content: space-evenly;
  }

  .contact__consul {
    margin-top: 2rem;
  }

  .contact__mail {
    margin-top: 2rem;
  }
}

@media screen and (max-width: 1450px) {
  .details__container {
    display: flex;
    flex-direction: column-reverse;
    width: 95%;
    position: relative;
  }
  .navigation {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
  }

  .navigation__div {
    margin-right: 2rem;
  }

  .contact__free {
    display: flex;
    justify-content: space-evenly;
  }

  .contact__consul {
    margin-top: 2rem;
  }

  .contact__mail {
    margin-top: 2rem;
  }
}

@media screen and (max-width: 1200px) {
  .details__container {
    display: flex;
    flex-direction: column-reverse;
    width: 95%;
    position: relative;
  }
  .navigation {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;
    margin-bottom: 3rem;
  }

  .contact {
    margin-top: 4rem;

    &__free {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
