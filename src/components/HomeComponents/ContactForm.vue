<template>
  <div class="contact__form--div">
    <h1>Contact form</h1>
    <form @submit.prevent="submit">
      <div class="contact__form--details">
        <div class="contact__form--name">
          <label>Your name</label>
          <input type="text" maxlength="50" v-model="user.username" />
        </div>
        <div class="contact__form--email">
          <label>Email</label>
          <input type="email" maxlength="50" v-model="user.email" />
        </div>
      </div>
      <div class="contact__form--textarea">
        <label>Message / comments:</label>
        <textarea v-model="user.message" maxlength="300"></textarea>
      </div>
      <p class="counter" :class="{ show: showCounter }">
        {{ user.message.length }}/300
      </p>
      <button class="contact__form--button" id="submit">
        Send Message
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.contact__form {
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

#submit {
  background: linear-gradient(to right, #787878, #000);
  cursor: pointer;
  transition: 0.3s ease-in;

  &:hover {
    background: #000;
    border: 2px solid #000;
  }
}

@media screen and (max-width: 600px) {
  .contact__form {
    &--div {
      width: 100%;
    }
  }
}
</style>
