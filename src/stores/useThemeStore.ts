import { defineStore } from "pinia"
import { useColorMode } from "@vueuse/core"

export const useThemeStore = defineStore("theme", () => {
    const colorMode = useColorMode({
        valueDark: "dark",
        valueLight: "light",
        selector: "html",
        attribute: "class",
    })

    const toggle = () => {
        if (colorMode.value === "dark") {
            colorMode.value = "light"
        } else {
            colorMode.value = "dark"
        }
    }

    return { colorMode, toggle }
})