<template>
    <header class="header" :class="{ darkModeNavBar: isDark }">
        <div class="headerInner">

            <div class="pageName">
                <router-link to="/">Where in the world?</router-link>
            </div>
            <div class="darkMode-button">
                <IconDark></IconDark>
                <div>
                    <button
                        @click="this.$store.commit('switchTheme')"
                        :class="{ darkModeButton: isDark }"
                    >
                        Dark Mode
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapState } from "vuex";
import iconDark from "./iconDark.vue";
import IconDark from "./iconDark.vue";

export default {
    components: {
        iconDark,
        IconDark,
    },
    name: "HeAder",
    computed: {
        ...mapState(["isDark"]),
    },
};
</script>

<style scoped>
.header {
    display: flex;
    justify-content: center;
    height: 65px;
    box-shadow: 0px -1px 7px rgba(145, 145, 145, 0.5);
}
.headerInner {
    width: 1440px;
    display: flex;
    justify-content: space-between;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 800;
    font-size: 20px;
}
.pageName {
    display: flex;
    justify-content: center;
    align-items: center;
}
.darkMode-button {
    width: 96px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
button {
    font-family: "Nunito Sans", sans-serif;
    font-weight: 600;
    font-size: 15px;
}
.darkModeNavBar {
    background-color: hsl(209, 23%, 22%);
    box-shadow: 0px -1px 7px rgba(145, 145, 145, 0.5);
    color: hsl(0, 0%, 100%);
}
.darkModeButton {
    color: hsl(0, 0%, 100%);
}
.light-icon {
    width: 25px;
    height: 25px;
}
</style>
