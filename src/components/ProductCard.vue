<template>
  <div class="max-w-xs border rounded-lg shadow-md p-4 relative bg-white">
    <div
      v-if="emOferta"
      class="absolute top-2 left-2 bg-red-100 text-red-500 text-xs font-semibold py-1 px-2 rounded"
    >
      Oferta
    </div>
    <div class="flex justify-center items-center mb-4">
      <img :src="imagem" :alt="titulo" class="h-40 w-auto object-contain" />
    </div>
    <h3
      class="items-center justify-center text-center font-semibold text-gray-800 mb-2"
    >
      {{ marca }} {{ titulo }}
    </h3>
    <p class="text-sm text-gray-500 mb-2">Categoria: {{ categoria }}</p>
    <div class="flex items-center space-x-2">
      <span v-if="precoDe" class="text-sm line-through text-gray-400">
        ${{ precoDe }}
      </span>
      <span class="text-sm text-gray-500">Por Apenas:</span>
      <span class="text-sm font-bold text-red-500">${{ precoPor }}</span>
    </div>
    <button
      @click="openModal"
      class="w-full mt-4 py-2 px-4 bg-gray-800 text-white text-sm font-semibold rounded hover:bg-gray-700"
    >
      Ver detalhes
    </button>
  </div>

  <div
    v-if="modalVisible"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="modal-content bg-white rounded-lg w-11/12 md:w-2/5 p-5">
      <div class="flex justify-between">
        <h3 class="text-sm font-semibold text-gray-800 mb-2">
          {{ titulo }}
        </h3>
        <div
          v-if="emOferta"
          class="bg-red-100 text-red-500 text-xs font-semibold py-1 px-2 rounded"
        >
          Sale
        </div>
      </div>
      <div class="grid grid-cols-3">
        <div class="col-span-1">
          <div class="flex justify-center items-center mb-4">
            <img
              :src="imagem"
              :alt="titulo"
              class="h-40 w-auto object-contain"
            />
          </div>
        </div>
        <div class="col-span-2 mt-8">
          <div class="flex items-center space-x-2 text-sm text-gray-500">
            <span>Marca:</span>
            <span>{{ marca }}</span>
          </div>
          <div class="flex items-center space-x-2 text-sm text-gray-500">
            <span>Categoria:</span>
            <span>{{ categoria }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-sm text-gray-500">Preço:</span>
            <span v-if="precoDe" class="text-sm line-through text-gray-400">
              ${{ precoDe }}
            </span>
            <span v-if="emOferta" class="text-sm text-gray-500"
              >Por Apenas</span
            >
            <span class="text-sm font-bold text-red-500">${{ precoPor }}</span>
          </div>
        </div>
      </div>
      <span class="text-sm font-semibold text-gray-800"
        >Descrição detalhada do produto:</span
      >
      <p class="text-sm text-gray-500 indent-4 mt-2">{{ descricao }}</p>
      <div class="text-right mt-8">
        <button
          @click="modalVisible = false"
          class="mr-4 py-2 px-4 bg-gray-800 text-white text-sm font-semibold rounded hover:bg-gray-700"
        >
          Adicionar ao carrinho
        </button>
        <button
          @click="modalVisible = false"
          class="py-2 px-4 bg-gray-800 text-white text-sm font-semibold rounded hover:bg-gray-700"
        >
          Fechar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ProductCard",
  props: {
    imagem: {
      type: String,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
    marca: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      required: true,
    },
    precoDe: {
      type: Number,
      required: false,
    },
    precoPor: {
      type: Number,
      required: true,
    },
    emOferta: {
      type: Boolean,
      default: false,
    },
    descricao: {
      type: String,
      required: true,
    },
    sku: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const modalVisible = ref(false);

    const openModal = () => {
      modalVisible.value = true;
    };

    const closeModal = () => {
      modalVisible.value = false;
    };

    return {
      modalVisible,
      openModal,
      closeModal,
    };
  },
};
</script>

<style scoped>
.modal-fade-slide-enter-active,
.modal-fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.modal-fade-slide-enter-from,
.modal-fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
