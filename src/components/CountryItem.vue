<template>
    <div class="navigation">
        <router-link to="/">
            <button :class="{ darkmodeButton: isDark }">Back</button>
        </router-link>
    </div>
    <div class="countryItem">
        <img :src="`${getImage}`" alt="flag" />
        <div class="info">
            <div class="main-info">
                <div class="country-name">
                    <div>{{ selectedCountry.name.common }}</div>
                </div>
                <div class="native-name">
                    Native Name:
                    <div class="native-name-text">
                        {{ selectedCountry.name.common }}
                    </div>
                </div>
                <div class="population">
                    Population:
                    <div class="population-text">
                        {{ selectedCountry.population }}
                    </div>
                </div>
                <div class="region">
                    Region:
                    <div class="region-text">
                        {{ selectedCountry.region }}
                    </div>
                </div>
                <div class="sub-region">
                    Sub-region:
                    <div class="sub-region-text">
                        {{ selectedCountry.subregion }}
                    </div>
                </div>
                <div class="capital">
                    Capital:
                    <div class="capital-text">
                        {{ selectedCountry.capital[0] }}
                    </div>
                </div>
            </div>
            <div class="side-info"></div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
    methods: {
        ...mapActions(["fetchCountry"]),
    },
    computed: {
        ...mapState(["selectedCountry", "isDark"]),
        ...mapGetters(["getImage"]),
        getCountryName() {
            return this.$route.params.name;
        },
    },
    mounted() {
        this.fetchCountry(this.getCountryName);
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

.navigation {
    width: 1440px;
    display: flex;
    margin: 35px 0 10px 0;
    margin-top: 50px;
}
button {
    height: 35px;
    width: 100px;
    padding-left: 15px;
    border: none;
    outline: none;
    box-shadow: 0px 0px 15px rgba(184, 184, 184, 0.5);
    border-radius: 4px;
    font-family: "Nunito Sans", sans-serif;
    font-size: 14px;
}
.darkmodeButton {
    background-color: hsl(209, 23%, 22%);
    box-shadow: 0 0 15px 0px rgba(43, 43, 43, 0.5);
    color: hsl(0, 0%, 100%);
}
.countryItem {
    display: flex;
    width: 1440px;
    margin-top: 50px;
}
.country-name {
    margin: 45px 0 30px 120px;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 800;
    font-size: 35px;
}
.native-name,
.population,
.region,
.sub-region,
.capital {
    margin: 45px 0 5px 120px;
    display: flex;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 600;
    margin-top: 10px;
    font-size: 17px;
}
.native-name-text,
.population-text,
.region-text,
.sub-region-text,
.capital-text {
    margin-left: 5px;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 300;
}
img {
    height: 350px;
    width: 580px;
    border-radius: 4px;
}
</style>
