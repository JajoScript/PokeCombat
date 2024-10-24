<script setup lang="ts">
import { defineProps } from 'vue'
import type { Pokemon } from '@/types'

defineProps<{
  pokemon: Pokemon
}>()
</script>

<template>
  <div class="member_container">
    <img :src="pokemon.sprites.front_default" class="member_sprite" />
    <p class="member_name">{{ pokemon.name }}</p>
  </div>
</template>

<style scoped>
.member_container {
  @apply flex-1 flex flex-col justify-center items-center;
  @apply bg-white;
  @apply border-2 border-slate-900/10;
  @apply rounded;
  @apply px-2 py-1;
}

.member_sprite {
  @apply size-24;
}

.member_name {
  @apply text-slate-900 text-base font-light text-wrap;
}
</style>
