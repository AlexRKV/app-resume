<template>
    <div class="container">
        <AppMixins
            v-if="alert"
            title="Hello"
            text="This is my App!"
            typeClass="warning"
            :closable="true"
            @close="alert = false"
        />
        <div class="card">
            <button class="btn primary" @click="alertToggle">
                {{ alert ? "закрыть" : "открыть" }}
            </button>
        </div>
        <AppAlertBlock />
    </div>
</template>

<script>
import AppMixins from "@/components/AppMixins.vue";
import AppAlertBlock from "@/components/AppAlertBlock.vue";
import alertMixin from "@/mixins/alertMixins";

export default {
    mixins: [alertMixin],
    components: {
        AppMixins,
        AppAlertBlock,
    },
};
</script>

<style>
</style>