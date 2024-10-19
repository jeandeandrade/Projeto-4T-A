import { createRouter, createWebHistory } from "vue-router";
import NavBar from "../views/NavBarView.vue";
import HomePage from "../views/HomePageView.vue";
import RegistrationUser from "../views/RegistrationUserView.vue";
import AddressUser from "@/components/AddressUser.vue";
import BoxSwipe from "@/components/BoxSwipe.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/registration",
      name: "registration",
      component: RegistrationUser,
    },
    {
      path: "/address",
      name: "address",
      component: AddressUser,
    },
  ],
});

export default router;
