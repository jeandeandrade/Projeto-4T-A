import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import http from "@/http-common";

export const useAuth = defineStore('auth', () => {

  const token = ref(localStorage.getItem("token"));
  const user = ref(JSON.parse(localStorage.getItem("user")));

  function setToken(tokenValue) {
    localStorage.setItem('token', tokenValue);
    token.value = tokenValue;

    console.log(token.value);
  }

  function setUser(userValue) {
    localStorage.setItem('user', JSON.stringify(userValue));
    user.value = userValue;
  }

  const isAuthenticated = computed(() => {
    return token.value && user.value;
  })

  async function checkToken() {
    
    try {

      const tokenAuth = 'Bearer ' + token.value;

      const { data } = await http.get("/Users/verify-token", {

        headers: {
          Authorization: tokenAuth,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  function clear() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    token.value = '';
    user.value = '';
  }

  async function getUser(id = '') {

    return localStorage.getItem('user');
  }

  return {
    token,
    user,
    setToken,
    setUser,
    checkToken,
    getUser,
    isAuthenticated,
    clear
  }

})