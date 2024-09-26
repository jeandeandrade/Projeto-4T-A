<script setup></script>

<template>
    <main class="main__content h-auto ml-[16px] lg:ml-[119px] shrink-0 bg-[#F3F5F9] rounded-[30px]">
        <section class="content__products flex flex-col items-center gap-[40px] lg:gap-[80px] p-4 lg:p-0">
            <div class="title__content flex flex-col items-center gap-[8px] lg:gap-[16px]">

                <div class="product__emphasis__info">
                    <div class="card__product__emphasis__picture">
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

                                <!-- <label for="one">
                                    <input type="checkbox" id="one" /> -->
                                <img src="../assets/images/attribute_1.svg" alt="Attribute 1 with product's variation">
                                <!-- </label> -->
                                <!-- <label for="two">
                                    <input type="checkbox" id="two" /> -->
                                <img src="../assets/images/attribute_2.svg" alt="Attribute 2 with product's variation">
                                <!-- </label> -->
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
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
</template>

<style scoped>

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
    font-weight: 400;
    line-height: 24px;
    text-decoration: line-through;
}

.product__emphasis__discount__price__percentual {
    display: flex;
    padding: 6px 14px;
    justify-content: center;
    align-items: center;
    gap: 10px;
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


.border {
    border-image: radial-gradient(circle, rgba(205, 67, 255, 1) 0%, rgba(253, 101, 166, 1) 35%, rgba(252, 150, 81, 1) 65%, rgba(255, 189, 114, 1) 86%) !important;
    border-radius: 40px !important;
    border-width: 1px !important;
    border-style: solid !important;
}
</style>
