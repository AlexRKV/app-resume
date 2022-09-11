<template>
    <div class="avatar">
        <img :src="$attrs.value" alt="img" />
    </div>
</template>
<style lang="css" scoped>
.avatar {
    display: flex;
    justify-content: center;
}
.avatar img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
}
</style>