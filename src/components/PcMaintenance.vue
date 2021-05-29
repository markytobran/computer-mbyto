<template>
  <!--------------DETAILS------------>
  <div class="details">
    <img src="../assets/img/pc-maintenance.jpg" alt="pc" />
    <div class="details__text">
      <h1>PC Maintenance</h1>
      <p>
        It is hard to imagine our lives without computers. For most of us, the
        days are few and far between when we do not use our computers to pay
        bills, play games, surf the internet. Since computers are such an
        integral part of our lives, it is crucial that we take care of them by
        having them properly maintained.
      </p>
      <h5>Early Detection of Issues</h5>
      <p>
        Computers can be temperamental, and we all know that small issues can
        become huge problems before we know it. Having regular maintenance check
        done on your computer can eradicate small issues before they become big
        problems. Small issues can crop up at any time, even when your computer
        is new, nipping them in the bud during a regular maintenance session can
        save you a lot of headaches when the computer starts to age.
      </p>
      <h5>Speed up Your Computer</h5>
      <p>
        Nothing can be more frustrating than a computer that processes too
        slowly. But, as most of us can attest, over time our computers get
        clogged up with files and everything gets disorganized and fragmented.
        The result is slow processing times. Computer maintenance techs are
        experts at running speed and optimization checks that can pinpoint
        issues and keep your computer running at an optimal speed.
      </p>
      <h5>Maximize your Software Efficiency</h5>
      <p>
        Another reason your computer may slow down over time is that your
        software package is getting old. Since this change happens gradually,
        your computer simply gets used to it and thinks that it is normal. But,
        having regularly scheduled maintenance on your computer will clean out
        any issues and have your software running perfectly again.
      </p>
      <h5>Prevent Data Loss</h5>
      <p>
        Although data loss is uncommon, if it does happen, it can wreak havoc on
        your life. When your computer starts running slowly or begins having
        occasional hiccups, it can require a system reboot that can ultimately
        result in lost data. However, keeping your computer maintained will
        lessen the likelihood of these instances and keep your data safe and
        secure for when you need to access it.
      </p>
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
      <img src="../assets/img/gallery/clean.jpeg" />
      <i class="fas fa-hand-point-right"></i>
      <h2>
        Bad examples
        <i class="fas fa-sad-tear"></i>
      </h2>
      <!-------------IMAGE GRID------------>
      <div class="image__grid">
        <img class="dirty" src="../assets/img/gallery/dirty.jpg" alt />
        <img class="dirty__1" src="../assets/img/gallery/dirty1.jpg" alt />
        <img class="dirty__2" src="../assets/img/gallery/dirty2.jpg" alt />
        <img class="dirty__3" src="../assets/img/gallery/dirty3.jpg" alt />
        <img class="dirty__4" src="../assets/img/gallery/dirty4.jpg" alt />
        <img class="dirty__5" src="../assets/img/gallery/dirty5.jpg" alt />
        <img class="dirty__6" src="../assets/img/gallery/dirty6.jpg" alt />
        <img class="dirty__7" src="../assets/img/gallery/dirty7.jpg" alt />
        <img class="dirty__8" src="../assets/img/gallery/dirty8.jpg" alt />
        <img class="dirty__9" src="../assets/img/gallery/dirty9.jpg" alt />
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
      width: 200px;
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
        transform: translateX(-5px);
      }
    }
  }
}

.dirty {
  grid-column: 1/3;
  grid-row: 1/3;
  &__1 {
    grid-column: 3/4;
    grid-row: 1/2;
  }
  &__2 {
    grid-column: 3/4;
    grid-row: 2/3;
  }
  &__3 {
    grid-column: 5/6;
    grid-row: 1/2;
  }
  &__4 {
    grid-column: 5/6;
    grid-row: 2/3;
  }
  &__5 {
    grid-column: 1/2;
    grid-row: 3/4;
  }
  &__6 {
    grid-column: 2/4;
    grid-row: 3/4;
  }
  &__7 {
    grid-column: 4/5;
    grid-row: 3/4;
  }
  &__8 {
    grid-column: 4/5;
    grid-row: 1/3;
  }
  &__9 {
    grid-column: 5/6;
    grid-row: 3/4;
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
