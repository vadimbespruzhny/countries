import { createWebHistory, createRouter } from "vue-router";
import CountryItem from "@/components/CountryItem";
import Main from "@/components/Main";
import NotFound from "@/components/NotFound";

const routes = [
    { path: "/", name: "Main", component: Main },
    { path: "/:name", name: "CountryItem", component: CountryItem },
    { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
