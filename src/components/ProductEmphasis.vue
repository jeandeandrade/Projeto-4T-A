<script setup>
import { ref } from 'vue';

import attribute1 from '../assets/images/attribute_1.svg';
import attribute2 from '../assets/images/attribute_2.svg';
import product1 from '../assets/images/product_1.png';
import product2 from '../assets/images/product_2.png';

const selectedOption = ref(null);

const selectedProductImage = ref(product1);

const selectOption = (option) => {
    selectedOption.value = option.id;

    if (option.id === 'option1') {
        selectedProductImage.value = product2;
    } else if (option.id === 'option2') {
        selectedProductImage.value = product1;
    }
};

const options = [
    { id: 'option1', src: attribute1, alt: 'Attribute 1 with product variation' },
    { id: 'option2', src: attribute2, alt: 'Attribute 2 with product variation' },
];
</script>

<template>
    <main class="main__content h-auto ml-[16px] lg:ml-[119px] shrink-0 bg-[#F3F5F9] rounded-[30px]">
        <section class="content__products flex flex-col items-center gap-[40px] lg:gap-[80px] p-4 lg:p-0">
            <div class="title__content flex flex-col items-center gap-[8px] lg:gap-[16px]">

                <div class="product__emphasis__info">


                    <div class="card__product__emphasis__picture__offers">
                        <img :src="selectedProductImage" alt="Selected Product Image" class="">
                    </div>

                    <div class="card__product__emphasis__details">
                        <h1 class="title__product__emphasis">
                            JBL Children's Bluetooth Headphones
                        </h1>

                        <div class="product__emphasis__review">
                            <div class="product__emphasis__review__stars">
                                <img src="../assets/images/stars_product_emphasis.svg" alt="Stars with product emphasis"
                                    class="img-fluid">
                            </div>
                            <h6 class="product__emphasis__review__comment">
                                18,921 (reviews)
                            </h6>
                        </div>

                        <div class="product__emphasis__attributes__variation">
                            <h6 class="product__emphasis__attribute__name">
                                Color Options
                            </h6>

                            <div class="product__emphasis__attributes__selection">
                                <!-- Exibindo as opções de variação -->
                                <div v-for="option in options" :key="option.id" class="relative cursor-pointer"
                                    @click="selectOption(option)">
                                    <img :src="option.src" :alt="option.alt" class="cursor-pointer" />
                                    <div v-if="selectedOption === option.id"
                                        class="absolute top-0 left-0 w-full h-full bg-opacity-50 flex justify-center items-center">
                                        <img src="../assets/images/icon_check.svg" alt="Selected" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="product__emphasis__price">
                            <p class="currency">$</p>
                            <h2 class="main__price">28</h2>

                            <div class="product__emphasis__price__offer">
                                <p class="product__emphasis__price__offer__main">
                                    $35.99
                                </p>

                                <div class="product__emphasis__discount__price__percentual">
                                    <p class="product__emphasis__discount__price">
                                        22% off
                                    </p>
                                </div>

                                <div class="button__product__emphasis">
                                    <div class="hero__button mt-5">
                                        <button class="hero__button__style flex items-center">
                                            SEE MORE DETAILS
                                            <span class="hero__button__icon ml-2">
                                                <img src="../assets/icons/icon-arrow-right.svg" alt="Arrow"
                                                    class="inline-block w-6 h-6" />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    </main>
</template>

<style scoped>
/* Seus estilos existentes */

.main__content {
    padding: 50px;
    padding-top: 80px;
    margin-bottom: 4%;
    width: 97%;
    margin-left: 31px;
}

.card__product__emphasis__picture {
    display: flex;
    width: 448px;
    margin-right: 312px;
    height: 579px;
    align-items: center;
    border-radius: 30px;
    background-blend-mode: overlay, normal;
    background-image: url('../assets/images/product_emphasis_card.svg');
}

.product__emphasis__info {
    display: inline-flex;
    align-items: center;
    gap: 80px;
}

