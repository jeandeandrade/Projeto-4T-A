<script setup>
import { ref } from "vue";

const testimonials = ref([
  [
    {
      stars: 5,
      text: "I absolutely love this coffee maker! I use it every morning. Cold coffee is my favorite and this little machine makes great cold coffee. It is strong and tasty.",
      name: "Marlina Jole",
      position: "CEO, Cofin",
      img: "/src/assets/images/img1.png",
    },
    {
      stars: 5,
      text: "I love the slim design of this Keurig. It works well except for the cold coffee. It states it does both hot and cold but I haven't found that to be accurate. The hot is perfect but it doesn't produce the cold coffee.",
      name: "Jhonatan Albert",
      position: "CEO, Samsang",
      img: "/src/assets/images/img2.png",
    },
    {
      stars: 5,
      text: "Nothing wrong with the maker but seller had it 'On sale' turns out their supposed sale price was actually what the product actually sells for normally. It's retail price is 119.99.",
      name: "Stevano Albert",
      position: "CEO, Mayura",
      img: "/src/assets/images/img3.png",
    },
  ],
  [
    {
      stars: 5,
      text: "I absolutely love this coffee maker! I use it every morning. Cold coffee is my favorite and this little machine makes great cold coffee. It is strong and tasty.",
      name: "Alex Morgan",
      position: "CTO, TechBiz",
      img: "/src/assets/images/img4.png",
    },
    {
      stars: 5,
      text: "I love the slim design of this Keurig. It works well except for the cold coffee. It states it does both hot and cold but I haven't found that to be accurate. The hot is perfect but it doesn't produce the cold coffee.",
      name: "Jane Doe",
      position: "Founder, Startup Inc",
      img: "/src/assets/images/img5.png",
    },
    {
      stars: 5,
      text: "Nothing wrong with the maker but seller had it 'On sale' turns out their supposed sale price was actually what the product actually sells for normally. It's retail price is 119.99.",
      name: "John Smith",
      position: "Manager, Office Co.",
      img: "/src/assets/images/img6.jpg",
    },
  ],
]);

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonials.value.length;
};

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + testimonials.value.length) %
    testimonials.value.length;
};
</script>

<template>
  <div class="font-bold text-3xl justify-center text-center gap-10">
    <h1>TESTIMONIALS</h1>
    <h2 class="text-sm text-neutral-300 mt-2">
      Voices of Satisfaction: Discover What Our Clients Have to Say
    </h2>
    <div class="flex flex-col md:flex-row md:flex-wrap justify-center gap-32 mt-16">
      <div v-for="(testimonial, index) in testimonials[currentSlide]" :key="index"
        class="bg-white m-4 p-4 border rounded-3xl shadow-md flex flex-col justify-between max-w-sm w-full min-h-[350px]">
        <div>
          <div class="flex justify-center mt-4">
            <svg v-for="star in testimonial.stars" :key="star" class="w-6 h-6 text-orange-400" fill="currentColor"
              viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.35 4.164a1 1 0 00.95.69h4.19c.969 0 1.371 1.24.588 1.81l-3.393 2.463a1 1 0 00-.364 1.118l1.349 4.163c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.393 2.463c-.784.57-1.838-.197-1.539-1.118l1.35-4.163a1 1 0 00-.364-1.118L2.66 9.59c-.783-.57-.38-1.81.588-1.81h4.19a1 1 0 00.95-.69l1.35-4.163z" />
            </svg>
          </div>

          <p class="text-center font-semibold text-base p-6 text-[#1F2026]">
            {{ testimonial.text }}
          </p>
        </div>

        <div class="flex flex-col items-center gap-2">
          <img class="w-12 h-12 rounded-full mb-2" :alt="`Foto de ${testimonial.name}`" :src="testimonial.img" />
          <h3 class="text-lg font-semibold">{{ testimonial.name }}</h3>
          <p class="text-neutral-400 text-sm">{{ testimonial.position }}</p>
        </div>
      </div>
    </div>

    <div class="flex flex-row items-center justify-center gap-2 mb-10 mt-10">
      <button @click="prevSlide">
        <img src="../assets/icons/arrow-left.svg" alt="Arrow"
          class="inline-block px-2 py-2 bg-white border-2 text-neutral-300 border-gray-300 rounded-full" />
      </button>
      <button @click="nextSlide">
        <img src="../assets/icons/icon-arrow-right.svg" alt="Arrow"
          class="inline-block px-2 py-2 bg-black rounded-full" />
      </button>
    </div>
  </div>
</template>
