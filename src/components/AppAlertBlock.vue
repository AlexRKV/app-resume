<template>
    <div class="container">
        <AppMixins
            v-if="alert"
            title="Hello"
            text="This is my App!"
            @close="alert = false"
        />
        <div class="card">
            <button class="btn primary" @click="alertToggle">
                {{ alert ? "закрыть" : "открыть" }}
            </button>
        </div>
    </div>
</template>

<script>
import AppMixins from "./AppMixins.vue";

export default {
    data() {
        return {
            alert: false,
        };
    },
    methods: {
        alertToggle() {
            this.alert = !this.alert;
        },
    },
    components: {
        AppMixins,
    },
};
</script>

<style>
</style>