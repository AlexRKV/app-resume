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
import alertMixin from "@/mixins/alertMixins";
import AppMixins from "./AppMixins.vue";

export default {
    mixins: [alertMixin],
    components: {
        AppMixins,
    },
};
</script>

<style>
</style>