import { createRouter, createWebHistory } from "vue-router";
import NavBar from "../views/NavBarView.vue";
import HomePage from "../views/HomePageView.vue";
import RegistrationUser from "../views/RegistrationUserView.vue";
import AddressUser from "@/components/AddressUser.vue";
import BoxSwipe from "@/components/BoxSwipe.vue";
import Login from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/Login",
      name: "login",
      component: Login,
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
