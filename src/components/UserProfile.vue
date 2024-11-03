<template>
    <main class="registro">
        <nav>
            <div class="flex mt-7 mb-8 border-b">
                <p
                    class="relative ml-20 mr-20 pb-3 text-transparent bg-gradient-to-r from-[#03B1FF] to-[#97C4D8] bg-clip-text">
                    <b>Meu perfil</b>
                    <span
                        class="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#03B1FF] to-[#97C4D8]"></span>
                </p>
            </div>
        </nav>

        <!-- Container principal de perfil -->
        <div class="registro grid md:grid-cols-5 md:gap-4 ml-5 mr-5">
            <!-- Imagem de Perfil -->
            <div class="col-span-1 imgPerfil">
                <img src="../assets/images/fotoPerfil.png" alt="" class="mx-auto p-5">
            </div>

            <div class="col-span-4 flex flex-col space-y-3">
                <div class="flex items-center justify-between">
    <h3 class="nomecompleto__idade">
        {{ editData.nome }}, {{ calculateAge(editData.dataNascimento) }} anos
    </h3>
    <div class="flex space-x-2">
        <button @click="goToHomePage" class="button">Voltar à Página Inicial</button>
        <button @click="showEditModal = true" class="button">Editar Perfil</button>
    </div>
</div>



                <div class="separator"></div>

                <div class="dados__pessoais grid grid-cols-2 gap-4 p-3 border rounded-lg shadow-md bg-white">
                    <p class="dados__pessoais__bloco"><b>Apelido</b></p>
                    <p class="dados__pessoais__bloco">{{ editData.apelido }}</p>
                    <p class="dados__pessoais__bloco"><b>E-mail</b></p>
                    <p class="dados__pessoais__bloco">{{ editData.email }}</p>
                    <p class="dados__pessoais__bloco"><b>Nascimento</b></p>
                    <p class="dados__pessoais__bloco">{{ editData.dataNascimento }}</p>
                    <p class="dados__pessoais__bloco"><b>CPF</b></p>
                    <p class="dados__pessoais__bloco">{{ editData.cpf }}</p>
                    <p class="dados__pessoais__bloco"><b>Senha</b></p>
                    <p class="dados__pessoais__bloco">**********</p>
                    <p class="dados__pessoais__bloco"><b>Gênero</b></p>
                    <p class="dados__pessoais__bloco">{{ editData.genero }}</p>
                    <p class="dados__pessoais__bloco"><b>Telefone</b></p>
                    <p class="dados__pessoais__bloco">{{ editData.telefone }}</p>
                </div>

                <!-- Botão Ver todos endereços -->
                <button @click="showModal = true" class="button w-auto mt-4">Ver todos endereços</button>
            </div>
        </div>

        <!-- Endereço Principal -->
        <div v-if="addresses.length > 0"
            class="enderecos col-span-5 mt-4 p-4 border rounded-lg shadow-md bg-white h-full"
            style="width: 98%; margin: 0 auto; margin-top: 10px;">
            <h3 class="text-lg font-semibold">
                Endereço principal
                <span class="badge">Principal</span>
            </h3>
            <p><strong>Rua:</strong> {{ addresses[0].nomeRua }}</p>
            <p><strong>Bairro:</strong> {{ addresses[0].bairro }}</p>
            <p><strong>Complemento:</strong> {{ addresses[0].complemento }}</p>
            <p><strong>Cidade:</strong> {{ addresses[0].cidade }}</p>
            <p><strong>CEP:</strong> {{ addresses[0].cep }}</p>
            <p><strong>Número da Residência:</strong> {{ addresses[0].numeroResidencia }}</p>
        </div>


        <!-- Outros Endereços -->
        <div v-if="addresses.length > 1"
            class="enderecos col-span-5 mt-4 p-4 grid grid-cols-3 gap-4 border rounded-lg shadow-md bg-white h-full"
            style="width: 98%; margin: 0 auto; margin-top: 10px;">
            <div v-for="(address, index) in addresses.slice(1)" :key="index">
                <h3 class="text-lg font-semibold">Endereço Secundário {{ index + 1 }}</h3>
                <p><strong>Rua:</strong> {{ address.nomeRua }}</p>
                <p><strong>Bairro:</strong> {{ address.bairro }}</p>
                <p><strong>Complemento:</strong> {{ address.complemento }}</p>
                <p><strong>Cidade:</strong> {{ address.cidade }}</p>
                <p><strong>CEP:</strong> {{ address.cep }}</p>
                <p><strong>Número da Residência:</strong> {{ address.numeroResidencia }}</p>
            </div>
        </div>

        <!-- Modal para ver todos os endereços -->
        <transition name="modal-fade-slide">
            <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div class="modal-content bg-white rounded-lg w-11/12 md:w-1/2 p-5">
                    <h3 class="text-xl font-bold mb-4">Todos os Endereços</h3>
                    <div v-if="editingAddress">
                        <h4 class="text-lg font-semibold">Editar Endereço</h4>
                        <form @submit.prevent="saveAddressChanges">
                            <div class="space-y-4">
                                <div>
                                    <label class="block">Rua</label>
                                    <input type="text" v-model="editingAddressData.nomeRua" class="input" />
                                </div>
                                <div>
                                    <label class="block">Bairro</label>
                                    <input type="text" v-model="editingAddressData.bairro" class="input" />
                                </div>
                                <div>
                                    <label class="block">Complemento</label>
                                    <input type="text" v-model="editingAddressData.complemento" class="input" />
                                </div>
                                <div>
                                    <label class="block">Cidade</label>
                                    <input type="text" v-model="editingAddressData.cidade" class="input" />
                                </div>
                                <div>
                                    <label class="block">CEP</label>
                                    <input type="text" v-model="editingAddressData.cep" class="input" />
                                </div>
                                <div>
                                    <label class="block">Número da residência</label>
                                    <input type="text" v-model="editingAddressData.numeroResidencia" class="input" />
                                </div>
                            </div>
                            <button type="button" @click="cancelEdit"
                                class="button mt-4 w-full bg-gray-500">Cancelar</button>
                            <button type="submit" class="button mt-2 w-full bg-blue-500">Salvar Alterações</button>
                        </form>
                    </div>
                    <div v-else>
                        <div class="space-y-4">
                            <!-- Endereços dentro do modal -->
                            <div v-for="(address, index) in addresses" :key="index"
                                class="p-4 border rounded-lg shadow-sm">
                                <p><strong>Rua:</strong> {{ address.nomeRua }}</p>
                                <p><strong>Bairro:</strong> {{ address.bairro }}</p>
                                <p><strong>Complemento:</strong> {{ address.complemento }}</p>
                                <p><strong>Cidade:</strong> {{ address.cidade }}</p>
                                <p><strong>CEP:</strong> {{ address.cep }}</p>
                                <button @click="editAddress(index)" class="button mt-2">Editar</button>
                            </div>
                        </div>
                    </div>
                    <button @click="showModal = false" class="button mt-4 w-full bg-red-500">Fechar</button>
                </div>
            </div>
        </transition>

        <!-- Modal para editar perfil -->
        <transition name="modal-fade-slide">
            <div v-if="showEditModal"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div class="modal-content bg-white rounded-lg w-11/12 md:w-1/2 p-5">
                    <h3 class="text-xl font-bold mb-4">Editar Perfil</h3>
                    <form @submit.prevent="saveChanges">
                        <div class="space-y-4">
                            <div>
                                <label class="block">Nome Completo</label>
                                <input type="text" v-model="editData.nome" class="input" />
                            </div>
                            <div>
                                <label class="block">E-mail</label>
                                <input type="email" v-model="editData.email" class="input" />
                            </div>
                            <div>
                                <label class="block">Apelido</label>
                                <input type="email" v-model="editData.apelido" class="input" />
                            </div>
                            <div>
                                <label class="block">Genero</label>
                                <input type="email" v-model="editData.genero" class="input" />
                            </div>
                            <div>
                                <label class="block">CPF</label>
                                <input type="email" v-model="editData.cpf" class="input" />
                            </div>
                            <div>
                                <label class="block">Telefone</label>
                                <input type="text" v-model="editData.telefone" class="input" />
                            </div>
                        </div>
                        <button type="button" @click="showEditModal = false"
                            class="button mt-4 w-full bg-gray-500">Fechar</button>
                        <button type="submit" class="button mt-2 w-full bg-blue-500">Salvar Alterações</button>
                    </form>
                </div>
            </div>
        </transition>
    </main>
