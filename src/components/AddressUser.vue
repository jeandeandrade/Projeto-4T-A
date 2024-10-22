<script setup>
import { ref } from 'vue';

const listaEndereco = ref({ rua: ''});
const dados = ref([]);

function adicionarEndereco() {
  dados.value.push({ ...listaEndereco.value });
  listaEndereco.value.rua = '';
  listaEndereco.value.bairro = '';
  listaEndereco.value.cep = '';
  listaEndereco.value.complemento = '';
  listaEndereco.value.cidade = '';
  listaEndereco.value.numeroResidencia = '';
  console.table(dados.value)
}

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
    <form @submit.prevent="adicionarEndereco" class="registro grid grid-cols-2 gap-10">
      <div class="flex flex-col col-span-1 gap-2 ml-32">
        <label>Nome da rua</label>
        <input type="text" name="rua" v-model="listaEndereco.rua" placeholder="Ex: Nove de Julho" class="max-w-[36rem] campos" required></input>
        <label>Bairro</label>
        <input type="text" name="bairro" v-model="listaEndereco.bairro" placeholder="Ex: Altaneira" class="max-w-[36rem] campos" required></input>
        <label>CEP</label>
        <input type="text" name="cep" v-model="listaEndereco.cep" placeholder="Ex: 00000-000" class="max-w-[36rem] campos" required></input>
      </div>
      <div class="flex flex-col col-span-1 gap-2 mr-32">
        <label>Complemento</label>
        <input type="text" name="complemento" v-model="listaEndereco.complemento" placeholder="Ex: Atrás do Tauste" class="max-w-[36rem] campos"></input>
        <label>Cidade</label>
        <input type="text" name="cidade" v-model="listaEndereco.cidade" placeholder="Ex: Ubatuba" class="max-w-[36rem] campos" required></input>
        <label>Número da residência</label>
        <input type="text" name="numeroResidencia" v-model="listaEndereco.numeroResidencia" placeholder="Ex: 000" class="max-w-[36rem] campos" required></input>
        <div class="text-center text-xs">
            <button class="button">Ver endereços digitados</button>
            <button class="submit button">Adicionar mais endereços +</button>
        </div>
      </div>
    </form>

    <!-- <h2>Endereços:</h2>
    <ul>
      <div class="grid grid-cols-2">
      <li v-for="dado in dados" :key="dado.rua">
          <div class="flex flex-col col-span-1 p-4">
            <p>{{ dado.rua }}</p>
            <p>{{ dado.bairro }}</p> 
            <p>{{ dado.cep }}</p> 
            <p>{{ dado.complemento }}</p> 
            <p>{{ dado.cidade }}</p> 
            <p>{{ dado.numeroResidencia }}</p>
          </div>
      </li>
      </div>
    </ul> -->

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
    margin-bottom: 20px;
}
</style>
