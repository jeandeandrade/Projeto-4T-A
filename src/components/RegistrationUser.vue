<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const users = ref([]);
const newUser = ref({
  nome: '',
  apelido: '',
  email: '',
  senha: '',
  cpf: '',
  dataNascimento: '',
  genero: '',
  telefone: '',
  endereco: []
});

const createUser = async () => {
  try {
    const response = await axios.post('https://672017f0e7a5792f053074c2.mockapi.io/apa/user', newUser.value);
    users.value.push(response.data); // Adiciona o novo usuário à lista
    resetForm(); // Reseta o formulário
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
  }
};

const resetForm = () => {
  newUser.value = {
    nome: '',
    apelido: '',
    email: '',
    senha: '',
    cpf: '',
    dataNascimento: '',
    genero: '',
    telefone: '',
    endereco: []
  };
};

const isVisible = ref(false);

function formAddress() {

  const {nome, apelido, email, senha, cpf, dataNascimento, genero, telefone} = newUser.value
  
  if (nome && apelido && email && senha && cpf && dataNascimento && genero && telefone) {
    isVisible.value = true;
  }
}
function formRegistration() {
  isVisible.value = false;
}

const listaEndereco = ref({
  nomeRua: '',
  bairro: '',
  cep: '',
  complemento: '',
  cidade: '',
  numeroResidencia: ''
});

function adicionarEndereco() {
  newUser.value.endereco.push({...listaEndereco.value});
  listaEndereco.value.nomeRua = '';
  listaEndereco.value.bairro = '';
  listaEndereco.value.cep = '';
  listaEndereco.value.complemento = '';
  listaEndereco.value.cidade = '';
  listaEndereco.value.numeroResidencia = '';
}

const isVisibleAddress = ref(false);

function mostraEndereco() {
  isVisibleAddress.value = true;
}
function ocultaEndereco() {
  isVisibleAddress.value = false;
}
</script>

<template>
  <main class="registro" v-if="!isVisible">
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
    <div class="registro grid md:grid-cols-5 md:gap-4 ml-5 mr-5">
      <div class="col-span-1 imgPerfil">
        <img src="../assets/images/fotoPerfil.png" alt="" class="mx-auto">
      </div>
      <form class="col-span-4 grid md:grid-cols-2 gap-4">
        <div class="flex flex-col col-span-1 gap-2 max-w-[36rem] w-full mx-auto">
          <label>Nome completo</label>
          <div class="flex">
            <input type="text" v-model="newUser.nome" id="nomeCompleto" placeholder="Ex: Eduardo Evaristo" class="w-full campos" required></input>
            <svg class="h-11 w-11 icons" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </div>
          
          <label>Apelido</label>
          <div class="flex">
            <input type="text" v-model="newUser.apelido" id="apelido" placeholder="Ex: edueevaristo" class="w-full campos" required></input>
            <svg class="h-11 w-11 icons" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
          </div>
          
          <label>E-mail</label>
          <div class="flex">
            <input type="email" v-model="newUser.email" id="email" placeholder="Ex: eduardo@gmail.com" class="w-full campos" required></input>
            <svg class="h-11 w-11 icons"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          
          <label>Data de Nascimento</label>
          <div class="flex">
            <input type="date" v-model="newUser.dataNascimento" id="data" class="w-full campos" required></input>
            <svg class="h-11 w-11 icons"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />  <line x1="16" y1="2" x2="16" y2="6" />  <line x1="8" y1="2" x2="8" y2="6" />  <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
        </div>
        <div class="flex flex-col col-span-1 gap-2 max-w-[36rem] w-full mx-auto">
          <label>CPF</label>
          <div class="flex">
            <input type="text" v-model="newUser.cpf" id="email" placeholder="Ex: 000.000.000-00" class="w-full campos" required></input>
            <svg class="h-11 w-11 icons"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="4" width="18" height="16" rx="3" />  <circle cx="9" cy="10" r="2" />  <line x1="15" y1="8" x2="17" y2="8" />  <line x1="15" y1="12" x2="17" y2="12" />  <line x1="7" y1="16" x2="17" y2="16" />
            </svg>
          </div>
          <label>Gênero</label>
          <div class="flex">
            <select v-model="newUser.genero" id="genero" class="w-full campos" required>
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
            <input type="password" v-model="newUser.senha" id="senha" placeholder="Ex: **********" class="w-full campos" required></input>
            <svg class="h-11 w-11 icons"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="2" />  <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />  <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
            </svg>
          </div>
          <label>Telefone</label>
          <div class="flex">
            <input type="text" v-model="newUser.telefone" id="telefone" placeholder="Ex: (00) 0000-0000" class="w-full campos" required></input>
            <svg class="h-11 w-11 icons"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
          </div>
        </div>
        <div class="text-right col-span-2">
          <router-link to="/"><button class="button"><b>Voltar ao início</b></button></router-link>
          <button type="submit" class="button" @click="formAddress"><b>Próximo Passo</b></button>
        </div>
      </form>
    </div>
  </main>
  <main class="cadastroEndereco" v-if="isVisible">
    <nav>
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
      <div class="text-right text-sm mr-14">
          <button v-if="!isVisibleAddress" @click="mostraEndereco" class="button">Ver endereços digitados</button>
          <button v-if="isVisibleAddress" @click="ocultaEndereco" class="button">Ocultar endereços digitados</button>
          <button class="submit button">Adicionar mais endereços +</button>
      </div>
    </form>

    <div v-if="isVisibleAddress">
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
        <tbody v-for="dado in newUser.endereco" :key="dado.nomeRua" class="text-center">
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
        <button class="button" @click="formRegistration"><b>Voltar a etapa anterior</b></button>
        <router-link to="/"><button class="button" @click="createUser"><b>Salvar</b></button></router-link>
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
    padding: 10px 0px;
    margin: 20px;
    width: 300px;
    border-radius: 10px;
}
.cadastroEndereco form .button{
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
@media (max-width: 768px) {
.button{
  width: 250px;
}
.imgPerfil {
  display: none;
}
}
</style>
