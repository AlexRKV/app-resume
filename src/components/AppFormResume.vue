<template>
    <div class="card card-w70">
        <template v-if="blocks.length">
            <component
                v-for="el in blocks"
                :key="el.id"
                :is="'the-' + el.type"
                v-bind="{ value: el.value }"
            >
            </component>
        </template>
        <h3 v-else>Добавьте первый блок, чтобы увидеть</h3>
    </div>
</template>

<script>
import TheAvatar from "@/components/parts/TheAvatar.vue";
import TheSubtitle from "@/components/parts/TheSubtitle.vue";
import TheText from "@/components/parts/TheText.vue";
import TheTitle from "@/components/parts/TheTitle.vue";

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