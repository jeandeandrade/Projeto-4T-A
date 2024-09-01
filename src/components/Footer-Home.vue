<script setup>
</script>


<template>
    <div id="footer" class="container flex flex-col flex-1">
        <div class="flex-1">
            <img src="../assets\images\white_logo.png" alt="imagem_logo" id="white-logo">
        </div>
        <div class="flex flex-row footer-items">
            <div class="flex flex-1 flex-col gap-2">
                <span class="footer-title"><strong>Menu</strong></span>
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Product</a>
                <a href="">Pricing</a>
            </div>
            <div class="flex flex-1 flex-col gap-2">
                <span class="footer-title"><strong>Resources</strong></span>
                <a href="">Forum</a>
                <a href="">Support</a>
                <a href="">Partners</a>
                <a href="">Events</a>
            </div>
            <div class="flex flex-1 flex-col gap-2">
                <span class="footer-title"><strong>My Account</strong></span>
                <a href="">My Orders</a>
                <a href="">FAQ</a>
                <a href="">Sales conditions</a>
                <a href="">Contact</a>
                <a href="">Legal mentions</a>
            </div>
            <div class="flex flex-1 flex-col gap-2">
                <span class="footer-title"><strong>Subscribe to the Newsletter</strong></span>
                <span style="width:70%">Sign up for exclusive offers, original stories, event and more.</span>
                <div id="email-footer-input" class="flex flex-row justify-between">
                    <input type="email" placeholder="Email Address" class="flex-1">
                    <button><img src="../assets/icons/icon-arrow-right.svg" alt="Arrow"
                            class="inline-block w-6 h-6"></button>
                </div>
            </div>
        </div>
        <div class="flex flex-1 justify-center">
            <img src="../assets/images/big_logo.png" alt="big_logo" width="100%">
        </div>
        <hr class="footer-line">

        <div class="flex flex-row flex-1 justify-between">
            <div class="flex-1">
                <span>© 2024 Gabini Headset Store. - All Rights Reserved</span>
            </div>
            <div class="flex flex-1 flex-row justify-center gap-10">
                <a href="" class="underline">PRODUCTS</a>
                <a href="" class="underline">PRIVACY POLICY</a>
                <a href="" class="underline">CUSTOMER SERVICE</a>
            </div>
            <div class="flex-1 flex flex-row gap-2 justify-end footer-icons">
                <span class="footer-icon">
                    <img src="../assets/icons/brand_icons/X_icon.svg" alt="x_logo" width="25px">
                </span>
                <span class="footer-icon">
                    <img src="../assets/icons/brand_icons/facebook_icon.svg" alt="facebook_logo" width="28">
                </span>
                <span class="white-background-logo">
                    <img src="../assets/icons/brand_icons/youtube_icon.svg" alt="youtube_logo" width="22">
                </span>
                <span class="footer-icon">
                    <img src="../assets/icons/brand_icons/linkedin_icon.svg" alt="linkedin_logo" width="28">
                </span>
                <span class="white-background-logo">
                    <img src="../assets/icons/brand_icons/instagram_icon.svg" alt="instagram_logo" width="21">
                </span>
                <span class="footer-icon">
                    <img src="../assets/icons/brand_icons/tiktok_icon.svg" alt="tiktok_logo" width="28">
                </span>
                <span class="footer-icon">
                    <img src="../assets/icons/brand_icons/pinterest_icon.svg" alt="pinterest_logo" width="28">
                </span>
                <span class="footer-icon">
                    <img src="../assets/icons/brand_icons/spotify_icon.svg" alt="spotify_logo" width="28">
                </span>
            </div>
        </div>


    </div>
</template>

<style scoped>
#footer {
    margin-left: 10px;
    margin-right: 10px;
    padding: 20px;
    gap: 15px;
    background-color: black;
    color: gray;
    border-radius: 1.5rem;
    width: auto;
    max-width: 100%;
    padding-right: 50px;
    padding-left: 50px;
}

#white-logo {
    margin: 20px;
}

.footer-items {
    margin-left: 40px;
    margin-right: 40px;
}

.footer-title {
    color: white;
    font-size: 1.4rem;
    margin-bottom: 8px;
}

#email-footer-input {
    background-color: rgb(77, 77, 77);
    margin-top: 25px;
    border-radius: 30px;
    padding: 10px;
    padding-left: 25px;
}

#email-footer-input>input {
    color: rgb(189, 189, 189);
    background: transparent;
}

#email-footer-input>input:focus-visible {
    outline: none;
}

#email-footer-input>input::placeholder {
    color: rgb(189, 189, 189);
}

#email-footer-input>button {
    background-color: white;
    padding: 8px;
    border-radius: 20px;
}

#email-footer-input>button>img {
    filter: invert(100%);
}

.footer-line {
    height: 1px;
    background-color: rgb(119, 119, 119);
    margin: 20px 30px;
}

.underline {
    font-weight: bold;
    text-decoration: underline;
}

.footer-icon {
    border-radius: 15%;
}

.footer-icon>img {
    filter: invert(100%);
}

.white-background-logo{
    background-color: white;
    border-radius: 15px;
    padding: 3px;
}
</style>