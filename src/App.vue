<template>
  <div id="app">
    <Header></Header>
    <main>
      <router-view />
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&display=swap");

* {
  padding: 0;
  margin: 0;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  border: 7px solid #000;
  box-shadow: inset 0 0 2.5px 2px rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: 3px;
}

main {
  height: 100%;
}
</style>
