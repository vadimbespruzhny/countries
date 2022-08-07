import { createStore } from "vuex";
import { axiosInstance } from "../api/api";

export default createStore({
    state: () => ({
        isDark: false,
        countryInfo: [],
        selectedRegion: "",
        regions: [],
        selectedCountry: null,
        searchQuery: "",
    }),
    mutations: {
        switchTheme(state) {
            state.isDark = !state.isDark;
        },
        setCountriesInfo(state, payload) {
            state.countryInfo = payload.slice(0, 20);
        },
        searchCountry(state, payload) {
            if (state.searchQuery) {
                state.countryInfo = payload;
                return;
            }
            state.selectedCountry = payload[0];
        },
        setRegions(state, payload) {
            const regionsList = [...new Set(payload.map((country) => country.region))];
            state.regions = regionsList;
        },
        setSearchQuery(state, payload) {
            state.searchQuery = payload;
        },
    },
    getters: {
        getImage(state) {
            if (!state.selectedCountry) {
                return "";
            }
            return state.selectedCountry.flags.png;
        },
    },
    actions: {
        async fetchCountries({ commit }) {
            try {
                const { data } = await axiosInstance.get("all");
                commit("setCountriesInfo", data);
                commit("setRegions", data);
            } catch (error) {
                console.log(error);
            }
        },
        async fetchCountry({ commit }, searchQuery) {
            try {
                const queryString = `name/${searchQuery}`;
                const { data } = await axiosInstance.get(queryString);
                commit("searchCountry", data);
            } catch (error) {
                console.log(error);
            }
        },
        async filterByRegion({ commit }, selectedValue) {
            try {
                const queryString = `region/${selectedValue}`;
                const { data } = await axiosInstance.get(queryString);
                commit("setCountriesInfo", data);
            } catch (error) {
                console.log(error);
            }
        },
    },
});
