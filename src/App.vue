<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { useThemeStore } from "./stores/useThemeStore";
import { useNavigationStore } from "@/stores/useNavigationStore";

const navigationStore = useNavigationStore();
const themeStore = useThemeStore();
</script>

<template>
    <main class="flex flex-col min-h-screen dark:bg-neutral-800">
        <nav class="m-4">
            <Button @click="themeStore.toggle()"> Toggle Theme </Button>
        </nav>
        <section
            class="flex grow flex-col justify-center items-center"
        >
            <component :is="navigationStore.component" />
        </section>
    </main>
</template>
