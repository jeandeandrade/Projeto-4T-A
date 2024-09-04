import { createRouter, createWebHistory } from "vue-router";
import NavBar from "../views/NavBarView.vue";
import HomePage from "../views/HomePageView.vue";
import BoxSwipe from "@/components/BoxSwipe.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
  ],
});

export default router;
