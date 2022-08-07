<template>
    <NavigationBar />
    <div class="allCountries">
        <router-link
            v-for="item in countryInfo"
            :key="item"
            :to="{
                name: 'CountryItem',
                params: { name: item.name.common },
            }"
        >
            <div class="country" :class="{ darkModeCountry: isDark }">
                <img :src="`${item.flags.png}`" />
                <div class="info">
                    <div class="name">
                        <div>
                            {{ item.name.official }}
                        </div>
                    </div>
                    <div class="population">
                        Population:
                        <div class="population-text">
                            {{ item.population }}
                        </div>
                    </div>
                    <div class="region">
                        Region:
                        <div class="region-text">
                            {{ item.region }}
                        </div>
                    </div>
                    <div class="capital" v-for="capital in item.capital" :key="capital">
                        Capital:
                        <div class="capital-text">
                            {{ capital }}
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
import NavigationBar from "@/components/Navigation.vue";
import { mapActions, mapState } from "vuex";

export default {
    name: "mainPage",
    components: { NavigationBar },
    methods: {
        ...mapActions(["fetchCountries"]),
    },
    computed: {
        ...mapState(["isDark", "countryInfo"]),
    },
    mounted() {
        this.fetchCountries();
    },
};
</script>
<style scoped>
.allCountries {
    width: 1440px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.country {
    display: flex;
    flex-direction: column;
    margin: 25px;
    height: 400px;
    width: 300px;
    border-radius: 5px;
    box-shadow: 0 0 15px 0px rgba(221, 221, 221, 1);
}
.darkModeCountry {
    background-color: hsl(209, 23%, 22%);
    box-shadow: 0 0 3px 0px hsl(209, 23%, 22%);
}
img {
    height: 180px;
    border-radius: 4px 4px 0 0;
}
.info {
    padding: 20px;
    box-sizing: border-box;
    border-radius: 0 0 4px 4px;
}
.name {
    margin-bottom: 20px;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 800;
}
.population,
.region,
.capital {
    display: flex;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 600;
    margin-top: 10px;
    font-size: 15px;
}
.population-text,
.region-text,
.capital-text {
    margin-left: 5px;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 300;
}
</style>
