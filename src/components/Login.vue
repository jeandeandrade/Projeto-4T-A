<script setup></script>

<template>
  <div class="flex bg-black">
    <div
      class="bg-[#FFF] w-[480px] h-[945px] flex flex-col items-center border shadow-lg justify-start"
    >
      <h1
        class="text-black font-bold text-xl text-center w-[280px] h-[30px] mt-[248px] mb-[20px]"
      >
        Iniciar sessão na sua conta
      </h1>

      <div class="flex flex-col items-start w-[410px] mt-8">
        <label class="text-black font-semibold text-base leading-normal mb-2">
          E-mail
        </label>
        <div class="relative w-full">
          <input
            type="email"
            class="w-full h-[50px] rounded-lg bg-[#F1F3F6] p-2 pr-10 border"
            placeholder="eduardo@email.com"
          />
        </div>
      </div>
      <div class="flex flex-col items-start w-[410px] mt-8">
        <label class="text-black font-semibold text-base leading-normal mb-2">
          Senha
        </label>
        <div class="relative w-full">
          <input
            type="password"
            class="w-full h-[50px] rounded-lg bg-[#F1F3F6] p-2 pr-10 border"
            placeholder="Insira a sua senha"
          />
        </div>
      </div>
      <div class="flex justify-between items-center w-[410px] mt-4">
        <div class="flex items-center">
          <input
            id="lembrar"
            type="checkbox"
            class="w-4 h-4 border border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500"
          />
          <label
            for="lembrar"
            class="ml-2 text-[14px] leading-normal text-black text-sm font-semibold"
          >
            Lembrar minha senha
          </label>
        </div>
        <a href="#" class="leading-normal text-black text-sm font-semibold">
          Esqueceu a senha?
        </a>
      </div>
      <div>
        <button
          class="flex w-[410px] h-[50px] mb-[41px] bg-black text-white font-semibold items-center justify-center mt-[33px] rounded-lg shadow-custom-blue"
        >
          Login
        </button>
        <div class="flex items-center justify-center mb-[33px]">
          <hr class="w-[175px] h-[1px] bg-[#9D9D9D]" />
          <span class="mx-4 text-[#9D9D9D]">OU</span>
          <hr class="w-[175px] h-[1px] bg-[#9D9D9D]" />
        </div>
        <button
          class="flex w-[410px] h-[50px] mb-[41px] bg-black text-white font-semibold items-center justify-center mt-[33px] rounded-lg shadow-custom-blue"
        >
          Registre-se
        </button>
      </div>
    </div>
    <div class="relative">
      <img src="../assets/images/card.png" class="w-[1500px] h-[945px]" />
      <img
        src="../assets/images/logo.png"
        class="absolute w-[561px] top-[339px] left-[750px]"
      />
      <p
        class="absolute top-[455px] text-white left-[750px] font-inter font-bold text-[24px] leading-[44px] tracking-[-0.04em]"
      >
        Bem-vindo à Gabini Store! Os melhores headsets <br />
        com a mais alta qualidade, você encontra aqui.
      </p>
    </div>
  </div>
</template>
