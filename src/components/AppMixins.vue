<template>
    <div class="alert" :class="typeClass">
        <p class="alert-title">{{ title }}!</p>
        <p>{{ text }}</p>
        <button
            class="btn"
            :class="typeClass"
            v-if="closable"
            @click="$emit('close')"
        >
            close
        </button>
    </div>
</template>

<script>
export default {
    emits: ["close"],
    props: {
        title: String,
        text: String,
        closable: {
            type: Boolean,
            requared: false,
            default: false,
        },
        typeClass: {
            type: String,
            requared: false,
            default: "primary",
            validator(val) {
                return ["primary", "danger", "warning"].includes(val);
            },
        },
    },
};
</script>

<style lang="scss" scoped>
</style>