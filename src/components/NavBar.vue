<script setup>
</script>

<template>
    <nav class="w-[auto] h-[95px] flex-shrink-0 flex items-center justify-between px-12 navbar__styles">
        
        <div class="flex items-center ml-12">
            <img src="../assets/images/logo.svg" alt="Logo" class="h-12 navbar__logo">
        </div>

        <ul class="items__nav">
            <li class="items"><a href="#" class="hover:text-blue-600">HOME</a></li>
            <li class="items"><a href="#" class="hover:text-blue-600">SALE</a></li>
            <li class="items"><a href="#" class="hover:text-blue-600">BUNDLE & SAVE</a></li>
            <li class="items"><a href="#" class="hover:text-blue-600">SHOP BY CATEGORY</a></li>
            <li class="items"><a href="#" class="hover:text-blue-600">SUPPORT</a></li>
        </ul>

        <div class="flex items-center space-x-4 mr-12">
            <a href="#" class="hover:text-blue-600 items__nav__sign">SIGN IN</a>
            <a href="#" class="text-white py-2 px-4 items__nav__signup">SIGN UP FOR FREE</a>
        </div>
    </nav>
</template>


<style scoped>

.navbar__styles {
    border: 1px solid rgba(217, 217, 227, 0.60);
    background: #FFF;
}

.navbar__logo {
    width: 135px;
    height: 26px;
    flex-shrink: 0;
    fill: #000;
}

.items__nav {
    display: inline-flex;
    padding: 0px 8px;
    justify-content: center;
    align-items: center;
    gap: 32px;
}

.items {
    display: flex;
    align-items: center;
    color: var(--Black-black-500, #000);
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.14px;
    text-transform: uppercase;
}

.items__nav__sign {
    color: var(--Black-black-500, #000);
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.14px;
    text-transform: uppercase;
}

.items__nav__signup {
    color: var(--Blue-blue-500, #6987CD);
    text-align: center;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.14px;
    text-transform: uppercase;
}
</style>