<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const listaEndereco = ref({
  rua: '',
  bairro: '',
  cep: '',
  complemento: '',
  cidade: '',
  numeroResidencia: ''
});
const user = route.state.user;
const endereco = ref([])


function adicionarEndereco() {
  endereco.value.push({ ...listaEndereco.value });
  user.endereco.push({ ...listaEndereco.value });
  listaEndereco.value.nomeRua = '';
  listaEndereco.value.bairro = '';
  listaEndereco.value.cep = '';
  listaEndereco.value.complemento = '';
  listaEndereco.value.cidade = '';
  listaEndereco.value.numeroResidencia = '';
  console.table(endereco.value)
}

const isVisible = ref(false);

function mostraEndereco() {
  isVisible.value = true;
}
function ocultaEndereco() {
  isVisible.value = false;
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
    <form @submit.prevent="adicionarEndereco" >
      <div class="registro grid md:grid-cols-2 md:gap-10 ml-10 mr-10">
        <div class="flex flex-col col-span-1 gap-2 max-w-[36rem] w-full mx-auto">
          <label>Nome da rua</label>
          <div class="flex">
            <input type="text" name="rua" v-model="listaEndereco.nomeRua" placeholder="Ex: Nove de Julho" class="w-full campos" required></input>
            <svg class="h-11 w-11 icons"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />  <line x1="13" y1="7" x2="13" y2="7.01" />  <line x1="17" y1="7" x2="17" y2="7.01" />  <line x1="17" y1="11" x2="17" y2="11.01" />  <line x1="17" y1="15" x2="17" y2="15.01" />
            </svg>
          </div>
          <label>Bairro</label>
          <div class="flex">
            <input type="text" name="bairro" v-model="listaEndereco.bairro" placeholder="Ex: Altaneira" class="w-full campos" required></input>
            <svg class="h-11 w-11 icons"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />  <line x1="13" y1="7" x2="13" y2="7.01" />  <line x1="17" y1="7" x2="17" y2="7.01" />  <line x1="17" y1="11" x2="17" y2="11.01" />  <line x1="17" y1="15" x2="17" y2="15.01" />
            </svg>
          </div>
          <label>CEP</label>
          <div class="flex">
            <input type="text" name="cep" v-model="listaEndereco.cep" placeholder="Ex: 00000-000" class="w-full campos" required></input>
            <svg class="h-11 w-11 icons"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="11" r="3" />  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
            </svg>
          </div>
        </div>
        <div class="flex flex-col col-span-1 gap-2 max-w-[36rem] w-full mx-auto">
          <label>Complemento</label>
          <div class="flex">
            <input type="text" name="complemento" v-model="listaEndereco.complemento" placeholder="Ex: Atrás do Tauste" class="w-full campos"></input>
            <svg class="h-11 w-11 icons"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
          <label>Cidade</label>
          <div class="flex">
            <input type="text" name="cidade" v-model="listaEndereco.cidade" placeholder="Ex: Ubatuba" class="w-full campos" required></input>
            <svg class="h-11 w-11 icons"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />  <line x1="13" y1="7" x2="13" y2="7.01" />  <line x1="17" y1="7" x2="17" y2="7.01" />  <line x1="17" y1="11" x2="17" y2="11.01" />  <line x1="17" y1="15" x2="17" y2="15.01" />
            </svg>
          </div>
          <label>Número da residência</label>
          <div class="flex">
            <input type="text" name="numeroResidencia" v-model="listaEndereco.numeroResidencia" placeholder="Ex: 000" class="w-full campos" required></input>
            <svg class="h-11 w-11 icons"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="text-right text-xs mr-14">
          <button v-if="!isVisible" @click="mostraEndereco" class="button">Ver endereços digitados</button>
          <button v-if="isVisible" @click="ocultaEndereco" class="button">Ocultar endereços digitados</button>
          <button class="submit button">Adicionar mais endereços +</button>
      </div>
    </form>

    <div v-if="isVisible">
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr class="bg-gray-200 text-gray-600">
            <th class="py-2 px-4 border-b">Nome da Rua</th>
            <th class="py-2 px-4 border-b">Bairro</th>
            <th class="py-2 px-4 border-b">CEP</th>
            <th class="py-2 px-4 border-b">Complemento</th>
            <th class="py-2 px-4 border-b">Cidade</th>
            <th class="py-2 px-4 border-b">Número da residência</th>
          </tr>
        </thead>
        <tbody v-for="dado in endereco" :key="dado.nomeRua" class="text-center">
          <tr class="hover:bg-gray-100">
            <td class="py-2 px-4 border-b">{{ dado.nomeRua }}</td>
            <td class="py-2 px-4 border-b">{{ dado.bairro }}</td>
            <td class="py-2 px-4 border-b">{{ dado.cep }}</td>
            <td class="py-2 px-4 border-b">{{ dado.complemento }}</td>
            <td class="py-2 px-4 border-b">{{ dado.cidade }}</td>
            <td class="py-2 px-4 border-b">{{ dado.numeroResidencia }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="text-right mt-14">
        <router-link to="/registration"><button class="button"><b>Voltar a etapa anterior</b></button></router-link>
        <router-link to="/"><button class="button"><b>Salvar</b></button></router-link>
    </div>
  </main>
</template>

<style scoped>
.button{
  color: white;
  background-color: black;
  padding: 10px 0px;
  margin: 20px;
  width: 300px;
  border-radius: 10px;
}
form .button{
  width: 200px;
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
@media (max-width: 790px) {
.button{
  width: 250px;
}
}
</style>
