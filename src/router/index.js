import { createRouter, createWebHistory } from "vue-router";
import NavBar from "../views/NavBarView.vue";
import HomePage from "../views/HomePageView.vue";
import RegistrationUser from "../views/RegistrationUserView.vue";
import BoxSwipe from "@/components/BoxSwipe.vue";
import Login from "@/views/LoginView.vue";
import UserProfile from "@/views/UserProfileView.vue";
import ProductPage from "@/components/ProductPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/registration",
      name: "registration",
      component: RegistrationUser,
    },
    {
      path: "/profile",
      name: "profile",
      component: UserProfile,
    },
    {
      path: "/products",
      name: "products",
      component: ProductPage,
    },
  ],
});

export default router;
