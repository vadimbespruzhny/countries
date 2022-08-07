import { createWebHistory, createRouter } from "vue-router";
import CountryItem from "@/components/CountryItem";
import Main from "@/components/Main";

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main,
    },
    {
        path: "/:name",
        name: "CountryItem",
        component: CountryItem,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
