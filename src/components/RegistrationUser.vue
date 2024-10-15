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
        <router-link to="">
          <p class="text-[#718EBF] hover:border-b-4 border-[#718EBF] pb-2">
            <b>Endereços</b>
          </p>
        </router-link>
      </div>
    </nav>
    <div class="registro grid grid-cols-5 gap-4">
      <div class="col-span-1">
        <img src="../assets/images/fotoPerfil.png" alt="" class="mx-auto">
      </div>
      <div class="flex flex-col col-span-2">
        <label>Nome completo</label>
        <input type="email" id="email" placeholder="Ex: Eduardo Evaristo" class="block max-w-[36rem]"></input>
        <label>Apelido</label>
        <input type="email" id="email" placeholder="Ex: edueevaristo" class="block max-w-[36rem]"></input>
        <label>E-mail</label>
        <input type="email" id="email" placeholder="Ex: eduardo@gmail.com" class="block max-w-[36rem]"></input>
        <label>Data de Nascimento</label>
        <input type="email" id="email" placeholder="Ex: 00/00/0000" class="block max-w-[36rem]"></input>
      </div>
      <div class="flex flex-col col-span-2">
        <label>CPF</label>
        <input type="email" id="email" placeholder="Ex: eduardo@gmail.com" class="block max-w-[36rem]"></input>
        <label>Gênero</label>
        <input type="email" id="email" placeholder="Ex: eduardo@gmail.com" class="block max-w-[36rem]"></input>
        <label>Senha</label>
        <input type="email" id="email" placeholder="Ex: eduardo@gmail.com" class="block max-w-[36rem]"></input>
        <label>Telefone</label>
        <input type="email" id="email" placeholder="Ex: eduardo@gmail.com" class="block max-w-[36rem]"></input>
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
#email{
    border-radius: 5px;
    color: black;
    background-color: #F1F3F6;
    padding: 10px;
}
</style>
