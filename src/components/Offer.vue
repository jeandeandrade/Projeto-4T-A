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
        <br>
        <div class="timer">
            <div class="timer__offer">
                <div class="number__container__offer number__offer" id="hours-container">{{ hours.toString().padStart(2, '0') }}</div>
                <p>HOURS</p>
            </div>
            <div class="timer__offer">
                <div class="number__container__offer number__offer" id="minutes-container"> {{ minutes.toString().padStart(2, '0') }}</div>
                <p>MINUTES</p>
            </div>
            <div class="timer__offer">
                <div class="number__container__offer number__offer" id="seconds-container">{{ seconds.toString().padStart(2, '0') }}</div>
                <p>SECONDS</p>
            </div>
        </div>
        <br><br><br>
            <button class="offer__button flex items-center">
                <b>SHOP NOW </b>
                <span class="ml-2">
                    <img src="../assets/icons/icon-arrow-right.svg" alt="Arrow"
                        class="inline-block w-6 h-6">
                </span>
            </button>
            <br>
            <p class="text-[#e6e6e6] flex-initial">Ends 18/08. Restrictions apply. See details</p>
        <div class="offer__fone">
            <img class="mt-10" src="../assets/images/offer_fone.png" alt="">
        </div>
    </div>
</template>

<style>
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
    background-image: linear-gradient(to bottom right, #548CAD,  #97C4D8);
}

.desconto__offer{
    font-weight: 600;
}

.desconto__offer h1{
    font-size: 5em;
}

.desconto__offer h3{
    font-size: 1.2em;
    color: #e6e6e6;
}

.timer{
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

.timer__offer p{
    margin: 0;
}

.number__container__offer {
    height: fit-content;
    flex-direction: column;
    transition: transform 0.7s ease-in-out;
}

.number__offer {
    transition: transform 0.3s ease-in-out;
    font-size: 6em;
}

.offer__button{
    display: flex;
    align-items: center;
    background-color: white;
    color: black;
    padding: 7px 7px 7px 25px;
    border-radius: 30cap;
    transition: transform 1s;
}

.offer__button:hover{
    transform: scale(1.1);
}

.offer__button span{
    background-color: black;
    border-radius: 100%;
    padding: 10px;
    margin-left: 30px;
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
    .offer__fone {
        display: none;
    }
    .desconto__offer h1{
        font-size: 4em;
    }
    .timer__offer{
        margin-right: 10px;
    }
    .number__offer{
        font-size: 6em;
    }
}
</style>