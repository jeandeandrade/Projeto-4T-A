<script setup></script>

<template>
  <div class="font-bold text-3xl justify-center text-center gap-10">
    <h1>TESTIMONIALS</h1>
    <h2 class="text-sm text-neutral-300 mt-2">
      Voices of Satisfaction: Discover What Our Clients Have to Say
    </h2>
    <div class="flex flex-row">
      <div class="max-w-sm mx-auto bg-white m-10 p-4 border rounded-3xl">
        <div class="flex justify-center mt-4">
          <svg
            v-for="star in 5"
            :key="star"
            class="w-6 h-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.35 4.164a1 1 0 00.95.69h4.19c.969 0 1.371 1.24.588 1.81l-3.393 2.463a1 1 0 00-.364 1.118l1.349 4.163c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.393 2.463c-.784.57-1.838-.197-1.539-1.118l1.35-4.163a1 1 0 00-.364-1.118L2.66 9.59c-.783-.57-.38-1.81.588-1.81h4.19a1 1 0 00.95-.69l1.35-4.163z"
            />
          </svg>
        </div>
        <p class="text-center font-semibold text-base p-6 text-[#1F2026]">
          I absolutely love this coffee maker! I use it every morning. Cold
          coffee is my favorite and this little machine makes great cold coffee.
          It is strong and tasty. I regular coffee cup or a larger stainless
          steel cup will work.
        </p>
        <div class="flex flex-col items-center gap-2">
          <img
            class="w-12 h-12 rounded-full mb-2"
            alt="Foto de perfil"
            src="/images/img1.png"
          />
          <h3 class="text-lg font-semibold">Marlina Jole</h3>
          <p class="text-neutral-400 text-sm">CEO, Cofin</p>
        </div>
      </div>
      <div class="max-w-sm mx-auto bg-white m-10 p-4 border rounded-3xl">
        <div class="flex justify-center mt-4">
          <svg
            v-for="star in 5"
            :key="star"
            class="w-6 h-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.35 4.164a1 1 0 00.95.69h4.19c.969 0 1.371 1.24.588 1.81l-3.393 2.463a1 1 0 00-.364 1.118l1.349 4.163c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.393 2.463c-.784.57-1.838-.197-1.539-1.118l1.35-4.163a1 1 0 00-.364-1.118L2.66 9.59c-.783-.57-.38-1.81.588-1.81h4.19a1 1 0 00.95-.69l1.35-4.163z"
            />
          </svg>
        </div>
        <p class="text-center font-semibold text-base p-6 text-[#1F2026]">
          I love the slim design of this Keurig. It works well except for the
          cold coffee. It states it does both hot and cold but I haven't found
          that to be accurate. The hot is perfect but it doesn't produce the
          cold coffee.
        </p>
        <div class="flex flex-col items-center gap-2">
          <img
            class="w-12 h-12 rounded-full mb-2"
            alt="Foto de perfil"
            src="/images/img2.png"
          />
          <h3 class="text-lg font-semibold">Jhonatan Albert</h3>
          <p class="text-neutral-400 text-sm">CEO, Samsang</p>
        </div>
      </div>
      <div class="max-w-sm mx-auto bg-white m-10 p-4 border rounded-3xl">
        <div class="flex justify-center mt-4">
          <svg
            v-for="star in 5"
            :key="star"
            class="w-6 h-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.35 4.164a1 1 0 00.95.69h4.19c.969 0 1.371 1.24.588 1.81l-3.393 2.463a1 1 0 00-.364 1.118l1.349 4.163c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.393 2.463c-.784.57-1.838-.197-1.539-1.118l1.35-4.163a1 1 0 00-.364-1.118L2.66 9.59c-.783-.57-.38-1.81.588-1.81h4.19a1 1 0 00.95-.69l1.35-4.163z"
            />
          </svg>
        </div>
        <p class="text-center font-semibold text-base p-6 text-[#1F2026]">
          Nothing wrong with the maker but seller had it "On sale" turns out
          their supposed sale price was actually what the product actually sells
          for normally. It's retail price is 119.99. And is currently on sale
          for 64.99.
        </p>
        <div class="flex flex-col items-center gap-2">
          <img
            class="w-12 h-12 rounded-full mb-2"
            alt="Foto de perfil"
            src="/images/img3.png"
          />
          <h3 class="text-lg font-semibold">Stevano Albert</h3>
          <p class="text-neutral-400 text-sm">CEO, Mayura</p>
        </div>
      </div>
    </div>
  </div>
</template>
