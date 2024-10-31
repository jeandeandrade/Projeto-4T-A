<template>
    <main class="registro">
        <nav>
            <div class="flex mt-7 mb-8 border-b">
                <p class="relative ml-20 mr-20 pb-3 text-transparent bg-gradient-to-r from-[#03B1FF] to-[#97C4D8] bg-clip-text">
                    <b>Meu perfil</b>
                    <span class="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#03B1FF] to-[#97C4D8]"></span>
                </p>
            </div>
        </nav>
        
        <!-- Container principal de perfil -->
        <div class="registro grid md:grid-cols-5 md:gap-4 ml-5 mr-5">
            <!-- Imagem de Perfil -->
            <div class="col-span-1 imgPerfil">
                <img src="../assets/images/fotoPerfil.png" alt="" class="mx-auto">
            </div>

            <div class="col-span-4 flex flex-col space-y-4">
                <div class="flex items-center justify-between">
                    <h3 class="nomecompleto__idade">Ariane Silva, 19 anos</h3>
                    <button @click="showEditModal = true" class="button">Editar Perfil</button>
                </div>
                
                <div class="separator"></div>
                
                <div class="dados__pessoais grid grid-cols-2 gap-4 p-4 border rounded-lg shadow-md bg-white">
                    <p class="dados__pessoais__bloco">Apelido</p>
                    <p class="dados__pessoais__bloco">E-mail</p>
                    <p class="dados__pessoais__bloco">Nascimento</p>
                    <p class="dados__pessoais__bloco">Data de Nascimento</p>
                    <p class="dados__pessoais__bloco">CPF</p>
                    <p class="dados__pessoais__bloco">Senha</p>
                    <p class="dados__pessoais__bloco">Gênero</p>
                    <p class="dados__pessoais__bloco">Telefone</p>
                </div>
                
                <!-- Botão Ver todos endereços -->
                <button @click="showModal = true" class="button w-auto mt-4">Ver todos endereços</button>
            </div>

            <!-- Endereço Principal -->
            <div class="enderecos col-span-5 mt-4 p-4 border rounded-lg shadow-md bg-white h-full">
                <h3 class="text-lg font-semibold">
                    Endereço principal
                    <span class="badge">Principal</span>
                </h3>
                <p><strong>Rua:</strong> Exemplo, 123</p>
                <p><strong>Bairro:</strong> Centro</p>
                <p><strong>Complemento:</strong> Apto 101</p>
                <p><strong>Cidade:</strong> São Paulo, SP</p>
                <p><strong>CEP:</strong> 00000-000</p>
            </div>

            <!-- Outros Endereços -->
            <div class="enderecos col-span-5 mt-4 p-4 grid grid-cols-3 gap-4 border rounded-lg shadow-md bg-white h-full">
                <div>
                    <h3 class="text-lg font-semibold">Endereço Secundário 1</h3>
                    <p><strong>Rua:</strong> Secundária, 456</p>
                    <p><strong>Bairro:</strong> Zona Norte</p>
                    <p><strong>Complemento:</strong> Casa</p>
                    <p><strong>Cidade:</strong> Rio de Janeiro, RJ</p>
                    <p><strong>CEP:</strong> 11111-111</p>
                </div>
                <div>
                    <h3 class="text-lg font-semibold">Endereço Secundário 2</h3>
                    <p><strong>Rua:</strong> Av. das Américas, 789</p>
                    <p><strong>Bairro:</strong> Centro</p>
                    <p><strong>Complemento:</strong> Sala 305</p>
                    <p><strong>Cidade:</strong> Belo Horizonte, MG</p>
                    <p><strong>CEP:</strong> 22222-222</p>
                </div>
                <div>
                    <h3 class="text-lg font-semibold">Endereço Secundário 3</h3>
                    <p><strong>Rua:</strong> Rua do Comércio, 321</p>
                    <p><strong>Bairro:</strong> Comércio</p>
                    <p><strong>Complemento:</strong> Loja A</p>
                    <p><strong>Cidade:</strong> Salvador, BA</p>
                    <p><strong>CEP:</strong> 33333-333</p>
                </div>
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
                                    <input type="text" v-model="editingAddressData.street" class="input" />
                                </div>
                                <div>
                                    <label class="block">Bairro</label>
                                    <input type="text" v-model="editingAddressData.neighborhood" class="input" />
                                </div>
                                <div>
                                    <label class="block">Complemento</label>
                                    <input type="text" v-model="editingAddressData.complement" class="input" />
                                </div>
                                <div>
                                    <label class="block">Cidade</label>
                                    <input type="text" v-model="editingAddressData.city" class="input" />
                                </div>
                                <div>
                                    <label class="block">CEP</label>
                                    <input type="text" v-model="editingAddressData.zip" class="input" />
                                </div>
                            </div>
                            <button type="button" @click="cancelEdit" class="button mt-4 w-full bg-gray-500">Cancelar</button>
                            <button type="submit" class="button mt-2 w-full bg-blue-500">Salvar Alterações</button>
                        </form>
                    </div>
                    <div v-else>
                        <div class="space-y-4">
                            <!-- Endereços dentro do modal -->
                            <div v-for="(address, index) in addresses" :key="index" class="p-4 border rounded-lg shadow-sm">
                                <p><strong>Rua:</strong> {{ address.street }}</p>
                                <p><strong>Bairro:</strong> {{ address.neighborhood }}</p>
                                <p><strong>Complemento:</strong> {{ address.complement }}</p>
                                <p><strong>Cidade:</strong> {{ address.city }}</p>
                                <p><strong>CEP:</strong> {{ address.zip }}</p>
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
            <div v-if="showEditModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div class="modal-content bg-white rounded-lg w-11/12 md:w-1/2 p-5">
                    <h3 class="text-xl font-bold mb-4">Editar Perfil</h3>
                    <form @submit.prevent="saveChanges">
                        <div class="space-y-4">
                            <div>
                                <label class="block">Nome Completo</label>
                                <input type="text" v-model="editData.name" class="input" />
                            </div>
                            <div>
                                <label class="block">Idade</label>
                                <input type="number" v-model="editData.age" class="input" />
                            </div>
                            <div>
                                <label class="block">E-mail</label>
                                <input type="email" v-model="editData.email" class="input" />
                            </div>
                            <div>
                                <label class="block">Telefone</label>
                                <input type="text" v-model="editData.phone" class="input" />
                            </div>
                        </div>
                        <button type="button" @click="showEditModal = false" class="button mt-4 w-full bg-gray-500">Fechar</button>
                        <button type="submit" class="button mt-2 w-full bg-blue-500">Salvar Alterações</button>
                    </form>
                </div>
            </div>
        </transition>
    </main>
