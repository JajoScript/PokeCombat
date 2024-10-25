<script setup lang="ts">
import { defineProps } from 'vue'
import type { Pokemon } from '@/types/Pokemon'
import TeamArena from './TeamArena.vue'
import TeamStats from './TeamStats.vue'

defineProps({
  teamNum: {
    type: String,
    required: true,
  },

  team: {
    type: Array as () => Pokemon[],
    required: true,
    default: () => [],
  },
})
</script>

<template>
  <div
    class="flex flex-row justify-between bg-green-100 mx-2 rounded-md gap-x-8"
  >
    <TeamStats :teamNum="teamNum" />
    <TeamArena :teamNum="teamNum" class="grow" />
  </div>
</template>
