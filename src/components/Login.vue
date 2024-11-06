<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import http from '@/http-common';
import { useAuth } from '@/stores/auth.js';

const auth = useAuth();

const user = reactive({
  email: '',
  password: '',
});

const emailValido = ref(null);
const mensagem = ref("");
const corMensagem = ref("");
const isLoggingIn = ref(false);  // Novo estado para controlar o texto do botão
const router = useRouter();

async function login() {
  isLoggingIn.value = true;  // Ativa o estado de "Logando..."

  try {
    const { data } = await http.post('/Auth/signIn', user);

    if (data != "") {
      const usuario = await http.get('/User', { headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + data } });

      auth.setUser(usuario.data.apelido);
      auth.setToken(data);

      // Aguarda 2.5 segundos antes de redirecionar para a página inicial
      setTimeout(() => {
        isLoggingIn.value = false;  // Desativa o estado de "Logando..."
        router.push("/");
      }, 2500);
      return;
    }

    mensagem.value = '';
  } catch (error) {
    if (error.response) {
      console.error(error.response.data);
      mensagem.value = error.response.data.message || 'Dados incorretos. Por favor, tente novamente.';
    } else if (error.request) {
      console.error(error.request);
      mensagem.value = 'Erro de comunicação. Tente novamente.';
    } else {
      console.error('Error', error.message);
      mensagem.value = 'Ocorreu um erro. Tente novamente.';
    }
    corMensagem.value = 'red';
  } finally {
    isLoggingIn.value = false;  // Reseta o estado do botão
  }
}
</script>

<template>
  <div class="lg:flex lg:bg-black w-screen h-screen">
    <div
      class="bg-[#FFF] min:w-[480px] md:h-screen h-[950px] p-4 flex flex-col items-center border shadow-lg justify-center">
      <h1 class="text-black font-bold text-xl text-center w-[280px] h-[30px] mb-[20px]">
        Iniciar sessão na sua conta
      </h1>

      <form @submit.prevent="login">
        <div class="flex flex-col items-start w-[410px] mt-8">
          <label class="text-black font-semibold text-base leading-normal mb-2">
            E-mail
          </label>
          <div class="relative w-full">
            <div class="flex">
              <input v-model="user.email" type="email" class="w-full h-[50px] rounded-lg bg-[#F1F3F6] p-2 pr-10 border"
                placeholder="eduardo@email.com" />
              <img class="w-50px h-50px bg-black p-[14.5px] rounded-lg" src="../assets/icons/mail.svg" alt="" />
            </div>
            <p v-if="emailValido === false" style="color: red">
              Email inválido!
            </p>
            <p v-if="emailValido === true" style="color: green">
              Email válido!
            </p>
          </div>
        </div>
        <div class="flex flex-col items-start w-[410px] mt-8">
          <label class="text-black font-semibold text-base leading-normal mb-2">
            Senha
          </label>
          <div class="flex relative w-full">
            <input v-model="user.password" type="password"
              class="w-full h-[50px] rounded-lg bg-[#F1F3F6] p-2 pr-10 border" placeholder="Insira a sua senha" />
            <img class="w-50px h-50px bg-black p-[16px] rounded-lg" src="../assets/icons/cadeado.svg" alt="" />
          </div>
        </div>
        <div class="flex justify-between items-center w-[410px] mt-4">
          <div class="flex items-center">
            <input id="lembrar" type="checkbox"
              class="w-4 h-4 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500" />
            <label for="lembrar" class="ml-2 text-[14px] leading-normal text-black text-sm font-semibold">
              Lembrar minha senha
            </label>
          </div>
          <a href="#" class="leading-normal text-black text-sm font-semibold">
            Esqueceu a senha?
          </a>
        </div>
        <div>
          <button type="submit"
            class="flex w-[410px] h-[50px] mb-[41px] bg-black text-white font-semibold items-center justify-center mt-[33px] rounded-lg shadow-custom-blue">
            {{ isLoggingIn ? "Logando..." : "Login" }}
          </button>
          <div class="flex items-center justify-center mb-[33px]">
            <hr class="w-[175px] h-[1px] bg-[#9D9D9D]" />
            <span class="mx-4 text-[#9D9D9D]">OU</span>
            <hr class="w-[175px] h-[1px] bg-[#9D9D9D]" />
          </div>

          <a href="/registration"><button type="button"
              class="flex w-[410px] h-[50px] mb-[41px] bg-black text-white font-semibold items-center justify-center mt-[33px] rounded-lg shadow-custom-blue">
              Registre-se
            </button></a>

          <a href="/">
            <button type="button"
              class="flex w-[410px] h-[50px] mb-[41px] bg-black text-white font-semibold items-center justify-center mt-[33px] rounded-lg shadow-custom-blue">
              Voltar a página inicial
            </button></a>
        </div>
        <p v-if="mensagem" :style="{ color: corMensagem }" class="text-center mt-4">
          {{ mensagem }}
        </p>
      </form>
    </div>
    <img class="hidden md:block w-full object-cover md:h-full overflow-visible" src="../assets/images/login23.svg" />
  </div>
</template>

<style scoped>
button:hover {
  cursor: pointer;
  background-color: rgb(10, 58, 131);
  transition: all 0.3s ease-in-out;
}
</style>