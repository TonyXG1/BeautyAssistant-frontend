import { reactive } from "vue";

export const state = reactive({
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true", // Example state
  userData: JSON.parse(localStorage.getItem("userData")) || null,    // Add your user data here
});

export const saveState = () => {
    localStorage.setItem("isLoggedIn", state.isLoggedIn);
    localStorage.setItem("userData", JSON.stringify(state.userData));
} 