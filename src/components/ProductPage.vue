<template>

  <section
    class="bg-neutral-100 mt-16 m-10 rounded-2xl md:h-[316px] px-6 shadow"
  >
    <div class="flex gap-4 items-center mb-4">
      <h2 class="text-lg font-bold mt-4">Comprar por categorias</h2>
      <button
        @click="resetFilter"
        class="text-sm text-gray-600 hover:underline mt-4"
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
          <img :src="categoria.icon" alt="categoria icon" class="w-16 h-16 img-categorias" />
        </div>
        <p class="text-sm font-semibold mt-2">{{ categoria.name }}</p>
      </div>
    </div>
  </section>

  <section class="mt-20 m-16 p-2 bg-neutral-100 grid grid-cols-6 gap-4">
    <ProductCard
      v-for="(product, index) in filteredProducts"

      :key="index"
      :imagem="product.images[0]"
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

<style scoped>

.img-categorias {
  object-fit: cover; /* Para garantir que a imagem se ajuste bem */
  width: 70px; /* Ajuste o tamanho conforme necessário */
  height: 70px;
}
</style>

<script>
import ProductCard from "@/components/ProductCard.vue";
import PostProductsDataService from "@/services/PostProductsDataService";

export default {
  name: "ProductPage",
  components: {
    ProductCard,
  },
  data() {
    return {
      categories: [], // As categorias virão da extração dos produtos
      products: [], // Os produtos virão da API
      filteredProducts: [], // Produtos filtrados por categoria
    };
  },
  methods: {
    // Extrai categorias únicas a partir dos produtos recebidos da API
    extractCategories() {
      console.log("Extraindo categorias...");

      // Extrair categorias únicas com base no campo categoriaId
      const uniqueCategories = [
        ...new Set(this.products.map((product) => product.categoriaId)),
      ];

      // Criar as categorias com base nos produtos
      this.categories = uniqueCategories.map((categoryId) => {
        const categoryProducts = this.products.filter(
          (product) => product.categoriaId === categoryId
        );

        // Pega a imagem do primeiro produto ou uma imagem padrão
        const categoryImage = categoryProducts.length > 0
          ? categoryProducts[0].images[0]  // Pegando a primeira imagem do produto
          : "https://worldshoptb.com/wp-content/uploads/2021/05/img-worldshop-banner-site.png"; // Imagem padrão

        // Adiciona a categoria ao array
        return {
          name: `Categoria ${categoryId}`,  // Substitua por nomes de categorias mais específicos, se possível
          icon: categoryImage, // Imagem associada à categoria
        };
      });
    },

    
    async fetchProducts() {
      try {
        console.log("Carregando produtos da API...");
        const response = await PostProductsDataService.getProducts();
        console.log("Resposta da API:", response);

        this.products = response.data;

        this.filteredProducts = this.products;
        console.log(this.filteredProducts);

        this.extractCategories();
      } catch (error) {
        console.error("Erro ao carregar produtos", error);
      }
    },

    
    filterProducts(categoriaName) {
      console.log(`Filtrando produtos pela categoria: ${categoriaName}`);
      this.filteredProducts = this.products.filter(
        (product) => `Categoria ${product.categoriaId}` === categoriaName
      );
      console.log("Produtos filtrados:", this.filteredProducts);
    },

    
    resetFilter() {
      console.log("Resetando filtro...");
      this.filteredProducts = this.products;
      console.log("Produtos após reset:", this.filteredProducts);
    },
  },

  mounted() {
    console.log("Componente montado, carregando produtos...");
    this.fetchProducts();
  },
};
</script>
