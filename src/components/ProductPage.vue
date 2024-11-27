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
        v-for="(categoria, index) in categories"
        :key="index"
        class="flex flex-col items-center cursor-pointer hover:bg-gray-100 rounded-full p-2"
        @click="filterProducts(categoria.name)"
      >
        <div
          class="p-16 flex items-center justify-center rounded-full bg-white shadow-md"
        >
          <img :src="categoria.icon" alt="categoria icon" class="w-16 h-16" />
        </div>
        <p class="text-sm font-semibold mt-2">{{ categoria.name }}</p>
      </div>
    </div>
  </section>

  <section class="mt-20 m-16 p-2 bg-neutral-100 grid grid-cols-6 gap-4">
    <ProductCard
      v-for="(product, index) in filteredProducts"
      :key="index"
      :imagem="product.imagem"
      :titulo="product.titulo"
      :marca="product.marca"
      :categoria="product.categoria"
      :precoDe="product.precoDe"
      :precoPor="product.precoPor"
      :emOferta="product.emOferta"
      :descricao="product.descricao"
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
          imagem: "src/assets/icons/laptop.jpg",
          titulo: "Mac Book Pro",
          marca: "Apple",
          categoria: "Laptops & Tablets",
          precoDe: 99.0,
          precoPor: 49.0,
          emOferta: true,
          sku: "4145345346345",
          descricao:
            "A high-performance laptop suitable for all your professional and personal needs.",
        },
        {
          imagem: "src/assets/icons/LED-TV.jpg",
          titulo: "LED TV",
          marca: "Samsung",
          categoria: "Televisão",
          precoDe: 99.0,
          precoPor: 49.0,
          emOferta: true,
          sku: "04237856789",
          descricao:
            "Experience stunning visuals and vibrant colors with this cutting-edge LED TV.",
        },
        {
          imagem: "src/assets/icons/telefone.jpg",
          titulo: "Accessories",
          marca: "Dell",
          categoria: "Mobile Phones",
          precoDe: 99.0,
          precoPor: 49.0,
          emOferta: true,
          sku: "545673789",
          descricao:
            "Essential PC accessories to enhance your productivity and comfort.",
        },
        {
          imagem: "src/assets/icons/laptop.jpg",
          titulo: "Pavilion",
          marca: "HP",
          categoria: "Laptops & Tablets",
          precoDe: "",
          precoPor: 49.0,
          emOferta: false,
          sku: "96726587",
          descricao:
            "Reliable and affordable laptop for everyday tasks and entertainment.",
        },
        {
          imagem: "src/assets/icons/LED-TV.jpg",
          titulo: "OLED TV",
          marca: "LG",
          categoria: "Televisão",
          precoDe: "",
          precoPor: 49.0,
          emOferta: false,
          descricao:
            "A sleek and modern television designed for ultimate viewing experience.",
          sku: "134534678",
        },
        {
          imagem: "src/assets/icons/telefone.jpg",
          titulo: "iPhone 12",
          marca: "Apple",
          categoria: "Mobile Phones",
          precoDe: "",
          precoPor: 49.0,
          emOferta: false,
          sku: "32567267",
          descricao:
            "Stay connected with this feature-packed and stylish mobile phone.",
        },
        {
          imagem: "src/assets/icons/hometheater.jpg",
          titulo: "Soundbar Bar 1000",
          marca: "JBL",
          categoria: "Audio & Video",
          precoDe: "",
          precoPor: 49.0,
          emOferta: false,
          sku: "546756367",
          descricao:
            "Stay connected with this feature-packed and stylish mobile phone.",
        },
        {
          imagem: "src/assets/icons/hometheater.jpg",
          titulo: "Soundbar HW-Q990D",
          marca: "Samsung",
          categoria: "Audio & Video",
          precoDe: 99.0,
          precoPor: 49.0,
          emOferta: true,
          sku: "13294425",
          descricao:
            "Stay connected with this feature-packed and stylish mobile phone.",
        },
        {
          imagem: "src/assets/icons/hometheater.jpg",
          titulo: "Orpheus GS550",
          marca: "Redragon",
          categoria: "Audio & Video",
          precoDe: "",
          precoPor: 49.0,
          emOferta: false,
          sku: "13294425",

          descricao:
            "Stay connected with this feature-packed and stylish mobile phone.",
        },
        {
          imagem: "src/assets/icons/computador.jpg",
          titulo: "Microfone QuadCast",
          marca: "HyperX",
          categoria: "Periféricos Gamer",
          precoDe: 99.0,
          precoPor: 49.0,
          emOferta: true,
          sku: "53470105",
          descricao:
            "Stay connected with this feature-packed and stylish mobile phone.",
        },
        {
          imagem: "src/assets/icons/computador.jpg",
          titulo: "Webcam Full HD",
          marca: "Logitech",
          categoria: "Periféricos Gamer",
          precoDe: 99.0,
          precoPor: 49.0,
          sku: "01299421",
          emOferta: true,
          descricao:
            "Stay connected with this feature-packed and stylish mobile phone.",
        },
        {
          imagem: "src/assets/icons/computador.jpg",
          titulo: "PlayStation®VR2",
          marca: "Sony",
          categoria: "Periféricos Gamer",
          precoPor: 49.0,
          precoDe: "",
          sku: "01299421",
          emOferta: false,
          descricao:
            "Stay connected with this feature-packed and stylish mobile phone.",
        },
      ],
      filteredProducts: [],
    };
  },
  methods: {
    filterProducts(categoriaName) {
      this.filteredProducts = this.products.filter(
        (product) => product.categoria === categoriaName
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
