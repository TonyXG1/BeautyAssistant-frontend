import { reactive } from "vue";

export const state = reactive({
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  userData: JSON.parse(localStorage.getItem("userData")) || null,
});

export const saveState = () => {
    localStorage.setItem("isLoggedIn", state.isLoggedIn);
    localStorage.setItem("userData", JSON.stringify(state.userData));
} 