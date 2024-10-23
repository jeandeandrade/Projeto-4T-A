<script setup>
</script>

<template>
  <main>
    <nav >
      <div class="flex mt-7 mb-8 border-b">
        <p class="relative ml-20 mr-20 pb-3 text-transparent bg-gradient-to-r from-[#03B1FF] to-[#97C4D8] bg-clip-text">
          <b>Dados Pessoais</b>
          <span class="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#03B1FF] to-[#97C4D8]"></span>  
        </p>
        <p class="text-[#718EBF]">
          <b>Endereços</b>
        </p>
      </div>
    </nav>
    <div class="registro grid grid-cols-5 gap-4">
      <div class="col-span-1">
        <img src="../assets/images/fotoPerfil.png" alt="" class="mx-auto">
      </div>
      <div class="flex flex-col col-span-2 gap-2">
        <label>Nome completo</label>
        <div class="flex">
          <input type="text" id="nomeCompleto" placeholder="Ex: Eduardo Evaristo" class="max-w-[36rem] w-full campos"></input>
          <svg class="h-11 w-11 icons" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </div>
        
        <label>Apelido</label>
        <div class="flex">
          <input type="text" id="apelido" placeholder="Ex: edueevaristo" class="max-w-[36rem] w-full campos"></input>
          <svg class="h-11 w-11 icons" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </div>
        
        <label>E-mail</label>
        <div class="flex">
          <input type="email" id="email" placeholder="Ex: eduardo@gmail.com" class="max-w-[36rem] w-full campos"></input>
          <svg class="h-11 w-11 icons"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
        
        <label>Data de Nascimento</label>
        <div class="flex">
          <input type="date" id="data" class="max-w-[36rem] w-full campos"></input>
          <svg class="h-11 w-11 icons"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />  <line x1="16" y1="2" x2="16" y2="6" />  <line x1="8" y1="2" x2="8" y2="6" />  <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
      </div>
      <div class="flex flex-col col-span-2 gap-2">
        <label>CPF</label>
        <div class="flex">
          <input type="text" id="email" placeholder="Ex: 000.000.000-00" class="max-w-[36rem] w-full campos"></input>
          <svg class="h-11 w-11 icons"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="4" width="18" height="16" rx="3" />  <circle cx="9" cy="10" r="2" />  <line x1="15" y1="8" x2="17" y2="8" />  <line x1="15" y1="12" x2="17" y2="12" />  <line x1="7" y1="16" x2="17" y2="16" />
          </svg>
        </div>
        <label>Gênero</label>
        <div class="flex">
          <select id="genero" class="max-w-[36rem] w-full campos">
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Outro..</option>
          </select>
          <svg class="h-11 w-11 icons" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </div>
        <label>Senha</label>
        <div class="flex">
          <input type="password" id="senha" placeholder="Ex: **********" class="max-w-[36rem] w-full campos"></input>
          <svg class="h-11 w-11 icons"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="2" />  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
          </svg>
        </div>
        <label>Telefone</label>
        <div class="flex">
          <input type="text" id="telefone" placeholder="Ex: (00) 0000-0000" class="max-w-[36rem] w-full campos"></input>
          <svg class="h-11 w-11 icons"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </svg>
        </div>
        <div class="text-center">
          <router-link to="/"><button class="button"><b>Voltar ao início</b></button></router-link>
          <router-link to="/address"><button class="button"><b>Próximo Passo</b></button></router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
}
.button{
    color: white;
    background-color: black;
    padding: 10px 30px;
    margin: 20px;
    width: 300px;
    border-radius: 10px;
}
.campos{
    border-radius: 5px 0px 0px 5px;
    color: black;
    background-color: #F1F3F6;
    padding: 10px;
    margin-bottom: 20px;
}
.icons{
    border-radius: 0px 5px 5px 0px;
    color: white;
    background-color: black;
    padding: 8px;
    margin-bottom: 20px;
}
</style>
