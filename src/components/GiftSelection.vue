<template>
  <main class="main__content flex justify-center items-center p-4" style="margin-top: 60px; margin-bottom: 50px;">
    <section class="card__content inline-flex flex-row gap-8 shrink-0">
      <div v-for="(product) in products" :key="product.id"
        class="card__product flex h-fit flex-col items-start shrink-0" :id="product.id">
        <div class="card__details flex items-center gap-4">
          <img src="../assets/icons/black-cube.svg" alt="black cube">
          <div class="card__weight__details flex flex-col justify-center items-start">
            <p class="card__title__weight text-white text-base not-italic font-normal leading-6 m-0">{{
              product.itemWeightLabel }}</p>
            <p class="card__weight text-white text-center not-italic font-bold m-0">{{ product.weight }}</p>
          </div>
        </div>
        <h4>{{ product.cta }}</h4>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'CardProducts',
  data() {
    return {
      products: [
        {
          id: 'blackHeadset',
          itemWeightLabel: 'Item Weight',
          weight: '2.6 Pounds',
          description: 'This is a great product!',
          cta: 'Find the perfect gifts'
        },
        {
          id: 'pinkHeadset',
          itemWeightLabel: 'Item Weight',
          weight: '2.6 Pounds',
          description: 'This is a great product!',
          cta: 'Find the perfect gifts'
        }
      ]
    };
  }
};
</script>

<style scoped>
.card__product {
  width: 36.5rem;
  padding: 1.5rem;
  gap: 20.625rem;
  border-radius: 1.25rem;
  transition: all 0.5s ease-in-out;
}

.card__details {
  width: 14.125rem;
  padding: 0.875rem 1rem;
  border-radius: 3.5rem;
  background: rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(27px);
}

.card__weight__details {
  flex: 1 0 0;
}

.card__title__weight {
  font-family: Inter;
  letter-spacing: -0.01rem;
}

.card__weight {
  font-family: Inter;
  font-size: 1.125rem;
  letter-spacing: -0.01125rem;
}

h4 {
  color: #FFF;
  font-family: Inter;
  font-size: 3.75rem;
  font-weight: 600;
  line-height: 4.25rem;
  letter-spacing: -0.15rem;
  width: 24.3125rem;
}

#pinkHeadset:hover,
#blackHeadset:hover {
  background-size: 103%;
  transition: background-size 0.5s ease-in-out, background-color 0.5s ease-in-out;
  background-color: black;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

#blackHeadset {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(../assets/images/blackHeadset.png) lightgray 50% / cover no-repeat;
}

#pinkHeadset {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(../assets/images/pinkHeadset.png) lightgray 50% / cover no-repeat;
}

/* Responsividade */
@media (max-width: 1024px) {
  .main__content {
    flex-direction: column;
    padding: 1rem;
  }

  .card__content {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .card__product {
    width: 80%;
    max-width: 30rem;
  }

  h4 {
    font-size: 2.5rem;
    width: auto;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .main__content {
    flex-direction: column;
    padding: 1rem;
  }

  .card__content {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .card__product {
    width: 90%;
    max-width: 25rem;
  }

  h4 {
    font-size: 2rem;
    width: auto;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .card__product {
    width: 95%;
    max-width: 20rem;
  }

  .card__details {
    width: auto;
    padding: 0.5rem 0.75rem;
  }

  .card__weight {
    font-size: 1rem;
  }

  h4 {
    font-size: 1.5rem;
  }
}
</style>
