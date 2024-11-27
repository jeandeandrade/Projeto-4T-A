<template>
  <div class="max-w-xs border rounded-lg shadow-md p-4 relative bg-white">
    <div
      v-if="onSale"
      class="absolute top-2 left-2 bg-red-100 text-red-500 text-xs font-semibold py-1 px-2 rounded"
    >
      Sale
    </div>
    <div class="flex justify-center items-center mb-4">
      <img :src="image" :alt="title" class="h-40 w-auto object-contain" />
    </div>
    <h3 class="text-sm font-semibold text-gray-800 mb-2">
      {{ title }}
    </h3>
    <div class="flex items-center space-x-2">
      <span v-if="oldPrice" class="text-sm line-through text-gray-400">
        ${{ oldPrice }}
      </span>
      <span class="text-sm text-gray-500">From</span>
      <span class="text-sm font-bold text-red-500">${{ newPrice }}</span>
    </div>
    <button
      @click="openModal"
      class="w-full mt-4 py-2 px-4 bg-gray-800 text-white text-sm font-semibold rounded hover:bg-gray-700"
    >
      See Details
    </button>
  </div>

  <div v-if="modalVisible" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="modal-content bg-white rounded-lg w-11/12 md:w-2/5 p-5">
      <div class="flex justify-between">
        <h3 class="text-sm font-semibold text-gray-800 mb-2">
          {{ title }}
        </h3>
        <div v-if="onSale" class="bg-red-100 text-red-500 text-xs font-semibold py-1 px-2 rounded">
          Sale
        </div>
      </div>
      <div class="grid grid-cols-3">
        <div class="col-span-1">
          <div class="flex justify-center items-center mb-4">
            <img :src="image" :alt="title" class="h-40 w-auto object-contain" />
          </div>
        </div>
        <div class="col-span-2 mt-8">
          <div class="flex items-center space-x-2 text-sm text-gray-500">
            <span>Mark:</span>
            <span>{{ mark }}</span>
          </div>
          <div class="flex items-center space-x-2 text-sm text-gray-500">
            <span>Category:</span>
            <span>{{ category }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="text-sm text-gray-500">Price:</span>
            <span v-if="oldPrice" class="text-sm line-through text-gray-400">
              ${{ oldPrice }}
            </span>
            <span class="text-sm text-gray-500">From</span>
            <span class="text-sm font-bold text-red-500">${{ newPrice }}</span>
          </div>
        </div>
      </div>
      <span class="text-sm font-semibold text-gray-800">Descrição detalhada do produto:</span>
      <p class="text-sm text-gray-500 indent-4 mt-2">{{ description }}</p>
      <div class="text-right mt-8">
        <button @click="modalVisible = false" class="mr-4 py-2 px-4 bg-gray-800 text-white text-sm font-semibold rounded hover:bg-gray-700">
          Adicionar ao carrinho
        </button>
        <button @click="modalVisible = false" class="py-2 px-4 bg-gray-800 text-white text-sm font-semibold rounded hover:bg-gray-700">
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
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    mark: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: false,
    },
    newPrice: {
      type: Number,
      required: true,
    },
    onSale: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: true,
    }
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
