<script setup lang="ts">
definePageMeta({
  layout: 'home',
})

const online = useOnline()
</script>

<template>
  <div>
    <!-- ClientOnly đảm bảo chỉ render ở client -->
    <ClientOnly fallback-tag="div" fallback="">
      <Suspense>
        <!-- Slot mặc định, single root node -->
        <template #default>
          <div>
            <Eat v-if="online" />

            <div v-else class="text-gray-80">
              Bạn đang offline
            </div>
          </div>
        </template>

        <!-- Slot fallback -->
        <template #fallback>
          <div class="grid h-screen italic place-items-center">
            <span class="animate-pulse"><Loading /></span>
          </div>
        </template>
      </Suspense>
    </ClientOnly>
  </div>
</template>
