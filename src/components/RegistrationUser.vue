<template>

  <div class="fundo flex items-center justify-center h-screen max-w-[100vw]">
    <main class="class__border__box registro bg-[#FFF]" v-if="!isVisible">
      <nav>
        <div class="flex mt-7 mb-8 border-b">
          <p
            class="relative ml-20 mr-20 pb-3 text-transparent bg-gradient-to-r from-[#03B1FF] to-[#97C4D8] bg-clip-text">
            <b>Dados Pessoais</b>
            <span class="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#03B1FF] to-[#97C4D8]"></span>
          </p>
          <p class="text-[#718EBF]">
            <b>Endereços</b>
          </p>
        </div>
      </nav>
      <div class="registro grid md:grid-cols-5 md:gap-4 ml-5 mr-5">
        <div class="col-span-1 imgPerfil relative">
          <!-- Imagem de perfil -->
          <img src="../assets/images/fotoPerfil.png" alt="Foto de perfil"
            class="mx-auto rounded-full w-32 h-32 object-cover cursor-pointer">

          <!-- Input de arquivo oculto -->
          <input type="file" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" @change="onFileChange" />

          <!-- Botão Upload -->
          <div class="text-center mt-2">
            <button type="button" @click="uploadImage"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Upload
            </button>
          </div>
        </div>

        <form class="col-span-4 grid md:grid-cols-2 gap-4">
          <div class="flex flex-col col-span-1 gap-2 max-w-[36rem] w-full mx-auto">
            <label>Nome completo</label>
            <div class="flex">
              <input type="text" v-model="newUser.nome" id="nomeCompleto" placeholder="Ex: Eduardo Evaristo"
                class="w-full campos" required></input>
              <svg class="h-11 w-11 icons" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>

            <label>Apelido</label>
            <div class="flex">
              <input type="text" v-model="newUser.apelido" id="apelido" placeholder="Ex: edueevaristo"
                class="w-full campos" required></input>
              <svg class="h-11 w-11 icons" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>

            <label>E-mail</label>
            <div class="flex">
              <input type="email" v-model="newUser.email" id="email" placeholder="Ex: eduardo@gmail.com"
                class="w-full campos" required></input>
              <svg class="h-11 w-11 icons" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <label>Data de Nascimento</label>
            <div class="flex">
              <input type="date" v-model="newUser.dataNascimento" id="data" class="w-full campos" required></input>
              <svg class="h-11 w-11 icons" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
          </div>
          <div class="flex flex-col col-span-1 gap-2 max-w-[36rem] w-full mx-auto">
            <label>CPF</label>
            <div class="flex">
              <input type="text" id="cpf" v-model="newUser.cpf" @blur="validateCpf" :class="[
                'w-full',
                'campos',
                { 'border-red-500': !isCpfValid && newUser.cpf !== '' }
              ]" placeholder="Digite o CPF" />
              <svg class="h-11 w-11 icons" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="3" y="4" width="18" height="16" rx="3" />
                <circle cx="9" cy="10" r="2" />
                <line x1="15" y1="8" x2="17" y2="8" />
                <line x1="15" y1="12" x2="17" y2="12" />
                <line x1="7" y1="16" x2="17" y2="16" />
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <label>Senha</label>
            <div class="flex">
              <input type="password" v-model="newUser.senha" id="senha" placeholder="Ex: **********"
                class="w-full campos" required></input>
              <svg class="h-11 w-11 icons" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="12" cy="12" r="2" />
                <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
              </svg>
            </div>
            <label>Celular</label>
            <div class="flex">
              <input type="text" v-model="newUser.telefone" v-mask="'(##) #####-####'" id="telefone"
                placeholder="Ex: (00) 0000-0000" class="w-full campos" required></input>
              <svg class="h-11 w-11 icons" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path
                  d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>
            </div>
          </div>
          <span v-if="!isCpfValid && newUser.cpf !== ''" class="text-red-500">
            CPF inválido. Por favor, verifique e tente novamente.
          </span>
          <div class="text-right col-span-2">
            <router-link to="/"><button class="button"><b>Voltar ao início</b></button></router-link>
            <button type="submit" class="button" @click="formAddress" :disabled="!isCpfValid"><b>Próximo
                Passo</b></button>
          </div>
        </form>
      </div>
    </main>

    <main class="cadastroenderecos class__border__box bg-[#FFF]" v-if="isVisible">
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
      <form @submit.prevent="adicionarenderecos">
        <div class="registro grid md:grid-cols-2 md:gap-10 ml-10 mr-10">
          <div class="flex flex-col col-span-1 gap-2 max-w-[36rem] w-full mx-auto">
            <label>Nome da rua</label>
            <div class="flex">
              <input type="text" name="rua" v-model="listaEnderecos.nomeRua" placeholder="Ex: Nove de Julho"
                class="w-full campos" required></input>
              <svg class="h-11 w-11 icons" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                <line x1="13" y1="7" x2="13" y2="7.01" />
                <line x1="17" y1="7" x2="17" y2="7.01" />
                <line x1="17" y1="11" x2="17" y2="11.01" />
                <line x1="17" y1="15" x2="17" y2="15.01" />
              </svg>
            </div>
            <label>Bairro</label>
            <div class="flex">
              <input type="text" name="bairro" v-model="listaEnderecos.bairro" placeholder="Ex: Altaneira"
                class="w-full campos" required></input>
              <svg class="h-11 w-11 icons" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                <line x1="13" y1="7" x2="13" y2="7.01" />
                <line x1="17" y1="7" x2="17" y2="7.01" />
                <line x1="17" y1="11" x2="17" y2="11.01" />
                <line x1="17" y1="15" x2="17" y2="15.01" />
              </svg>
            </div>
            <label>CEP</label>
            <div class="flex">
              <input type="text" name="cep" v-model="listaEnderecos.cep" placeholder="Ex: 00000-000"
                class="w-full campos" required>
              </input>

              <button type="button" @click="consultarCep"
                class="h-11 w-11 bg-blue-500 text-white rounded flex items-center justify-center">
                <svg class="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                  fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path
                    d="M11 4C6.02944 4 2 8.02944 2 12C2 15.9706 6.02944 20 11 20C13.1783 20 15.2736 19.1484 16.7424 17.9923L21.7071 22L22 21.7071L17.9923 16.7424C19.1484 15.2736 20 13.1783 20 11C20 8.02944 15.9706 4 11 4Z" />
                </svg>
              </button>
            </div>
          </div>
          <div class="flex flex-col col-span-1 gap-2 max-w-[36rem] w-full mx-auto">
            <label>Complemento</label>
            <div class="flex">
              <input type="text" name="complemento" v-model="listaEnderecos.complemento"
                placeholder="Ex: Atrás do Tauste" class="w-full campos"></input>
              <svg class="h-11 w-11 icons" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
            <label>Cidade</label>
            <div class="flex">
              <input type="text" name="cidade" v-model="listaEnderecos.cidade" placeholder="Ex: Ubatuba"
                class="w-full campos" required></input>
              <svg class="h-11 w-11 icons" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                <line x1="13" y1="7" x2="13" y2="7.01" />
                <line x1="17" y1="7" x2="17" y2="7.01" />
                <line x1="17" y1="11" x2="17" y2="11.01" />
                <line x1="17" y1="15" x2="17" y2="15.01" />
              </svg>
            </div>
            <label>Número da residência</label>
            <div class="flex">
              <input type="text" name="numeroResidencia" v-model="listaEnderecos.numeroResidencia" placeholder="Ex: 000"
                class="w-full campos" required></input>
              <svg class="h-11 w-11 icons" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
          </div>
        </div>
        <div class="text-right text-sm mr-14">
          <button v-if="!isVisibleAddress" @click="mostraenderecos" class="button">Ver endereços digitados</button>
          <button v-if="isVisibleAddress" @click="ocultaenderecos" class="button">Ocultar endereços digitados</button>
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
          <tbody v-for="dado in newUser.enderecos" :key="dado.nomeRua" class="text-center">
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
        <button class="button" @submit.prevent="createUser"><b>Salvar</b></button>
      </div>
    </main>
  </div>