.card__product__emphasis__details {
    display: flex;
    width: 450px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
}

.title__product__emphasis {
    width: 450px;
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 56px;
    letter-spacing: -0.96px;
}

.product__emphasis__review {
    display: flex;
    align-items: center;
    gap: 24px;
}

.product__emphasis__review__stars {
    display: flex;
    align-items: flex-start;
}

.product__emphasis__review__comment {
    color: var(--Info-100, #17F);
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    /* 150% */
    letter-spacing: -0.16px;
}

.product__emphasis__attributes__variation {
    display: flex;
    align-items: center;
    gap: 24px;
}

.product__emphasis__attribute__name {
    color: var(--Base-100, #1F2026);
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: -0.2px;
}

.product__emphasis__attributes__selection {
    display: flex;
    align-items: flex-start;
    gap: 30px;
}

.product__emphasis__price {
    display: flex;
    align-items: flex-start;
    gap: 10px;
}

.currency {
    color: #000;
    font-family: "Gilroy-SemiBold", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    /* 100% */
}

.main__price {
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 90px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px;
}

.product__emphasis__price__offer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 7px;
}

.product__emphasis__price__offer__main {
    color: #000;
    font-family: "Gilroy-SemiBold", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-decoration: line-through;
}

.product__emphasis__discount__price__percentual {
    display: flex;
    padding: 6px 14px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 40px;
    border: 1px solid var(--qqsqs, #CD43FF);
}

.product__emphasis__discount__price {
    color: #000;
    font-family: "Gilroy-SemiBold", sans-serif;
    font-size: 19.5px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    width: 70px;
    height: 19.2px;
}

.button__product__emphasis {
    display: flex;
    padding: 8px 8px 8px 24px;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.hero__button__style {
    display: inline-flex;
    padding: 8px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 40px;
    border: 1px solid var(--White-white-700, #b5b5b5);
    background: var(--White-white-50, #fff);
    color: var(--Black-black-500, #000);
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.14px;
    text-transform: uppercase;
}

.hero__button__style:hover {
    border: 1px solid #000;
    background: #fff;
    transition: ease-out 1s;
}

.hero__button__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--Black-black-500, #000);
    padding: 8px;
    border-radius: 30px;
}

.hero__button {
    margin-left: -170px;
}

.card__product__emphasis__picture__offers {
    display: flex;
    padding-right: 153px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 113px;
}

.card__product__emphasis__picture img {
    width: 480px;
    height: 436px;
    margin-left: 175px;
}

@media only screen and (max-width: 480px) {

    .main__content {
        width: 85%;
        padding: 0;
        margin-bottom: 30px;
    }

    .card__product__emphasis__picture__offers {
        display: none;
    }

    .card__product__emphasis__details {
        width: 190px;
    }

    .product__emphasis__price__offer {
        width: 190px;
    }

    .product__emphasis__price {
        display: flex;
        flex-direction: column;
        margin-left: 10%;
    }

    .product__emphasis__review {
        display: flex;
        flex-direction: column;
    }

    .title__product__emphasis {
        font-size: 27.6px;
        margin-left: -10.2%;
        width: 230px;
    }

    .product__emphasis__attributes__variation {
        display: grid;
        margin-left: 8%;
    }

    .product__emphasis__price {
        display: flex;
        flex-direction: column;
        margin-left: 15%;
    }

    .button__product__emphasis {
        width: 400px;
        margin-left: -75%;
    }

    .hero__button {
        margin-left: 0%;
    }

}

@media only screen and (min-width: 768px) and (max-width: 1024px) {

    .main__content {
        width: 85%;
        padding: 0;
        margin-bottom: 30px;
    }

    .card__product__emphasis__picture__offers {
        display: none;
    }

    .card__product__emphasis__details {
        width: 190px;
    }

    .product__emphasis__price__offer {
        width: 190px;
    }

    .product__emphasis__price {
        display: flex;
        flex-direction: column;
        margin-left: 10%;
    }

    .product__emphasis__review {
        display: flex;
        flex-direction: column;
    }

    .title__product__emphasis {
        margin-top: 20px;
        margin-left: -25%;
    }

    .product__emphasis__attributes__variation {
        display: grid;
        margin-left: 8%;
    }

    .product__emphasis__price {
        display: flex;
        flex-direction: column;
        margin-left: 10%;
    }

    .button__product__emphasis {
        width: 400px;
        margin-left: -80%;
    }

    .hero__button {
        margin-left: 0%;
    }
}

@media only screen and (min-width: 1024px) and (max-width: 1366px) {

    .main__content {
        width: 85%;
        padding: 0;
        margin-bottom: 30px;
    }

    .card__product__emphasis__picture__offers {
        display: none;
    }

    .card__product__emphasis__details {
        width: 190px;
    }

    .product__emphasis__price__offer {
        width: 190px;
    }

    .product__emphasis__price {
        display: flex;
        flex-direction: column;
        margin-left: 10%;
    }

    .product__emphasis__review {
        display: flex;
        flex-direction: column;
    }

    .title__product__emphasis {
        margin-top: 20px;
        margin-left: -25%;
    }

    .product__emphasis__attributes__variation {
        display: grid;
        margin-left: 8%;
    }

    .product__emphasis__price {
        display: flex;
        flex-direction: column;
        margin-left: 10%;
    }

    .button__product__emphasis {
        width: 400px;
        margin-left: -80%;
    }

    .hero__button {
        margin-left: 0%;
    }
}

@media only screen and (min-width: 540px) and (max-width: 720px) {

    .main__content {
        width: 85%;
        padding: 0;
        margin-bottom: 30px;
    }

    .card__product__emphasis__picture__offers {
        display: none;
    }

    .card__product__emphasis__details {
        width: 190px;
    }

    .product__emphasis__price__offer {
        width: 190px;
    }

    .product__emphasis__price {
        display: flex;
        flex-direction: column;
        margin-left: 10%;
    }

    .product__emphasis__review {
        display: flex;
        flex-direction: column;
    }

    .title__product__emphasis {
        margin-top: 20px;
        margin-left: -20%;
        width: 30px;
    }

    .product__emphasis__attributes__variation {
        display: grid;
        margin-left: 8%;
    }

    .product__emphasis__price {
        display: flex;
        flex-direction: column;
        margin-left: 10%;
    }

    .button__product__emphasis {
        width: 400px;
        margin-left: -80%;
    }

    .hero__button {
        margin-left: 0%;
    }
}

@media only screen and (min-width: 344px) and (max-width: 882px) {
    .button__product__emphasis {
        width: 320px;
        margin-left: -53%;
    }
}

@media only screen and (min-width: 1024px) and (max-width: 600px) {

    .main__content {
        width: 85%;
        padding: 0;
        margin-bottom: 30px;
    }

    .card__product__emphasis__picture__offers {
        display: none;
    }

    .card__product__emphasis__details {
        width: 190px;
    }

    .product__emphasis__price__offer {
        width: 190px;
    }

    .product__emphasis__price {
        display: flex;
        flex-direction: column;
        margin-left: 10%;
    }

    .product__emphasis__review {
        display: flex;
        flex-direction: column;
    }

    .title__product__emphasis {
        margin-top: 20px;
        margin-left: -20%;
        width: 30px;
    }

    .product__emphasis__attributes__variation {
        display: grid;
        margin-left: 8%;
    }

    .product__emphasis__price {
        display: flex;
        flex-direction: column;
        margin-left: 10%;
    }

    .button__product__emphasis {
        width: 400px;
        margin-left: -80%;
    }

    .hero__button {
        margin-left: 0%;
    }
}

@media only screen and (min-width: 1024px) {

    .main__content {
        width: 95%;
    }

    #battery {
        display: none;
    }

    #warranty {
        display: none;
    }
}
</style>
