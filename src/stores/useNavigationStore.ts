import Home from "@/views/Home.vue";
import { defineStore } from "pinia";
import { ref, markRaw } from "vue";

export const useNavigationStore = defineStore("navigation", () => {
    const views = {
        Home: markRaw(Home)
    }

    let currentRoute = ref<keyof typeof views>("Home");
    let component = views[currentRoute.value] as any

    const replaceView = (route: string) => {
        currentRoute.value = route as keyof typeof views;
        component = views[currentRoute.value] as any;
    }

    return {
        currentRoute,
        component,
        replaceView
    }
})