<script setup>

</script>
background: linear-gradient(90deg, #03B1FF 0%, #97C4D8 100%);


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
      <div class="flex flex-col col-span-2">
        <label>Nome completo</label>
        <input type="text" id="nomeCompleto" placeholder="Ex: Eduardo Evaristo" class="max-w-[36rem] campos"></input>
        <label>Apelido</label>
        <input type="text" id="apelido" placeholder="Ex: edueevaristo" class="max-w-[36rem] campos"></input>
        <label>E-mail</label>
        <input type="email" id="email" placeholder="Ex: eduardo@gmail.com" class="max-w-[36rem] campos"></input>
        <label>Data de Nascimento</label>
        <input type="date" id="data" class="max-w-[36rem] campos"></input>
      </div>
      <div class="flex flex-col col-span-2">
        <label>CPF</label>
        <input type="text" id="email" placeholder="Ex: 000.000.000-00" class="max-w-[36rem] campos"></input>
        <label>Gênero</label>
        <select id="genero" class="max-w-[36rem] campos">
          <option>Masculino</option>
          <option>Feminino</option>
          <option>Outro..</option>
        </select>
        <label>Senha</label>
        <input type="password" id="senha" placeholder="Ex: **********" class="max-w-[36rem] campos"></input>
        <label>Telefone</label>
        <input type="text" id="telefone" placeholder="Ex: (00) 0000-0000" class="max-w-[36rem] campos"></input>
      </div>
    </div>
    <div class="text-center">
      <router-link to="/"><button class="button"><b>Voltar ao início</b></button></router-link>
      <router-link to="/"><button class="button"><b>Próximo Passo</b></button></router-link>
    </div>
  </main>
</template>

<style scoped>
.button{
    color: white;
    background-color: black;
    padding: 10px 30px;
    margin: 20px;
    border-radius: 10px;
}
.campos{
    border-radius: 5px;
    color: black;
    background-color: #F1F3F6;
    padding: 10px;
}
</style>
