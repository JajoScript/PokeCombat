<script setup lang="ts">
import { onMounted } from 'vue'
import BaseLayout from '@/layouts/BaseLayout.vue'
import CombatBoard from '@/components/Combat/CombatBoard.vue'
import CombatLog from '@/components/Combat/CombatLog.vue'
import { useTeamStore } from '@/stores/team'
import router from '@/router/'

const store = useTeamStore()

onMounted(() => {
  console.info('on MOUNTED combat - ')

  if (store.team_1.length === 0 || store.team_1.length === 0) {
    // Redirect to TeamsView
    console.info('Redirect to TeamsView')
    router.push('/')
  }
})
</script>

<template>
  <BaseLayout>
    <main class="my-4 mx-4">
      <section class="flex flex-row gap-x-4">
        <CombatBoard />
        <CombatLog />
      </section>
    </main>
  </BaseLayout>
</template>
