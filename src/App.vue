<template>
  <!-- <BaseHeader></BaseHeader>
  <LoginPage></LoginPage>
  <RegisterPage></RegisterPage>
  <Dashboard></Dashboard> -->
  <BaseHeader />
  <RouterView></RouterView>
</template>

<script setup>
import BaseHeader from "./components/BaseHeader.vue";
import { RouterView } from "vue-router";
import { provide, reactive } from "vue";
import { state } from "./state.js";
import { useNotifications } from "./composables/useNotifications.js";

provide("state", state);

useNotifications();
</script>

<style scoped></style>