</template>

<script>
import PostUserDataService from '@/services/PostUserDataService';

export default {
    data() {
        return {
            editData: {
                nome: '',
                apelido: '',
                email: '',
                dataNascimento: '',
                cpf: '',
                genero: '',
                telefone: ''
            },
            addresses: [],
            showModal: false,
            showEditModal: false,
            editingAddress: false,
            editingAddressData: {
                nomeRua: '',
                bairro: '',
                complemento: '',
                cidade: '',
                numeroResidencia: '',
                cep: ''
            }
        };
    },
    methods: {
        async loadUserData() {

            try {

                const response = await PostUserDataService.getUser();
                this.editData = response.data;
                this.addresses = response.data.addresses;

            } catch (error) {
                console.error("Erro ao carregar dados do usuário:", error);
            }

        },
        calculateAge(birthDate) {

            const birthDateObj = new Date(birthDate);
            const today = new Date();

            let age = today.getFullYear() - birthDateObj.getFullYear();
            const monthDifference = today.getMonth() - birthDateObj.getMonth();


            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
                age--;
            }

            return age;
        },
        async saveChanges() {

            try {

                await PostUserDataService.update(this.editData);
                this.showEditModal = false;
                await this.loadUserData();

            } catch (error) {

                console.error("Erro ao atualizar dados do usuário:", error);
            }

        },
        async saveAddressChanges() {

            try {

                const addressData = { ...this.editingAddressData, userId: this.editData.id };
                await PostUserDataService.update(addressData);

                this.editingAddress = false;
                await this.loadUserData();

            } catch (error) {

                console.error("Erro ao atualizar endereço:", error);
            }

        },
        editAddress(index) {
            this.editingAddress = true;
            this.editingAddressData = { ...this.addresses[index] };
        },

        cancelEdit() {
            this.editingAddress = false;
        },
        goToHomePage() {
            this.$router.push('/');
        }
    },
    mounted() {
        this.loadUserData();
    }
};
</script>


<style scoped>
.button {
    color: white;
    background-color: black;
    padding: 10px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 600;
    font-family: 'Segoe UI', sans-serif;
}

.input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 14px;
    font-family: 'Segoe UI', sans-serif;
}

.nomecompleto__idade {
    color: #000;
    font-family: 'Segoe UI', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.separator {
    width: 100%;
    height: 1px;
    flex-shrink: 0;
    border-radius: 50px;
    background: #D2D8E3;
}

.badge {
    font-family: 'Segoe UI  ', sans-serif;
    font-size: 14px;
    background-color: #03B1FF;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    margin-left: 5px;
}


.modal-fade-slide-enter-active,
.modal-fade-slide-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.modal-fade-slide-enter-from,
.modal-fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

button {
    border-radius: 6px; box-shadow: 0px 3px 6px #00000029;padding: 10px 20px 10px 20px;
}

button:hover {
    cursor: pointer;
    background-color: rgb(10, 58, 131);
    transition: all 0.3s ease-in-out;
}

</style>
