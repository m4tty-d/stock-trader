<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import Header from './components/Header.vue';
    import Home from './components/Home.vue';

    export default {
        components: {
            appHeader: Header,
            appHome: Home,
        },
        methods: {
            ...mapActions('stocks', [
                'getStocksFromAPI'
            ])
        },
        mounted() {
            this.getStocksFromAPI();
        }
    }
</script>

<style>
    @import "../node_modules/bulma/css/bulma.css";
</style>
