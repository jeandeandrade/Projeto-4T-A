<script setup>
const numberHeight = 80;

document.addEventListener("DOMContentLoaded", () => {
    createNumberElements(document.getElementById('hours-container'), 23);
    createNumberElements(document.getElementById('minutes-container'), 59);
    createNumberElements(document.getElementById('seconds-container'), 59);

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();  
})

function createNumberElements(container, maxNumber) {
    for (let i = 0; i <= maxNumber; i++) {
        const numberElement = document.createElement('div');
        numberElement.className = 'number__offer';
        numberElement.textContent = i.toString().padStart(2, '0');
        container.appendChild(numberElement);
    }
}

function updateCountdown() {
    const countDownDate = new Date("Sep 5, 2024 22:30:00").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    function updateElement(containerId, value) {
        const container = document.getElementById(containerId);
        const children = Array.from(container.children);
        const visibleIndex = value % children.length;

        children.forEach((child, index) => {
            if (index === visibleIndex) {
                child.classList.remove('fade-out');
                child.classList.add('visible');
            } else {
                child.classList.add('fade-out');
                child.classList.remove('visible');
            }
        });

        container.style.transform = `translateY(-${visibleIndex * numberHeight}px)`;
    }

    updateElement('hours-container', hours);
    updateElement('minutes-container', minutes);
    updateElement('seconds-container', seconds);

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector('.timer').innerHTML = "EXPIRED";
    }
}

</script>

<template>
    <div class="offer columns-2"> 
        <div class="desconto__offer">
            <h1>Save 20% or more on Headset</h1>
            <h3>Enjoy for a limited time</h3>
        </div>
        <br>
        <div class="timer__offer">
            <div class="number__container__offer" id="hours-container"></div>
            <p>HOURS</p>
        </div>
        <div class="timer__offer">
            <div class="number__container__offer" id="minutes-container"></div>
            <p>MINUTES</p>
        </div>
        <div class="timer__offer">
            <div class="number__container__offer" id="seconds-container"></div>
            <p>SECONDS</p>
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

.timer__offer {
    display: inline-block;
    text-align: center;
    overflow: hidden;
    margin-right: 40px;
}

.timer__offer p{
    margin: 0;
}

.number__container__offer {
    height: 140px;
    width: 160px;
    flex-direction: column;
    transition: transform 0.7s ease-in-out;
}

.number__offer {
    height: 80px;
    font-size: 8em;
    transition: opacity 0.2s ease-in-out;
}

.number__offer.fade-out {
    opacity: 0;
}

.number__offer.visible {
    opacity: 1;
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
    .number__container__offer{
        height: 110px;
        width: 120px;
    }
}
</style>