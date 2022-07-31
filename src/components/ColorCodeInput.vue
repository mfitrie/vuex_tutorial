<template>
    <div>
        <input
            v-model="colorCode"  
            placeholder="Enter color code" type="text">
    </div>
</template>

<script>
export default {
    computed: {
        // when create computed method which have 'get' and 'set' method, dont initialize like colorCode()
        colorCode: {
            get(){
            return this.$store.state.colorCode
            },
            set(newValue){
            // this.$store.commit('setColorCode', newValue);
            this.$store.dispatch('setColorCode', newValue);
            }
        }
    },
}
</script>

<style>

</style>