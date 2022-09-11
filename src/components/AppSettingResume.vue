<template>
    <form class="card card-w30" @submit.prevent="submit">
        <div class="form-control">
            <label for="name">Тип Блока</label>
            <select id="name" v-model="type">
                <option value="title">Заголовок</option>
                <option value="subtitle">Подзаголовок</option>
                <option value="avatar">Аватар</option>
                <option value="text">Текст</option>
            </select>
        </div>
        <div class="form-control">
            <label for="val">Тип Блока</label>
            <textarea id="val" v-model="value"></textarea>
        </div>
        <button class="btn primary" :disabled="!isValid">добавить</button>
    </form>
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
            console.log(this.value);
        },
    },
    computed: {
        isValid() {
            return this.value.length > 3;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>