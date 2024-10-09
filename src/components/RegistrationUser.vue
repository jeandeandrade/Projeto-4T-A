<script setup>

</script>

<template>
  <main>
    <div class="registro">
        <label>E-mail</label>
        <input type="email" id="email" placeholder="Ex: eduardo@gmail.com" class="block"></input>
        <router-link to="/"><button class="button flex items-center"><b>Registrar-se</b></button></router-link>
    </div>
  </main>
</template>

<style scoped>
.registro{
    background-color: #101010;
    color: white;
}
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
}
</style>
