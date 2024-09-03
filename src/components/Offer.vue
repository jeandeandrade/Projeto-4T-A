<script setup>
const numberHeight = 80;

document.addEventListener("DOMContentLoaded", () => {
    createNumberElements(document.getElementById('days-container'), 99);
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

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
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

    updateElement('days-container', days);
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
            <h5>Enjoy for a limited time</h5>
        </div>
        <br>
        <div class="timer__offer">
            <div class="number__container__offer" id="days-container"></div>
        </div>
        <div class="timer__offer">
            <div class="number__container__offer" id="hours-container"></div>
        </div>
        <div class="timer__offer">
            <div class="number__container__offer" id="minutes-container"></div>
        </div>
        <div class="timer__offer">
            <div class="number__container__offer" id="seconds-container"></div>
        </div>
        <br>
        <div class="timer__offer" id="t">
            <p>DAYS</p>
        </div>
        <div class="timer__offer">
            <p>HOURS</p>
        </div>
        <div class="timer__offer">
            <p>MINUTES</p>
        </div>
        <div class="timer__offer">
            <p>SECONDS</p>
        </div>
        <img src="C:\Users\Aula\Desktop\Projeto-4T-A\src\assets\images\offer_fone.png" alt="">
    </div>
</template>

<style>
.offer {
    font-family: Arial, sans-serif;
    line-height: normal;
    color: rgb(255, 255, 255);
    border-radius: 1.5rem;
    padding: 50px 80px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 50px;
    margin-bottom: 50px;
    background-image: linear-gradient(to bottom right, #548CAD,  #97C4D8);
}

.desconto__offer h1{
    font-size: 5em;
}

.timer__offer {
    display: inline-block;
    text-align: center;
    width: 120px;
    overflow: hidden;
    margin: 0 15px;
}

.timer__offer p{
    margin: 0;
}

.number__container__offer {
    height: 120px;
    flex-direction: column;
    transition: transform 0.7s ease-in-out;
}

.number__offer {
    height: 80px;
    font-size: 7em;
    transition: opacity 0.2s ease-in-out;
}

.number__offer.fade-out {
    opacity: 0;
}

.number__offer.visible {
    opacity: 1;
}
</style>