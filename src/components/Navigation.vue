<template>
    <div class="navigation">
        <div class="search-form">
            <form>
                <input
                    :class="{ darkModeInput: isDark }"
                    type="text"
                    placeholder="Search for a country..."
                    @input="this.$store.commit('setSearchQuery', $event.target.value)"
                />
            </form>
        </div>
        <div class="filter-form">
            <select
                :class="{ darkModeSelect: isDark }"
                :value="selectedRegion"
                @change="this.$store.dispatch('filterByRegion', $event.target.value)"
            >
                <option disabled value="">Filter By Region</option>
                <option v-for="(region, index) in regions" :key="index">
                    {{ region }}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "NavigationBar",
    methods: {
        ...mapActions(["fetchCountries", "fetchCountry"]),
    },
    computed: {
        ...mapState(["isDark", "selectedRegion", "regions", "searchQuery"]),
    },
    watch: {
        searchQuery() {
            if (this.searchQuery) {
                this.fetchCountry(this.searchQuery);
                return;
            }
            this.fetchCountries();
        },
    }
};
</script>

<style scoped>
.navigation {
    width: 1440px;
    display: flex;
    justify-content: space-between;
    margin: 35px 0 10px 0;
}
.search-form {
    margin-left: 25px;
}
input {
    height: 45px;
    width: 400px;
    padding-left: 30px;
    border: none;
    outline: none;
    box-shadow: 0px 0px 15px rgba(184, 184, 184, 0.5);
    border-radius: 4px;
    font-family: "Nunito Sans", sans-serif;
}
.darkModeInput {
    background-color: hsl(209, 23%, 22%);
    box-shadow: 0 0 15px 0px rgba(43, 43, 43, 0.5);
    color: hsl(0, 0%, 100%);
}
.darkModeInput::placeholder {
    color: hsl(0, 0%, 100%);
}
.filter-form {
    margin-right: 25px;
}
select {
    height: 45px;
    width: 150px;
    padding-left: 15px;
    border: none;
    outline: none;
    box-shadow: 0px 0px 15px rgba(184, 184, 184, 0.5);
    border-radius: 4px;
    font-family: "Nunito Sans", sans-serif;
    background: none;
    color: hsl(0, 0%, 34%);
    font-size: 13px;
}

.darkModeSelect {
    background-color: hsl(209, 23%, 22%);
    box-shadow: 0 0 15px 0px rgba(43, 43, 43, 0.5);
    color: hsl(0, 0%, 100%);
}
</style>
