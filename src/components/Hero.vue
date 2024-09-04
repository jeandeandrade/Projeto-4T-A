<script setup></script>

<template>
  <div class="relative overflow-hidden">
    <section
      class="mt-[95px] container mx-auto px-12 grid grid-cols-2 gap-6 relative z-10"
    >
      <div class="col-span-1 mb-5 hero__text__column">
        <div class="hero__text mb-16">
          <h1 class="hero__text__h1">GABINI HEADSET STORE</h1>
        </div>

        <div class="flex items-start">
          <div class="line__hero mr-5"></div>

          <div class="flex flex-col">
            <div class="hero__subtitle mb-1">
              <p class="hero__subtitle__p">
                Welcome to Gabini quality, at<br />
                our most welcoming price.
              </p>
            </div>

            <div class="hero__button mt-5">
              <button class="hero__button__style flex items-center">
                SEE MORE DETAILS
                <span class="hero__button__icon ml-2">
                  <img
                    src="../assets/icons/icon-arrow-right.svg"
                    alt="Arrow"
                    class="inline-block w-6 h-6"
                  />
                </span>
              </button>
            </div>

            <div class="flex mt-10">
              <div class="hero__rating__stars mr-12">
                <div class="flex items-center">
                  <span class="hero__rating__stars__text">4.8</span>
                  <img
                    src="../assets/icons/stars.svg"
                    alt="Stars rating"
                    class="ml-2 w-30 h-30"
                  />
                </div>

                <span class="hero__rating__stars__text__muted"
                  >2,290 ratings</span
                >
              </div>

              <div class="hero__rating__2">
                <div class="hero__rating__text">10K+</div>
                <div class="hero__rating__text__muted">
                  Bought in past month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-1 hero__column">
        <div class="hero__image__card">
          <img src="../assets/images/hero_fone.svg" alt="Image fone" />

          <div class="hero__battery" id="battery">
            <img src="../assets/icons/battery.svg" alt="Icon Battery" />

            <div class="hero__battery__info">
              <p>Battery</p>
              <h4>78 hours</h4>
            </div>
          </div>

          <div class="hero__warranty" id="warranty">
            <img src="../assets/icons/warranty.svg" alt="Icon Warranty" />

            <div class="hero__warranty__info">
              <p>Warranty</p>
              <h4>2 years</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="line__promo__text">
      <div class="marquee">
        <div class="marquee">
          <span class="marque___text">
            YOUR TEXT HERE &nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT HERE
            &nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT HERE &nbsp;&nbsp;*&nbsp;&nbsp;
            YOUR TEXT HERE &nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT HERE
          </span>
        </div>
      </div>
    </div>

    <div class="line__promo__text__2">
      <div class="marquee__2">
        <div class="marquee__2">
          <span class="marque___text">
            YOUR TEXT HERE &nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT HERE
            &nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT HERE &nbsp;&nbsp;*&nbsp;&nbsp;
            YOUR TEXT HERE &nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT
            HERE&nbsp;&nbsp;*&nbsp;&nbsp; YOUR TEXT HERE
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line__promo__text {
  position: absolute;
  width: 4112px;
  height: 46px;
  transform: rotate(27.807deg);
  padding: 7px 0px;
  background: var(--Black-black-500, #000);
  z-index: -1;
  top: 94%;
}

.line__promo__text__2 {
  position: fixed;
  width: 2030px;
  height: 46px;
  transform: rotate(-29.185deg);
  padding: 7px 0px;
  background: var(--Black-black-500, #000);
  z-index: -1;
  top: 89%;
}

.relative {
  position: relative;
  overflow: hidden;
}

.marquee {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 1000s linear infinite;
  color: white;
  font-size: 1.5rem;
  font-family: "Inter", sans-serif;
}

@keyframes marquee {
  10% {
    transform: translateX(25%);
  }

  100% {
    transform: translateX(-100%);
  }
}

.marquee__2 {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 1000s linear infinite;
  color: white;
  font-size: 1.5rem;
  font-family: "Inter", sans-serif;
}

@keyframes marquee__2 {
  10% {
    transform: translateX(1%);
  }

  100% {
    transform: translateX(-100%);
  }
}

.marquee__text {
  color: var(--White-white-50, #fff);
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.marquee__icon {
  width: 10px;
  height: 10px;
  fill: var(--White-white-50, #fff);
}

section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  z-index: 10;
}

.hero__text {
  width: 100%;
}

.hero__text__h1 {
  color: var(--Black-black-500, #000);
  font-family: "Inter", sans-serif;
  font-size: 100px;
  font-style: normal;
  font-weight: 700;
  line-height: 90px;
  letter-spacing: -4px;
  text-transform: uppercase;
}

.hero__subtitle {
  width: 100%;
}

.hero__subtitle__p {
  color: var(--Base-100, #1f2026);
  font-family: "Inter", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -1.44px;
}

.hero__button {
  margin-top: 45px;
}

.hero__button__style {
  display: inline-flex;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
  border: 1px solid var(--White-white-700, #b5b5b5);
  background: var(--White-white-50, #fff);
  color: var(--Black-black-500, #000);
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.14px;
  text-transform: uppercase;
}

.hero__button__icon {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--Black-black-500, #000);
  padding: 8px;
  border-radius: 30px;
}

.line__hero {
  width: 1px;
  height: 190px;
  background: var(--Base-40, #bfc0c2);
}

.hero__rating__stars {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero__rating__stars__text {
  color: var(--Black-black-500, #000);
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.48px;
}

.hero__rating__stars__text__muted {
  color: var(--Black-black-200, #8a8a8a);
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.16px;
}

.hero__rating__2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero__rating__text {
  color: var(--Black-black-500, #000);
  font-family: "Inter", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: -0.3px;
}

.hero__rating__text__muted {
  color: var(--Black-black-500, #000);
  font-family: "Gilroy-Medium", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

.hero__image__card {
  position: relative;
  width: 82%;
  height: 36.1875rem;
  flex-shrink: 0;
  border-radius: 1.875rem;
  margin-top: 3%;
  margin-left: 15%;
}

.hero__battery,
.hero__warranty {
  p {
    color: var(--Black-black-200, #8a8a8a);
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    letter-spacing: -0.01125rem;
    margin: 0;
  }

  h4 {
    color: var(--Black-black-500, #000);
    text-align: center;
    font-family: "Inter", sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.625rem;
    letter-spacing: -0.0125rem;
    margin: 0;
  }
}

.hero__battery,
.hero__warranty {
  position: absolute;
  display: flex;
  width: 16.25rem;
  padding: 1rem 1.25rem;
  align-items: center;
  gap: 1rem;
  border-radius: 3.75rem;
  background: var(--White-white-50, #fff);
  box-shadow: 0px 24px 44px 0px rgba(226, 216, 239, 0.3);
}

#battery {
  bottom: 3%;
  left: 4%;
}

#warranty {
  top: 27%;
  left: 55%;
}

.hero__battery__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
}

.hero__warranty__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
}

@media only screen and (max-width: 480px) {
  .line__promo__text,
  .line__promo__text__2 {
    display: none;
  }

  .hero__column {
    display: none;
  }

  .hero__text__column {
    margin: auto;
  }

  .hero__text__h1 {
    font-size: 75px;
    text-align: justify;
  }
}

@media only screen and (min-width: 481px) and (max-width: 767px) {
  .hero__column {
    display: none;
  }

  .hero__text__column {
    margin: auto;
  }

  .hero__text__h1 {
    font-size: 80px;
    text-align: justify;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .hero__column {
    display: none;
  }

  .hero__text__column {
    margin: auto;
  }

  .hero__text__h1 {
    font-size: 80px;
    text-align: justify;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .hero__column {
    display: none;
  }

  .hero__text__column {
    margin: auto;
  }

  .hero__text__h1 {
    font-size: 80px;
    text-align: justify;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .hero__column {
    display: none;
  }

  .hero__text__column {
    margin: auto;
  }

  .hero__text__h1 {
    font-size: 80px;
    text-align: justify;
  }
}
</style>
