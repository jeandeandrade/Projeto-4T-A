<script setup>
import Hero from '../views/HeroView.vue';
import NavBar from '../views/NavBarView.vue'
import FooterHome from '../views/FooterHomeView.vue';
import Offer from '../components/Offer.vue';
import BoxSwipe from "../views/BoxSwipeView.vue";
import NewProducts from '@/components/NewProducts.vue';
import ProductEmphasis from '../views/ProductEmphasisView.vue';
import GiftSelection from './GiftSelectionView.vue';
</script>

<template>
  <main>
    <NavBar />
    <Hero />
    <GiftSelection/>
    <NewProducts/>
    <Offer end-date="2024-12-31T23:59:59" />
    <ProductEmphasis />
    <BoxSwipe />
    <FooterHome />
  </main>
</template>
