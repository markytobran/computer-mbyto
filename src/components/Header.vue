<template>
  <header>
    <div class="header__up">
      <div>
        <i class="fas fa-paper-plane"></i>
        <a href="mailto:hello@mbyto.co.uk">hello@mbyto.co.uk</a>
      </div>
      <div>
        <i class="fas fa-mobile-alt"></i>
        <a href="tel:07590248919">07590248919</a>
      </div>
    </div>
    <div class="nav-div">
      <nav>
        <div class="nav-div-top">
          <div class="nav-div-top-logo">
            <a href="#">
              <img src="../assets/logo.png" />
            </a>
          </div>
          <div class="nav-input">
            <svg class="search-icon">
              <use xlink:href="../assets/svg/symbol-defs.svg#icon-search" />
            </svg>
            <input type="text" placeholder="Search..." />
            <svg class="search-icon">
              <use xlink:href="../assets/svg/symbol-defs.svg#icon-mic" />
            </svg>
          </div>
          <div class="nav-estimate">
            <a href="#" class="nav-estimate-link">Free estimate</a>
          </div>
        </div>
        <hr />
        <div class="nav-div-bottom">
          <router-link to="/" tag="li" active-class="active" exact>Home</router-link>
          <router-link to="/services" tag="li" active-class="active" exact>Services</router-link>
          <router-link to="/about" tag="li" active-class="active" exact>About</router-link>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$black: #000;
$white: #fff;

header {
  background-color: #272829;
  height: 24vh;
}

li {
  color: $white;
  opacity: 0.7;
}

hr {
  width: 70%;
  border-top: 0;
  float: right;
  border-color: rgba($black, 0.5);
  margin-bottom: 1rem;
}

.header__up {
  display: flex;
  width: 35%;
  margin: 0 auto;
  padding-top: 1rem;
  justify-content: space-between;

  & div {
    background-color: rgba($white, 0.2);
    border-radius: 2rem;
    padding: 5px 2rem;

    & i {
      color: $black;
      font-size: 1.6rem;
      margin-right: 8px;
    }

    & a {
      color: $white;
      text-decoration: none;
      font-size: 1.6rem;
      font-weight: 800;
      text-shadow: 2px 4px 2px rgba($black, 0.3);
    }
  }
}

.active {
  opacity: 1;
  transform: scale(1.2);
}

.nav-div-top {
  display: flex;
  padding: 1.5rem;
  justify-content: space-between;
  margin-left: 1rem;
}

.nav-estimate {
  background-color: rgba($white, 0.3);
  height: 45px;
  width: 210px;
  font-weight: 500;
  margin-right: 1rem;
  margin-top: 1rem;
  box-shadow: 0 1rem 3rem rgba($black, 0.2);
  border-radius: 10rem;
  transition: all 0.2s;
  cursor: pointer;

  &-link {
    padding: 0 20px;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 2rem;
    color: $white;
    text-decoration: none;
    text-shadow: 2px 4px 2px rgba($black, 0.3);
    transition: all 0.3s;
  }
  &:hover {
    background-color: $white;
    transform: translateY(2px);
  }
  &:hover &-link {
    color: $black;
    text-shadow: none;
  }
  &:active,
  &:focus {
    outline: none;
    transform: translateY(3px);
    box-shadow: 0 0.5rem 1rem rgba($black, 0.2);
  }
}

.nav-div-bottom {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-bottom: 1rem;
  transition: all 1s;

  & li {
    font-size: 2rem;
    cursor: pointer;
    list-style: none;
    margin-right: 5rem;
    font-weight: 800;
    position: relative;
    text-shadow: 2px 4px 3px rgba($black, 0.3);
    padding: 5px 1rem;

    &::before {
      content: "";
      top: 0;
      left: 0rem;
      height: 100%;
      width: 3px;
      position: absolute;
      background-color: rgba($white, 0.3);
      transform: scaleY(0);
      transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s;
    }
    &:hover::before {
      transform: scaleY(1.3);
      width: 100%;
    }
  }
}

.nav-input {
  margin-top: 2rem;
  width: 25%;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;

  & input {
    border-radius: 1.5rem;
    width: 90%;
    height: 3.5rem;
    outline: none;
    transition: all 0.3s;
    cursor: pointer;
    border: 4px solid rgba($white, 0.1);
    outline: none;
    padding: 3px 3.5rem;
    margin-left: -3rem;
    margin-right: -3rem;
    background-color: rgba($white, 0.2);
    color: $white;

    &:focus {
      width: 100%;
      background-color: $white;
    }
    &::placeholder {
      font-weight: 800;
      color: $white;
    }
  }
}

.search-icon {
  height: 2.15rem;
  width: 2.15rem;
  z-index: 100;
  margin-top: 0.6rem;
  cursor: pointer;
  fill: $black;
}

img {
  width: 180px;
}
</style>
