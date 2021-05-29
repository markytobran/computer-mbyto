<template>
  <!--------------DETAILS------------>
  <div class="details">
    <img src="../assets/img/laptoprepair.jpg" alt="pc" />
    <div class="details__text">
      <h1>PC/Laptop Repair</h1>
      <p>It is hard to imagine our lives without computers. For most of us, the days are few and far between when we do not use our computers to pay bills, play games, surf the internet. Since computers are such an integral part of our lives, it is crucial that we take care of them by having them properly maintained. We also understand how important a computer is, especially for a student, it's a valuable tool for word processing documents and storing all your assignments.</p>
      <h5>Outstanding setup service</h5>
      <p>Our experts can setup your new device computer, printer, internet, smartphone, tablet & other WiFi connected smart devices in your home & office. We'll make sure it's setup just the way you like it.</p>
      <h5>Upgrade/Speed up your PC</h5>
      <p>Whether your computer needs a tune-up, an upgrade or your computer become slower due to general use, bits of old programs left behind after updates & or removal, we can clear these out making it faster again. or we can offer you the best and honest advice and have a service that suits you.</p>
      <h5>Quick diagnose</h5>
      <p>If you suddenly lose your picture, it’ll either be the monitor or the graphic card in the base unit that’s at fault. We will replace either part or offer you the best solution. Other parts which can fail are the hard drive (the device that stores all your valuable data), the processor , RAM or the motherboard. Whichever it is, we’ve been diagnosing these problems for a while, so you can be sure we’ll find out very quickly what the problem is,and fix it as soon as possible. We are familiar with all brands of computer ( eg. Dell, Toshiba, Acer).</p>
      <h5>As we know that our customers rely on their computers for everyday needs so we aim to solve the problem as quick as possible.</h5>
    </div>
    <!------------VIDEO------------->
    <div class="video__div">
      <iframe
        width="200"
        height="200"
        src="https://www.youtube.com/embed/PBdkuMCM4vs"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="200"
        height="200"
        src="https://www.youtube.com/embed/HFf35ISTEK0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <iframe
        width="200"
        height="200"
        src="https://www.youtube.com/embed/_MOe71kBPOY"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <!-------------IMAGE GALLERY------------>
    <div class="image__gallery">
      <img src="../assets/img/repair/badcomp.png" />
      <i class="fas fa-hand-point-right"></i>
      <h2>
        NOTHING IS IMPOSSIBLE FOR US
        <i class="fas fa-laptop-medical"></i>
      </h2>
      <!-------------IMAGE GRID------------>
      <div class="image__grid">
        <img class="dirty" src="../assets/img/repair/virus_comp.jpg" alt />
        <img class="dirty__1" src="../assets/img/repair/bluedeath.jpg" alt />
        <img class="dirty__2" src="../assets/img/repair/cpu.jpg" alt />
        <img class="dirty__3" src="../assets/img/repair/gaming_ram.jpg" alt />
        <img class="dirty__4" src="../assets/img/repair/gpu.jpg" alt />
        <img class="dirty__5" src="../assets/img/repair/hdd.jpg" alt />
        <img class="dirty__6" src="../assets/img/repair/laptop_ram.jpg" alt />
        <img class="dirty__9" src="../assets/img/repair/ssd.jpg" alt />
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
      margin-left: 5rem;
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
        transform: translateX(5px);
      }
    }
  }
}

.dirty {
  grid-column: 1/2;
  grid-row: 4/5;
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