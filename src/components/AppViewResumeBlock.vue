<template>
    <div class="card card-w70">
        <template v-if="blocks.length">
            <component
                v-for="el in blocks"
                :key="el.id"
                :is="'the-' + el.type"
                v-bind="{ value: el.value }"
            ></component>
        </template>
        <h3 v-else>Резюме не заполнено</h3>
    </div>
</template>

<script>
import TheTitle from "./parts/TheTitle.vue";
import TheSubtitle from "./parts/TheSubtitle.vue";
import TheAvatar from "./parts/TheAvatar.vue";
import TheText from "./parts/TheText.vue";

export default {
    props: ["blocks"],
    components: {
        TheTitle,
        TheSubtitle,
        TheAvatar,
        TheText,
    },
};
</script>

<style lang="scss" scoped>
</style>