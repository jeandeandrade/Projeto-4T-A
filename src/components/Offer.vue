<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const props = defineProps({
  endDate: {
    type: String,
    required: true
  }
});

const timeRemaining = ref({});
const interval = ref(null);

const updateTimer = () => {
  const now = new Date().getTime();
  const endTime = new Date(props.endDate).getTime();
  const distance = endTime - now;

  if (distance < 0) {
    clearInterval(interval.value);
    timeRemaining.value = { total: 0 };
  } else {
    timeRemaining.value = { total: distance };
  }
};

const hours = computed(() => Math.floor((timeRemaining.value.total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const minutes = computed(() => Math.floor((timeRemaining.value.total % (1000 * 60 * 60)) / (1000 * 60)));
const seconds = computed(() => Math.floor((timeRemaining.value.total % (1000 * 60)) / 1000));

onMounted(() => {
  updateTimer();
  interval.value = setInterval(updateTimer, 1000);
});

onBeforeUnmount(() => {
  clearInterval(interval.value);
});
</script>

<template>
  <div class="offer columns-2">
    <div class="desconto__offer">
      <h1>Save 20% or more on Headset</h1>
      <h3>Enjoy for a limited time</h3>
    </div>
    <div class="timer">
      <div class="timer__offer">
        <transition-group name="flip" tag="div" class="number__container__offer">
          <div class="number__offer" :key="hours">{{ hours.toString().padStart(2, '0') }}</div>
        </transition-group>
        <p>HOURS</p>
      </div>
      <div class="timer__offer">
        <transition-group name="flip" tag="div" class="number__container__offer">
          <div class="number__offer" :key="minutes">{{ minutes.toString().padStart(2, '0') }}</div>
        </transition-group>
        <p>MINUTES</p>
      </div>
      <div class="timer__offer">
        <transition-group name="flip" tag="div" class="number__container__offer">
          <div class="number__offer" :key="seconds">{{ seconds.toString().padStart(2, '0') }}</div>
        </transition-group>
        <p>SECONDS</p>
      </div>
    </div>
    <div class="offer__button">
      <button class="flex items-center">
        <b>SHOP NOW </b>
        <span>
          <img src="../assets/icons/icon-arrow-right.svg" alt="Arrow" class="inline-block w-6 h-6">
        </span>
      </button>
      <p class="text-[#e6e6e6]">Ends 18/08. Restrictions apply. See details</p>
    </div>
    <div class="offer__fone">
      <img src="../assets/images/offer_fone.png" alt="">
    </div>
  </div>
</template>

<style scoped>
.offer {
  font-family: 'Inter', sans-serif;
  line-height: normal;
  color: rgb(255, 255, 255);
  border-radius: 1.5rem;
  padding: 40px 90px;
  padding-bottom: 60px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 50px;
  margin-bottom: 50px;
  background-image: linear-gradient(to bottom right, #548CAD, #97C4D8);
}

.desconto__offer {
  font-weight: 600;
}

.desconto__offer h1 {
  font-size: 4.5em;
}

.desconto__offer h3 {
  font-size: 1.2em;
  color: #e6e6e6;
}

.timer {
  display: flex;
  flex-direction: row;
  gap: 15px;
}

.timer__offer {
  width: 120px;
  display: flex;
  text-align: center;
  overflow: hidden;
  flex-direction: column;
}

.number__container__offer {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.number__offer {
  font-weight: 450;
  font-size: 6em;
  position: absolute;
}

.flip-enter-active,
.flip-leave-active {
  transition: transform 0.6s ease, opacity 0.6s ease;
}

.flip-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.flip-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.flip-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.flip-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.offer__button {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  margin-top: 15px;
}

.offer__button button {
  align-items: center;
  background-color: white;
  color: black;
  padding: 7px 7px 7px 25px;
  border-radius: 30cap;
  transition: transform 1s;
}

.offer__button button:hover {
  transform: scale(1.1);
}

.offer__button span {
  background-color: black;
  border-radius: 100%;
  padding: 10px;
  margin-left: 30px;
}

.offer__fone {
  display: flex;
  text-align: center;
}

@media only screen and (min-width: 920px) and (max-width: 1024px) {
  .offer__fone {
    display: none;
  }

  .desconto__offer h1 {
    font-size: 4em;
  }

  .desconto__offer h3 {
    font-size: 1em;
  }

  .number__offer {
    font-size: 5em;
  }

  .offer__button {
    font-size: 1em;
  }
}

@media only screen and (min-width: 790px) and (max-width: 920px) {
  .offer__fone {
    display: none;
  }

  .desconto__offer h1 {
    font-size: 3em;
  }

  .desconto__offer h3 {
    font-size: 1em;
  }

  .number__container__offer {
    height: 80px;
  }

  .number__offer {
    font-size: 4em;
  }

  .offer__button {
    font-size: 1em;
  }
}

@media only screen and (min-width: 0px) and (max-width: 790px) {
  .offer {
    padding: 15px;
  }

  .columns-2 {
    columns: 1;
  }

  .offer__fone {
    display: none;
  }

  .desconto__offer h1 {
    font-size: 2.7em;
  }

  .desconto__offer h3 {
    font-size: 0.7em;
  }

  .number__container__offer {
    height: 80px;
  }

  .number__offer {
    font-size: 4em;
  }

  .offer__button {
    font-size: 0.7em;
  }
}
</style>