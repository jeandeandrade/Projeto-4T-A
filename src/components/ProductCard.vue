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
      class="w-full mt-4 py-2 px-4 bg-gray-800 text-white text-sm font-semibold rounded hover:bg-gray-700"
      @click="addToCart"
    >
      Quick Add
    </button>
  </div>
</template>

<script>
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
  },
};
</script>
