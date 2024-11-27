<template>
  <section
    class="bg-neutral-100 mt-16 m-10 rounded-2xl md:h-[316px] px-6 shadow"
  >
    <div class="flex gap-4 items-center mb-4">
      <h2 class="text-lg font-bold">Comprar por categorias</h2>
      <button
        @click="resetFilter"
        class="text-sm text-gray-600 hover:underline"
      >
        Ver todos os produtos
      </button>
    </div>
    <div class="flex gap-4 justify-between items-center mt-8 text-center">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="flex flex-col items-center cursor-pointer hover:bg-gray-100 rounded-full p-2"
        @click="filterProducts(category.name)"
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
      v-for="(product, index) in filteredProducts"
      :key="index"
      :image="product.image"
      :title="product.title"
      :mark="product.mark"
      :category="product.category"
      :oldPrice="product.oldPrice"
      :newPrice="product.newPrice"
      :onSale="product.onSale"
      :description="product.description"
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
        { name: "Televisão", icon: "src/assets/icons/LED-TV.jpg" },
        { name: "Audio & Video", icon: "src/assets/icons/hometheater.jpg" },
        {
          name: "Periféricos Gamer",
          icon: "src/assets/icons/computador.jpg",
        },
        { name: "Mobile Phones", icon: "src/assets/icons/telefone.jpg" },
      ],
      products: [
        {
          image: "src/assets/icons/laptop.jpg",
          title: "Mac Book Pro",
          mark: "Apple",
          category: "Laptops & Tablets",
          oldPrice: 99.0,
          newPrice: 49.0,
          onSale: true,
          sku: "4145345346345",
          description:
            "A high-performance laptop suitable for all your professional and personal needs.",
        },
        {
          image: "src/assets/icons/LED-TV.jpg",
          title: "LED TV",
          mark: "Samsung",
          category: "Televisão",
          oldPrice: 99.0,
          newPrice: 49.0,
          onSale: true,
          sku: "04237856789",
          description:
            "Experience stunning visuals and vibrant colors with this cutting-edge LED TV.",
        },
        {
          image: "src/assets/icons/telefone.jpg",
          title: "Accessories",
          mark: "Dell",
          category: "Mobile Phones",
          oldPrice: 99.0,
          newPrice: 49.0,
          onSale: true,
          sku: "545673789",
          description:
            "Essential PC accessories to enhance your productivity and comfort.",
        },
        {
          image: "src/assets/icons/laptop.jpg",
          title: "Pavilion",
          mark: "HP",
          category: "Laptops & Tablets",
          oldPrice: "",
          newPrice: 49.0,
          onSale: false,
          sku: "96726587",
          description:
            "Reliable and affordable laptop for everyday tasks and entertainment.",
        },
        {
          image: "src/assets/icons/LED-TV.jpg",
          title: "OLED TV",
          mark: "LG",
          category: "Televisão",
          oldPrice: "",
          newPrice: 49.0,
          onSale: false,
          description:
            "A sleek and modern television designed for ultimate viewing experience.",
          sku: "134534678",
        },
        {
          image: "src/assets/icons/telefone.jpg",
          title: "iPhone 12",
          mark: "Apple",
          category: "Mobile Phones",
          oldPrice: "",
          newPrice: 49.0,
          onSale: false,
          sku: "32567267",
          description:
            "Stay connected with this feature-packed and stylish mobile phone.",
        },
        {
          image: "src/assets/icons/hometheater.jpg",
          title: "Soundbar Bar 1000",
          mark: "JBL",
          category: "Audio & Video",
          oldPrice: "",
          newPrice: 49.0,
          onSale: false,
          sku: "546756367",
          description:
            "Stay connected with this feature-packed and stylish mobile phone.",
        },
        {
          image: "src/assets/icons/hometheater.jpg",
          title: "Soundbar HW-Q990D",
          mark: "Samsung",
          category: "Audio & Video",
          oldPrice: 99.0,
          newPrice: 49.0,
          onSale: true,
          sku: "13294425",
          description:
            "Stay connected with this feature-packed and stylish mobile phone.",
        },
        {
          image: "src/assets/icons/hometheater.jpg",
          title: "Orpheus GS550",
          mark: "Redragon",
          category: "Audio & Video",
          oldPrice: "",
          newPrice: 49.0,
          onSale: false,
          sku: "13294425",

          description:
            "Stay connected with this feature-packed and stylish mobile phone.",
        },
        {
          image: "src/assets/icons/computador.jpg",
          title: "Microfone QuadCast",
          mark: "HyperX",
          category: "Periféricos Gamer",
          oldPrice: 99.0,
          newPrice: 49.0,
          onSale: true,
          sku: "53470105",
          description:
            "Stay connected with this feature-packed and stylish mobile phone.",
        },
        {
          image: "src/assets/icons/computador.jpg",
          title: "Webcam Full HD",
          mark: "Logitech",
          category: "Periféricos Gamer",
          oldPrice: 99.0,
          newPrice: 49.0,
          sku: "01299421",
          onSale: true,
          description:
            "Stay connected with this feature-packed and stylish mobile phone.",
        },
        {
          image: "src/assets/icons/computador.jpg",
          title: "PlayStation®VR2",
          mark: "Sony",
          category: "Periféricos Gamer",
          newPrice: 49.0,
          oldPrice: "",
          sku: "01299421",
          onSale: false,
          description:
            "Stay connected with this feature-packed and stylish mobile phone.",
        },
      ],
      filteredProducts: [],
    };
  },
  methods: {
    filterProducts(categoryName) {
      this.filteredProducts = this.products.filter(
        (product) => product.category === categoryName
      );
    },
    // Resetar filtro para mostrar todos os produtos
    resetFilter() {
      this.filteredProducts = this.products;
    },
  },
  mounted() {
    this.filteredProducts = this.products;
  },
};
</script>
