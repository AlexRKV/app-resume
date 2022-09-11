<template>
    <div class="card" v-if="comments.length">
        <h2>Комментарии</h2>
        <ul class="list">
            <li class="list-item" v-for="el in comments" :key="el.id">
                <div>
                    <p>
                        <strong>{{ el.name }}</strong>
                    </p>
                    <p>
                        <strong>{{ el.email }}</strong>
                    </p>
                    <p>{{ el.body }}</p>
                </div>
            </li>
        </ul>
    </div>
    <p v-else>
        <button class="btn Primary" @click="$emit('loadComments')">
            Загрузить комментарии
        </button>
    </p>
</template>

<script>
export default {
    emits: ["loadComments"],
    props: ["comments"],
};
</script>

<style lang="scss" scoped>
</style>