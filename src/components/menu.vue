<template>
  <!--write to the imported store using `.set`-->
  <p v-if="$isCartOpen">Hej from a Vue component</p>
</template>

<script lang="ts" setup>
import { useStore } from "@nanostores/vue";
import { isCartOpen } from "../globaStore/ui";

// read the store value with the `useStore` hook
const $isCartOpen = useStore(isCartOpen);
</script>
