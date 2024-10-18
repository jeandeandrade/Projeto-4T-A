<script setup>
</script>

<template>
  <main>
    <nav >
      <div class="flex mt-7 mb-8 border-b">
        <p class="text-[#718EBF] ml-20 mr-20">
          <b>Dados Pessoais</b>
        </p>
        <p class="relative pb-3 text-transparent bg-gradient-to-r from-[#03B1FF] to-[#97C4D8] bg-clip-text">
          <b>Endereços</b>
          <span class="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#03B1FF] to-[#97C4D8]"></span>  
        </p>
      </div>
    </nav>
    <div class="registro grid grid-cols-2 gap-10">
      <div class="flex flex-col col-span-1 gap-2 ml-32">
        <label>Nome da rua</label>
        <input type="text" id="nomeDaRua" placeholder="Ex: Eduardo Evaristo" class="max-w-[36rem] campos"></input>
        <label>Bairro</label>
        <input type="text" id="bairro" placeholder="Ex: edueevaristo" class="max-w-[36rem] campos"></input>
        <label>CEP</label>
        <input type="text" id="cep" placeholder="Ex: eduardo@gmail.com" class="max-w-[36rem] campos"></input>
      </div>
      <div class="flex flex-col col-span-1 gap-2 mr-32">
        <label>Complemento</label>
        <input type="text" id="complemento" placeholder="Ex: 000.000.000-00" class="max-w-[36rem] campos"></input>
        <label>Cidade</label>
        <input type="password" id="cidade" placeholder="Ex: **********" class="max-w-[36rem] campos"></input>
        <label>Número da residência</label>
        <input type="text" id="numeroResidencia" placeholder="Ex: (00) 0000-0000" class="max-w-[36rem] campos"></input>
        <div class="text-center text-xs">
            <button class="button">Ver endereços digitados</button>
            <button class="button">Adicionar mais endereços +</button>
        </div>
      </div>
    </div>
    <div class="text-center">
        <router-link to="/registration"><button class="button"><b>Voltar a etapa anterior</b></button></router-link>
        <router-link to="/"><button class="button"><b>Salvar</b></button></router-link>
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
