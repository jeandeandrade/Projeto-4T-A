<template>
  <section
    class="bg-neutral-100 mt-16 m-10 rounded-2xl md:h-[316px] px-6 shadow"
  >
    <div class="flex gap-4 items-center mb-4">
      <h2 class="text-lg font-bold">Shop By Categories</h2>
      <a href="#" class="text-sm text-gray-600 hover:underline">View all</a>
    </div>
    <div class="flex gap-4 justify-between items-center mt-8 text-center">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="flex flex-col items-center cursor-pointer hover:bg-gray-100 rounded-full p-2"
      >
        <div
          class="p-16 flex items-center justify-center rounded-full bg-white shadow-md"
        >
          <img :src="category.icon" alt="category icon" class="w-16 h-16" />
        </div>
        <p class="text-sm font-semibold mt-2">{{ category.name }}</p>
      </div>
    </div>
  </section>
  <section class="mt-20 m-16 p-2 bg-neutral-100 grid grid-cols-6 gap-4">
    <ProductCard
      v-for="(product, index) in products"
      :key="index"
      :image="product.image"
      :title="product.title"
      :oldPrice="product.oldPrice"
      :newPrice="product.newPrice"
      :onSale="product.onSale"
    />
  </section>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "ProductPage",
  components: {
    ProductCard,
  },
  data() {
    return {
      categories: [
        { name: "Laptops & Tablets", icon: "src/assets/icons/laptop.jpg" },
        { name: "Televisions", icon: "src/assets/icons/LED-TV.jpg" },
        { name: "PCs & Accessories", icon: "src/assets/icons/telefone.jpg" },
        { name: "Audio & Video", icon: "src/assets/icons/hometheater.jpg" },
        {
          name: "Gaming & Accessories",
          icon: "src/assets/icons/computador.jpg",
        },
        { name: "Mobile Phones", icon: "src/assets/icons/telefone.jpg" },
      ],
      products: [
        {
          image: "src/assets/icons/laptop.jpg",
          title: "(Product 1) Laptops & Tablets",
          oldPrice: 99.0,
          newPrice: 49.0,
          onSale: true,
        },
        {
          image: "src/assets/icons/LED-TV.jpg",
          title: "(Product 2) Televisions",
          oldPrice: 99.0,
          newPrice: 49.0,
          onSale: true,
        },
        {
          image: "src/assets/icons/telefone.jpg",
          title: "(Product 3) PCs & Accessories",
          oldPrice: 99.0,
          newPrice: 49.0,
          onSale: true,
        },
        {
          image: "src/assets/icons/laptop.jpg",
          title: "(Product 4) Laptops & Tablets",
          oldPrice: 99.0,
          newPrice: 49.0,
          onSale: false,
        },
        {
          image: "src/assets/icons/LED-TV.jpg",
          title: "(Product 5) Televisions",
          oldPrice: 99.0,
          newPrice: 49.0,
          onSale: false,
        },
        {
          image: "src/assets/icons/telefone.jpg",
          title: "(Product 6) Mobile Phones",
          oldPrice: 99.0,
          newPrice: 49.0,
          onSale: false,
        },
      ],
    };
  },
};
</script>