</template>

<style scoped>
.fundo {

  background-image: url('../assets/images/wave.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}

.class__border__box {
  border-radius: 6px !important;
  box-shadow: 3px 5px 7px 4px #00000029 !important;
  padding: 50px 56px 10px 55px !important;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
}

.button {
  color: white;
  background-color: black;
  padding: 10px 0px;
  margin: 20px;
  width: 300px;
  border-radius: 10px;
}

.cadastroenderecos form .button {
  width: 200px;
}

.campos {
  border-radius: 5px 0px 0px 5px;
  color: black;
  background-color: #F1F3F6;
  padding: 10px;
  margin-bottom: 20px;
}

.icons {
  border-radius: 0px 5px 5px 0px;
  color: white;
  background-color: black;
  padding: 8px;
  margin-bottom: 20px;
}

.border-red-500 {
  border: 2px solid #f87171;
}

@media (max-width: 768px) {
  .button {
    width: 250px;
  }

  .imgPerfil {
    display: none;
  }
}
</style>

<script setup>
import { ref } from 'vue';
import PostUserDataService from '@/services/PostUserDataService';

const users = ref([]);
const isVisible = ref(false);
var newImage = ref();

const newUser = ref({
  nome: '',
  apelido: '',
  email: '',
  senha: '',
  cpf: '',
  dataNascimento: '',
  genero: '',
  telefone: '',
  enderecos: []
});

const createUser = async () => {
  try {

    const { response } = await PostUserDataService.create(newUser.value);
    console.log(response);
    users.value.push(response.data);

  } catch (error) {

    alert(error);
    return false;

  }

};

function formAddress() {

  const { nome, apelido, email, senha, cpf, dataNascimento, genero, telefone } = newUser.value;

  if (nome && apelido && email && senha && cpf && dataNascimento && genero && telefone) {
    isVisible.value = true;
  }

}

function formRegistration() {
  isVisible.value = false;
}

const listaEnderecos = ref({
  nomeRua: '',
  bairro: '',
  cep: '',
  complemento: '',
  cidade: '',
  numeroResidencia: ''
});

function adicionarenderecos() {

  newUser.value.enderecos.push({ ...listaEnderecos.value });
  listaEnderecos.value.nomeRua = '';

  listaEnderecos.value.bairro = '';
  listaEnderecos.value.cep = '';

  listaEnderecos.value.complemento = '';
  listaEnderecos.value.cidade = '';

  listaEnderecos.value.numeroResidencia = '';

}

const isVisibleAddress = ref(false);

function mostraenderecos() {

  isVisibleAddress.value = true;
}

function ocultaenderecos() {

  isVisibleAddress.value = false;
}

function onFileChange(event) {

  const target = event.target;

  if (target && target.files && target.files.length > 0) {

    newImage = target.files[0];
  }

  const formData = new FormData();
  formData.append('file', newImage);

}

async function uploadImage() {

  try {

    if (!newImage) return;
    const formData = new FormData();

    formData.append('file', newImage);
    console.log(formData);

    await api.post(`/profile/${productId}/UploadImage`, formData, {

      headers: { 'Content-Type': 'multipart/form-data' },
    });

  } catch (error) {

    alert('Falha ao salvar imagem do perfil');
  }
}

const isCpfValid = ref(true);

function validateCpf() {

  const cpf = newUser.value.cpf.replace(/\D/g, '');
  isCpfValid.value = checkCpf(cpf);
}

function checkCpf(cpf) {

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
  let sum, rest;

  sum = 0;
  for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);

  rest = (sum * 10) % 11;
  if (rest === 10 || rest === 11) rest = 0;

  if (rest !== parseInt(cpf.substring(9, 10))) return false;
  sum = 0;
  
  for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) rest = 0;
  return rest === parseInt(cpf.substring(10, 11));
}

async function consultarCep() {

  const cep = listaEnderecos.value.cep.replace(/\D/g, '');

  if (cep.length === 8) {

    try {

      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (!data.erro) {
        
        listaEnderecos.value.nomeRua = data.logradouro;
        listaEnderecos.value.bairro = data.bairro;
        listaEnderecos.value.cidade = data.localidade;
        listaEnderecos.value.uf = data.uf;

      } else {

        alert('CEP não encontrado');
      }

    } catch (error) {

      alert('Erro ao buscar o CEP');

    }

  } else {

    alert('CEP inválido');
  }

}
</script>