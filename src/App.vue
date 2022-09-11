<template>
    <div class="container column">
        <AppSettingResume @addBlock="addBlock1" />
        <AppViewResumeBlock :blocks="blocks" />
    </div>
    <div class="container">
        <div class="card">
            <AppCommentsBlock />
            <AppLoaderBlock v-if="loader" />
        </div>
    </div>
</template>

<script>
import AppSettingResume from "@/components/AppSettingResume.vue";
import AppViewResumeBlock from "@/components/AppViewResumeBlock.vue";
import AppCommentsBlock from "@/components/AppCommentsBlock.vue";
import AppLoaderBlock from "@/components/AppLoaderBlock.vue";

export default {
    components: {
        AppSettingResume,
        AppViewResumeBlock,
        AppCommentsBlock,
        AppLoaderBlock,
    },
    data() {
        return {
            blocks: [],
            comments: [],
            loader: false,
        };
    },
    methods: {
        addBlock1(blockValue) {
            this.blocks.push(blockValue);
        },
    },
};
</script>

<style>
</style>