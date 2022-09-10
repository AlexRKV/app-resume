<template>
    <div class="container column">
        <AppFormSetting @addBlock="createBlock" />
        <AppFormResume :blocks="blocks" />
    </div>
    <div class="container">
        <AppLoader v-if="loader" />
        <AppFormComments
            v-else
            :comments="comments"
            @add-commits="addCommits"
        />
    </div>
</template>

<script>
import AppFormComments from "@/components/AppFormComments.vue";
import AppFormResume from "@/components/AppFormResume.vue";
import AppFormSetting from "@/components/AppFormSetting.vue";
import AppLoader from "@/components/AppLoader.vue";
import axios from "axios";

export default {
    data() {
        return {
            blocks: [],
            comments: [],
            loader: false,
        };
    },
    methods: {
        createBlock(block) {
            this.blocks.push(block);
        },
        async addCommits() {
            this.loader = true;
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/comments?_limit=42"
            );
            this.comments = data;
            this.loader = false;
        },
        // async addCommits() {
        //     // this.loading = true;
        //     const res = await fetch(
        //         "https://jsonplaceholder.typicode.com/comments?_limit=42"
        //     );
        //     this.comments = await res.json();
        //     console.log(this.comments);
        //     // this.loading = false;
        // },
    },
    components: {
        AppFormComments,
        AppFormResume,
        AppFormSetting,
        AppLoader,
    },
};
</script>

<style>
</style>