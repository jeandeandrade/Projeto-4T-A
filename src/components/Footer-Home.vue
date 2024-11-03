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
            <div class="flex flex-1 flex-col gap-2 subscribe__and__email">
                <span class="footer-title"><strong>Subscribe to the Newsletter</strong></span>
                <span style="width:70%">Sign up for exclusive offers, original stories, event and more.</span>
                <div id="email-footer-input" class="flex flex-row justify-between">
                    <input type="email" placeholder="Email Address" class="flex-1">
                    <button class="img__arrow__button"><img src="../assets/icons/icon-arrow-right.svg" alt="Arrow"
                            class="inline-block w-6 h-6 img-arrow"></button>
                </div>
            </div>
        </div>
        <div class="flex flex-1 justify-center">
            <img src="../assets/images/big_logo.png" alt="big_logo" width="100%">
        </div>
        <hr class="footer-line">

        <div class="flex flex-row flex-1 justify-between footer__copyright__icons">
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
                    <img src="../assets/icons/brand_icons/X_icon.png" alt="x_logo">
                </span>
                <span class="footer-icon">
                    <img src="../assets/icons/brand_icons/facebook_icon.png" alt="facebook_logo">
                </span>
                <span class="footer-icon">
                    <img src="../assets/icons/brand_icons/youtube_icon.png" alt="youtube_logo">
                </span>
                <span class="footer-icon">
                    <img src="../assets/icons/brand_icons/linkedin_icon.png" alt="linkedin_logo">
                </span>
                <span class="footer-icon">
                    <img src="../assets/icons/brand_icons/instagram_icon.png" alt="instagram_logo">
                </span>
                <span class="footer-icon">
                    <img src="../assets/icons/brand_icons/tiktok_icon.png" alt="tiktok_logo">
                </span>
                <span class="footer-icon">
                    <img src="../assets/icons/brand_icons/pinterest_icon.png" alt="pinterest_logo">
                </span>
                <span class="footer-icon">
                    <img src="../assets/icons/brand_icons/spotify_icon.png" alt="spotify_logo">
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
    min-width: 40px;
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

.footer-icon img {
    width: 38px;
    border-radius: 50%;
    padding-left: 3px;
    margin: 0;
}

.footer__copyright__icons * {
    display: flex;
    align-items: center;
}

@media only screen and (max-width: 480px) {

    #footer {
        width: 95%;
    }

    .footer-items,
    .footer__copyright__icons {
        display: grid;
        padding: 5px;
    }

    .footer-items div {
        margin-bottom: 16px;
    }

    .subscribe__and__email {
        margin-right: 60px;
    }

    .img-arrow {
        display: none;
    }

    .footer-icons {
        margin-right: 30px;
        margin-top: 15px;
    }
}


@media only screen and (min-width: 540px) and (max-width: 720px) {
    #footer {
        width: 95%;
    }

    .footer-items,
    .footer__copyright__icons {
        display: grid;
        padding: 5px;
    }

    .footer-items div {
        margin-bottom: 16px;
    }

    .subscribe__and__email {
        margin-right: 60px;
    }

    .img-arrow {
        display: none;
    }

    .footer-icons {
        margin-right: 30px;
        margin-top: 15px;
    }
}
</style>