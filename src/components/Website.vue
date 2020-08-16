<template>
  <!--------------DETAILS------------>
  <div class="details">
    <img src="../assets/img/website.jpg" alt="pc" />
    <div class="details__text">
      <h1>Landing page</h1>
    </div>
    <!------------VIDEO------------->
    <div class="video__div">
      <iframe
        width="200"
        height="200"
        src="https://www.youtube.com/embed/NtK0DsntKkQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="200"
        height="200"
        src="https://www.youtube.com/embed/ZvYwpIIcx6U"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="200"
        height="200"
        src="https://www.youtube.com/embed/KLB8w-kHkvI"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <!-------------IMAGE GALLERY------------>
    <div class="image__gallery">
      <img src="../assets/img/site/creativity.jpeg" />
      <i class="fas fa-hand-point-right"></i>
      <h2>
        Image Gallery
        <i class="fas fa-smile-beam"></i>
      </h2>
      <!-------------IMAGE GRID------------>
      <div class="image__grid">
        <img class="dirty" src="../assets/img/site/design.png" alt />
        <img class="dirty__2" src="../assets/img/site/design2.jpg" alt />
        <img class="dirty__3" src="../assets/img/site/design3.png" alt />
        <img class="dirty__5" src="../assets/img/site/develop.jpeg" alt />
        <img class="dirty__6" src="../assets/img/site/phone.jpeg" alt />
        <img class="dirty__7" src="../assets/img/site/seo.png" alt />
        <img class="dirty__9" src="../assets/img/site/setup.jpg" alt />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.details {
  justify-self: flex-start;
  width: 95%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  & img {
    width: 98%;
    border-radius: 5px;
    height: 60vh;
  }
  &__text {
    & h1 {
      font-size: 3rem;
      text-transform: uppercase;
      margin: 2rem 0;
    }
    & p {
      font-size: 1.8rem;
      padding-right: 3rem;
    }
    & h5 {
      font-size: 2rem;
      margin-top: 1rem;
    }
  }
}

.video__div {
  display: flex;
  margin-top: 5rem;
  justify-content: space-between;
  padding-right: 3.5rem;

  & iframe {
    border-radius: 20px;
    border: 3px solid #ffb7c5;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    box-shadow: 5px 1rem 1.5rem rgba(0, 0, 0, 0.5);

    &:hover {
      transform: translateY(-5px);
    }
  }
}

.image {
  &__gallery {
    & img {
      margin-top: 2rem;
      height: 200px;
      width: 250px;
    }
    & .fa-hand-point-right {
      font-size: 5rem;
      color: #ffb7c5;
      margin-left: 4rem;
      padding-top: 3rem;
      animation: arrow 1s infinite cubic-bezier(0.19, 0.75, 0.92, 0.25);
    }
    & h2 {
      display: flex;
      justify-content: center;
      text-transform: uppercase;
      font-size: 3.5rem;
      font-weight: 500;
      width: 100%;
    }
    & i {
      font-size: 4rem;
      color: #ffb7c5;
      margin-top: 5px;
      margin-left: 3px;
    }
  }
  &__grid {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 150px);
    grid-gap: 1.5rem;
    padding-right: 3rem;

    & img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      cursor: pointer;
      box-shadow: 2px 1rem 1rem rgba(0, 0, 0, 0.7);
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: translate(-5px);
      }
    }
  }
}

.dirty {
  grid-column: 1/2;
  grid-row: 4/5;
  &__1 {
  }
  &__2 {
    grid-column: 3/6;
    grid-row: 3/5;
  }
  &__3 {
    grid-column: 5/6;
    grid-row: 1/2;
  }
  &__4 {
    grid-column: 4/6;
    grid-row: 3/4;
  }
  &__5 {
    grid-column: 1/3;
    grid-row: 1/4;
  }
  &__6 {
    grid-column: 5/6;
    grid-row: 2/3;
  }
  &__7 {
    grid-column: 2/3;
    grid-row: 4/4;
  }
  &__9 {
    grid-column: 3/5;
    grid-row: 1/3;
  }
}

@keyframes arrow {
  0% {
    transform: translateY(0);
    transform: rotate(40deg);
  }
  20% {
    transform: translateY(1rem);
    transform: rotate(40deg);
  }
  40% {
    transform: translateY(-5px);
    transform: rotate(40deg);
  }
  80% {
    transform: translateY(0);
    transform: rotate(40deg);
  }
}
</style>