<template>
    <Header></Header>
    <div class="app" :class="{ darkMode: isDark }">
        <router-view></router-view>
    </div>
</template>

<script>
require("./assets/css/output.css");
import Header from "./components/Header.vue";
import { mapState } from "vuex";

export default {
    name: "App",
    components: { Header },
    computed: mapState(["isDark"]),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.darkMode {
    background-color: hsl(207, 26%, 17%);
    color: hsl(0, 0%, 100%);
}
</style>
