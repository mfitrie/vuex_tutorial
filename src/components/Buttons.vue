<template>
    <div class="button">
        <!-- <button @click="$store.commit('decreaseCounter')">-</button>
        <button @click="$store.commit('increaseCounter')">+</button> -->

        <!-- .dispatch is used to use the 'actions' method -->
        <button @click="$store.dispatch('decreaseCounter')">-</button>
        <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>