<script setup lang="ts">
    import logo from "@/assets/LogoLentoo.png"
    import { Button } from "@/components/ui/button"
    import { ArrowRightIcon } from "lucide-vue-next";
</script>

<template>
    <img :src="logo" alt="logo" width="200"/>
    <div class="my-5 text-center">
        <h1 class="text-5xl">Lentoo</h1>
        <Button>
            Proceed
            <ArrowRightIcon />
        </Button>
    </div>
</template>