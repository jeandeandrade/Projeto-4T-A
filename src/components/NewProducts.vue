<script setup></script>

<template>
  <main class="main__content h-auto ml-[16px] lg:ml-[119px] shrink-0 bg-[#F3F5F9] rounded-[30px]">
    <section class="content__products flex flex-col items-center gap-[40px] lg:gap-[80px] p-4 lg:p-0">
      <div class="title__content flex flex-col items-center gap-[8px] lg:gap-[16px]">
        <h1
          class="text-black font-[Inter] text-[24px] lg:text-[36px] not-italic font-semibold leading-[32px] lg:leading-[44px] tracking-[-0.72px] lg:tracking-[-1.44px]">
          NEW PRODUCTS
        </h1>
        <p
          class="text-[#8a8a8a] text-center font-[Inter] text-[14px] lg:text-[18px] not-italic font-normal leading-[22px] lg:leading-[28px] tracking-[-0.14px] lg:tracking-[-0.18px]">
          Choose the headset that best suits your needs. We offer top-quality
          options with <br class="hidden lg:block" />
          a variety of features to enhance your audio experience
        </p>
        <div class="showcase__container flex flex-wrap justify-center lg:justify-around gap-[16px] lg:gap-[32px]">
          <!-- Product 1 -->
          <div class="showcase__products flex flex-col items-center gap-[16px] lg:gap-[32px] w-full max-w-[304px]">
            <img class="w-full h-[327px] bg-cover bg-no-repeat" src="../assets/images/headsetProduct.svg"
              alt="headsets" />
            <div class="text__products flex flex-col items-center gap-[16px] lg:gap-[24px]">
              <p
                class="text-[#333] font-[Inter] text-[14px] lg:text-[18px] not-italic font-normal leading-[22px] lg:leading-[28px] tracking-[-0.14px] lg:tracking-[-0.18px] text-center">
                Gabini® K-29 Premium Headset with Multi-Device Connectivity and
                Noise-Canceling Technology, Black.
              </p>
              <div class="price__products">
                <h3
                  class="text-black font-[Inter] text-[20px] not-italic font-normal leading-[28px] tracking-[-0.2px] pb-[15px]">
                  $</h3>
                <span
                  class="current__price text-black font-[Inter] text-[35px] not-italic font-bold leading-normal tracking-[-1.6px]">94.99</span>
                <span
                  class="original__price text-[#e12237] font-[Inter] text-[16px] not-italic font-normal pb-[15px] line-through">$139.99</span>
              </div>
              <button class="button__cart bg-white border-[1px] border-[#B5B5B5] rounded-full pl-4 pr-2 py-3">
                ADD TO CART
                <img class="ml-4" src="../assets/icons/cart.svg" alt="" style="height: 24px; width: 24px" />
              </button>
            </div>
          </div>

          <!-- Product 2 -->
          <div class="showcase__products flex flex-col items-center gap-[16px] lg:gap-[32px] w-full max-w-[304px]">
            <img class="w-full h-[327px] bg-cover bg-no-repeat" src="../assets/images/headsetProduct.svg"
              alt="headsets" />
            <div class="text__products flex flex-col items-center gap-[16px] lg:gap-[24px]">
              <p
                class="text-[#333] font-[Inter] text-[14px] lg:text-[18px] not-italic font-normal leading-[22px] lg:leading-[28px] tracking-[-0.14px] lg:tracking-[-0.18px] text-center">
                Gabini® K-29 Premium Headset with Multi-Device Connectivity and
                Noise-Canceling Technology, Black.
              </p>
              <div class="price__products">
                <h3
                  class="text-black font-[Inter] text-[20px] not-italic font-normal leading-[28px] tracking-[-0.2px] pb-[15px]">
                  $</h3>
                <span
                  class="current__price text-black font-[Inter] text-[35px] not-italic font-bold leading-normal tracking-[-1.6px]">94.99</span>
                <span
                  class="original__price text-[#e12237] font-[Inter] text-[16px] not-italic font-normal pb-[15px] line-through">$139.99</span>
              </div>
              <button class="button__cart bg-white border-[1px] border-[#B5B5B5] rounded-full pl-4 pr-2 py-3">
                ADD TO CART
                <img class="ml-4" src="../assets/icons/cart.svg" alt="" style="height: 24px; width: 24px" />
              </button>
            </div>
          </div>

          <!-- Product 3 -->
          <div class="showcase__products flex flex-col items-center gap-[16px] lg:gap-[32px] w-full max-w-[304px]">
            <img class="w-full h-[327px] bg-cover bg-no-repeat" src="../assets/images/headsetProduct.svg"
              alt="headsets" />
            <div class="text__products flex flex-col items-center gap-[16px] lg:gap-[24px]">
              <p
                class="text-[#333] font-[Inter] text-[14px] lg:text-[18px] not-italic font-normal leading-[22px] lg:leading-[28px] tracking-[-0.14px] lg:tracking-[-0.18px] text-center">
                Gabini® K-29 Premium Headset with Multi-Device Connectivity and
                Noise-Canceling Technology, Black.
              </p>
              <div class="price__products">
                <h3
                  class="text-black font-[Inter] text-[20px] not-italic font-normal leading-[28px] tracking-[-0.2px] pb-[15px]">
                  $</h3>
                <span
                  class="current__price text-black font-[Inter] text-[35px] not-italic font-bold leading-normal tracking-[-1.6px]">94.99</span>
                <span
                  class="original__price text-[#e12237] font-[Inter] text-[16px] not-italic font-normal pb-[15px] line-through">$139.99</span>
              </div>
              <button class="button__cart bg-white border-[1px] border-[#B5B5B5] rounded-full pl-4 pr-2 py-3">
                ADD TO CART
                <img class="ml-4" src="../assets/icons/cart.svg" alt="" style="height: 24px; width: 24px" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.main__content {
  padding: 50px;
  padding-top: 80px;
  margin-bottom: 4%;
  width: 97%;
  margin-left: 31px;
  margin-bottom: 4%;
  width: 97%;
  margin-left: 31px;
}

.showcase__container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 144px;
  padding-top: 50px;
}

.price__products {
  display: flex;
  width: 194px;
  flex-direction: row;
  align-items: center;
  gap: 6px;
}

.button__cart {
  display: flex;
  color: #000;
  font-family: "Inter";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.12px;
  text-transform: uppercase;
}

.button__cart:hover {
  border: 1px solid #000;
  background: #fff;
  transition: ease-out 1s;
}

.button__cart img {
  display: flex;
  padding: 3.5px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: #000;
}
</style>
