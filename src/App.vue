<template>
  <!-- <BaseHeader></BaseHeader>
  <LoginPage></LoginPage>
  <RegisterPage></RegisterPage>
  <Dashboard></Dashboard> -->
  <BaseHeader />
  <RouterView></RouterView>
  <BaseFooter v-if="!$route.meta.hideFooter"></BaseFooter>
</template>

<script setup>
import BaseHeader from "./components/BaseHeader.vue";
import BaseFooter from "./components/BaseFooter.vue";
import { RouterView } from "vue-router";
import { provide, reactive } from "vue";
import { state } from "./state.js";
import { useNotifications } from "./composables/useNotifications.js";

provide("state", state);

useNotifications();
</script>

<style scoped></style>
