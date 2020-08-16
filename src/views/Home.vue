<template>
  <div class="home">
    <!--SectionA-->
    <section>
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
              <p
                class="container__repair--p"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iste, laudantium porro modi rerum deleniti ipsam odit, corporis nulla iure cum corrupti, ad neque itaque! Facere aliquid sit esse aut.</p>
            </div>
          </div>
          <div class="services">
            <div class="services__card">
              <img src="../assets/img/homecards/logo/box5.png" />
              <h5>PC Maintenance</h5>
            </div>
            <div class="services__card">
              <img src="../assets/img/homecards/logo/box4.png" />
              <h5>Pc/Laptop repair</h5>
            </div>
            <div class="services__card">
              <img src="../assets/img/homecards/logo/box7.png" />
              <h5>Landing Pages</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--SectionB-->
    <section class="price__container">
      <div class="price__div">
        <h1>Prices</h1>
      </div>
      <div class="price__cards">
        <div class="card">
          <div class="card__side card__side--front">
            <figure>
              <img src="../assets/img/homecards/pictures/comp.jpg" alt="dirty computer" />
              <figcaption>PC Maintenance</figcaption>
            </figure>
            <div class="card__side--details">
              <ul>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Dust free PC/Laptop</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Better performance</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Extended computer life-span</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Faster and more efficient airflow</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Fast Fresh and Friendly</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back">
            <small>from &#163;20</small>
            <a>Learn More</a>
          </div>
        </div>
      </div>
      <div class="price__cards">
        <div class="card">
          <div class="card__side card__side--front">
            <figure>
              <img src="../assets/img/homecards/pictures/repair.jpg" alt="dirty computer" />
              <figcaption>PC/Laptop Repair</figcaption>
            </figure>
            <div class="card__side--details">
              <ul>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Apple &amp; Windows services</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Router setup</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Hardware/Software installations</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Virus removal</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Fast solution</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back">
            <small>from &#163;30</small>
            <a>Learn More</a>
          </div>
        </div>
      </div>
      <div class="price__cards">
        <div class="card">
          <div class="card__side card__side--front">
            <figure>
              <img src="../assets/img/homecards/pictures/website.jpg" alt="dirty computer" />
              <figcaption>Landing pages</figcaption>
            </figure>
            <div class="card__side--details">
              <ul>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Most recent technologies</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Responsive design</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>SEO</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Well designed</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Modern looking</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="card__side card__side--back">
            <small>from &#163;100</small>
            <a>Learn More</a>
          </div>
        </div>
      </div>
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
        <div class="contact__form--div">
          <h1>Contact form</h1>
          <form>
            <div class="contact__form--details">
              <div class="contact__form--name">
                <label>Your name</label>
                <input />
              </div>
              <div class="contact__form--email">
                <label>Email</label>
                <input />
              </div>
            </div>
            <div class="contact__form--textarea">
              <label>Message / comments:</label>
              <textarea></textarea>
            </div>
            <input id="btn" class="contact__form--button" type="submit" value="Send Message" />
          </form>
        </div>
        <div class="advantage__div">
          <h1>Our advantages</h1>
          <hr class="advantage__div--hr" />
          <div class="advantage__div--cards">
            <div class="advantage__div--card">
              <i class="far fa-thumbs-up"></i>
              <h4>Individual Approach</h4>
              <hr />
              <p>We use an individual approach to each client and we never offer you a set of standard decisions for your business.</p>
            </div>
            <div class="advantage__div--card">
              <i class="far fa-comments"></i>
              <h4>Qualified Employees</h4>
              <hr />
              <p>Brave is a team of designers, developers, marketing experts and managers who are ready to work on a personalized web solution.</p>
            </div>
            <div class="advantage__div--card">
              <i class="far fa-window-maximize"></i>
              <h4>Websites</h4>
              <hr />
              <p>Our expert team can design a landing page of any complexity. Everything depends on what you are looking for.</p>
            </div>
            <div class="advantage__div--card">
              <i class="far fa-credit-card"></i>
              <h4>Various Payment Methods</h4>
              <hr />
              <p>We provide a variety of payment methods that include Paypal, Visa/Mastercard/American Express and lots of others, which can be customized.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
$pink: #ffb7c5;
$white: #fff;
$grey: #787878;

.background {
  height: 100vh;
  position: relative;
}
.background::after {
  content: "";
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
      justify-content: space-around;
      height: 60%;
      width: 20%;
      background: rgba(255, 255, 255, 0.1);
      margin-right: 7rem;
      border-radius: 20px;
      cursor: pointer;
      transition: background 0.5s ease-in-out;

      &:hover {
        background: $pink;
      }

      & h5 {
        font-size: 2.5rem;
        width: 80%;
        margin: 0 auto;
        text-transform: uppercase;
      }

      & img {
        margin: 0 auto;
        height: 20rem;
        width: 26rem;
      }
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
    content: "";
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

.price__cards {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  width: 100%;
  height: 100%;
}

.card {
  perspective: 150rem;
  z-index: 1000;
  cursor: pointer;
  position: relative;
  height: 50rem;
  width: 30rem;

  &__side {
    height: 50rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    transition: all 2s ease;
    box-shadow: 0 1.5rem 4rem rgba(#000, 0.15);

    &--front {
      background-color: $white;

      & figure {
        height: 50%;
        position: relative;
        clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);

        &::after {
          content: "";
          top: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.6);
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }

      & figure img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }

      & figcaption {
        position: absolute;
        bottom: 4rem;
        right: 2rem;
        color: $white;
        z-index: 1000;
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 800;
        background-color: $pink;
        padding: 0.5rem 1rem;
        box-shadow: 1rem 1rem 1rem (rgba(0, 0, 0, 0.8));
        text-shadow: 0.3rem 0.3rem 1rem (rgba(0, 0, 0, 0.8));
      }
    }

    &--back {
      background: linear-gradient(grey 5%, black 95%);
      transform: rotateY(180deg);
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 100%;
      width: 100%;
      flex-direction: column;
      color: $white;

      small {
        font-size: 3rem;
        font-weight: 800;
      }

      a {
        background: $pink;
        width: 18rem;
        padding: 1.5rem 3rem;
        border-radius: 100px;
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 500;
        transition: all 0.5s;

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0.4rem 0.4rem 0.7rem (rgba($white, 0.6));
        }
      }
    }
    &--details {
      background: linear-gradient(grey 5%, black 95%);
      height: 55%;
      margin-top: -2.5rem;

      & ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        padding-top: 4.5rem;
      }

      & i {
        color: $pink;
        margin-right: 5px;
        margin-top: 2px;
      }

      & li {
        color: $white;
        font-size: 1.5rem;
        font-weight: 500;
        display: flex;
        line-height: 2rem;
        margin-bottom: 2.2rem;
      }
    }
  }

  &:hover &__side--front {
    transform: rotateY(180deg);
  }
  &:hover &__side--back {
    transform: rotateY(0);
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
        content: "";
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

      &:active {
        border: 2px solid $white;
      }
    }

    input {
      min-height: 3rem;
    }

    textarea {
      min-height: 20rem;
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
      font-size: 2rem;
    }
  }
  #btn {
    background: linear-gradient(to right, #787878, #000);
    cursor: pointer;
    transition: 0.3s ease-in;

    &:hover {
      background: #000;
      border: 2px solid #000;
    }
  }

  .advantage__div {
    margin-left: 4rem;
    width: 55%;
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
    &--card {
      height: 100%;
      width: 80%;
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
  }
}
</style>
