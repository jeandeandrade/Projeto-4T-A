<template>
  <section
    class="bg-neutral-100 mt-16 m-10 rounded-2xl md:h-[316px] px-6 shadow"
  >
    <div class="flex gap-4 items-center mb-4">
      <h2 class="text-lg font-bold">Shop By Categories</h2>
      <a href="#" class="text-sm text-blue-600 hover:underline">View all</a>
    </div>
    <div
      class="flex gap-4 justify-between items-center mt-8 text-center overflow-x-scroll scrollbar-hide"
    >
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="flex flex-col items-center cursor-pointer hover:bg-gray-100 rounded-full p-2"
      >
        <div
          class="p-16 flex items-center justify-center rounded-full bg-white shadow-md"
        >
          <img :src="category.icon" alt="category icon" class="w-10 h-10" />
        </div>
        <p class="text-sm text-gray-600 mt-2">{{ category.name }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { name: "Laptops & Tablets", icon: "../icons/laptop.jpg" },
        { name: "Televisions", icon: "/icons/tv.png" },
        { name: "PCs & Accessories", icon: "/icons/pc.png" },
        { name: "Audio & Video", icon: "/icons/audio.png" },
        { name: "Gaming & Accessories", icon: "/icons/gaming.png" },
        { name: "Mobile Phones", icon: "/icons/mobile.png" },
      ],
    };
  },
};
</script>

<style>
/* Esconde a barra de rolagem do carrossel */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE e Edge */
  scrollbar-width: none; /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}
</style>
