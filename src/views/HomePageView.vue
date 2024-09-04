<script setup>
import Hero from '../views/HeroView.vue';
import NavBar from '../views/NavBarView.vue'
import FooterHome from '../views/FooterHomeView.vue';
import Offer from '../components/Offer.vue';
import BoxSwipe from "../views/BoxSwipeView.vue";
</script>

<template>
  <main>
    <NavBar />
    <Hero />
    <Offer />
    <BoxSwipe />
    <FooterHome />
  </main>
</template>
