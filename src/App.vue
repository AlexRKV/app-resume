<template>
    <div class="container column">
        <AppSettingResume @addBlock="addBlock1" />
        <AppViewResumeBlock :blocks="blocks" />
    </div>
    <div class="container">
        <AppLoaderBlock v-if="loader" />
        <AppCommentsBlock
            v-else
            @loadComments="addLoadComments"
            :comments="comments"
        />
    </div>
</template>

<script>
import AppSettingResume from "@/components/AppSettingResume.vue";
import AppViewResumeBlock from "@/components/AppViewResumeBlock.vue";
import AppCommentsBlock from "@/components/AppCommentsBlock.vue";
import AppLoaderBlock from "@/components/AppLoaderBlock.vue";
// import axios from "axios";

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
        // async addLoadComments() {
        //     this.loader = true;
        //     const { data } = await axios.get(
        //         "https://jsonplaceholder.typicode.com/comments?_limit=22"
        //     );
        //     this.loader = false;
        //     this.comments = data;
        //     console.log(data);
        // },
        async addLoadComments() {
            this.loader = true;
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/comments?_limit=22"
            );
            this.loader = false;
            this.comments = await response.json();
        },
    },
};
</script>

<style>
</style>