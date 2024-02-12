<script setup>
import { ref } from "vue";

const visible = ref(false);
watchEffect(() => {
  console.log(visible.value);
});
</script>
<template>
  <h1 class="text-3xl bg-blue-600 font-bold underline">
    Tailwind CSS smoke test
  </h1>

  <div class="card h-full w-full flex justify-center border-2 border-green-800">
    <Sidebar v-model:visible="visible" header="Sidebar" class="w-full">
      <!-- w-full schould be working -->
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </Sidebar>
    <Button
      label="tootgle"
      v-tooltip="'Testing registered directive'"
      @click="visible = true"
    />
  </div>
</template>
