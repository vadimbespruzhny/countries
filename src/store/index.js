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
        isLoading: false,
    }),
    mutations: {
        switchTheme(state) {
            state.isDark = !state.isDark;
        },
        setCountriesInfo(state, payload) {
            state.countryInfo = payload;
            state.selectedCountry = null;
        },
        searchCountry(state, payload) {
            if (state.searchQuery) {
                state.countryInfo = payload;
                state.selectedCountry = payload;
                return;
            }
            state.selectedCountry = payload;

        },
        setRegions(state, payload) {
            const regionsList = [...new Set(payload.map((country) => country.region))];
            state.regions = regionsList;
        },
        setSearchQuery(state, payload) {
            state.searchQuery = payload;
        },
        setLoading(state, payload) {
            state.isLoading = payload;
        },
    },
    actions: {
        async fetchCountries({ commit }) {
            try {
                commit("setLoading", true);
                const { data } = await axiosInstance.get("all");
                commit("setCountriesInfo", data);
                commit("setRegions", data);
            } catch (error) {
                console.log(error);
                commit("setLoading", false);
            } finally {
                commit("setLoading", false);
            }
        },
        async fetchCountry({ commit }, searchQuery) {
            try {
                commit("setLoading", true);
                const queryString = `name/${searchQuery}`;
                const { data } = await axiosInstance.get(queryString);
                commit("searchCountry", data);
            } catch (error) {
                console.log(error);
                commit("setLoading", false);
            } finally {
                commit("setLoading", false);
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
