<template>
    <div class="card" v-if="comments.length !== 0">
        <h2>Комментарии</h2>
        <ul class="list">
            <li class="list-item" v-for="el in comments" :key="el.id">
                <div>
                    <p>
                        <strong>{{ el.email }}</strong>
                    </p>
                    <small>{{ el.body }}</small>
                </div>
            </li>
        </ul>
    </div>
    <p v-else>
        <button class="btn primary" @click="$emit('add-commits')">
            Загрузить комментарии
        </button>
    </p>
</template>

<script>
export default {
    emits: ["add-commits"],
    props: ["comments"],
};
</script>

<style lang="scss" scoped>
</style>