<script setup>

</script>

<template>
  <main>
    <nav class="p-4">
      <div class="container mx-auto flex justify-between items-center">
          <a href="#" class="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text hover:text-white">Home</a>
          <a href="#" class="text-#718EBF hover:text-white">Serviços</a>
      </div>
    </nav>
    <div class="registro grid grid-cols-2">
      <div>
        <img src="../assets/images/fotoPerfil.png" alt="">
      </div>
      <div>
        <label>E-mail</label>
        <input type="email" id="email" placeholder="Ex: eduardo@gmail.com" class="block"></input>
        <router-link to="/"><button class="button flex items-center"><b>Registrar-se</b></button></router-link>
      </div>

    </div>
  </main>
</template>

<style scoped>
.button{
    padding: 10px 30px;
    margin-top: 20px;
    border-width: 1px;
    border-radius: 10px;
    border-color: white;
}
#email{
    border-radius: 5px;
    color: black;
    background-color: #F1F3F6;
    padding: 10px;
}
</style>
