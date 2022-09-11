<template>
    <div class="card card-w30" @submit.prevent="submit">
        <div class="form-control">
            <label for="type">Тип Блока</label>
            <select id="type" v-model="type">
                <option value="title">Заголовок</option>
                <option value="subtitle">Подзаголовок</option>
                <option value="avatar">Аватар</option>
                <option value="text">Текст</option>
            </select>
        </div>
        <div class="form-control">
            <label for="value">Тип Блока</label>
            <textarea id="value" cols="30" rows="10" v-model="value"></textarea>
        </div>
        <button class="btn primary">добавить</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            type: "title",
            value: "",
        };
    },
    methods: {
        submit() {
            this.$emit("addBlock", {
                type: this.type,
                value: this.value,
                id: Date.now(),
            });
            this.value = "";
            this.type = "title";
        },
    },
};
</script>

<style lang="scss" scoped>
</style>