</template>

<script>
export default {
    data() {
        return {
            showModal: false,
            showEditModal: false,
            editingAddress: false,
            editData: {
                name: "Ariane Silva",
                age: 19,
                email: "ariane@example.com",
                phone: "123-456-7890"
            },
            addresses: [
                { street: "Exemplo, 123", neighborhood: "Centro", complement: "Apto 101", city: "São Paulo, SP", zip: "00000-000" },
                { street: "Secundária, 456", neighborhood: "Zona Norte", complement: "Casa", city: "Rio de Janeiro, RJ", zip: "11111-111" },
                { street: "Av. das Américas, 789", neighborhood: "Centro", complement: "Sala 305", city: "Belo Horizonte, MG", zip: "22222-222" },
            ],
            editingAddressData: {}
        };
    },
    methods: {
        saveChanges() {
            console.log("Alterações salvas:", this.editData);
            this.showEditModal = false;
        },
        editAddress(index) {
            this.editingAddress = true;
            this.editingAddressData = { ...this.addresses[index] };
        },
        cancelEdit() {
            this.editingAddress = false;
            this.editingAddressData = {};
        },
        saveAddressChanges() {
            
            const index = this.addresses.findIndex(address => address.street === this.editingAddressData.street);
            if (index !== -1) {
                this.addresses.splice(index, 1, this.editingAddressData);
            }
            this.editingAddress = false;
            this.editingAddressData = {};
            console.log("Endereço salvo:", this.addresses);
        }
    }
};
</script>

<style scoped>
.button {
    color: white;
    background-color: black;
    padding: 10px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
}

.input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
}

.nomecompleto__idade {
    color: #000;
    font-family: 'Montserrat', sans-serif;
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
    font-family: 'Montserrat', sans-serif;
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
</style>
