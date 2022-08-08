<template>
    <div class="notFound">
        Страница не найдена...
    </div>
    <router-link to="/">
        <div>На главную</div>
    </router-link>
</template>

<script>
    export default {
        name: "NotFound",
    }
</script>

<style scoped>
.notFound {
    font-size: 45px;
    margin-bottom: 25px;
}
</style>