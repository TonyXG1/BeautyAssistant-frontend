import { ref, watch, onMounted, onUnmounted } from "vue";
import { useToast } from "vue-toastification";
import { getReminders } from "../services/getReminders.js";
import { state } from "../state.js";

export function useNotifications() {
  const toast = useToast();
  const isScheduled = ref(false);

  const scheduleNotification = (time, message) => {
    if (!time) return; // Skip if time is null

    const [hours, minutes] = time.split(":").map(Number);
    const now = new Date();
    const target = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hours,
      minutes
    );
    // If time has passed today, schedule for tomorrow
    if (target < now) {
      target.setDate(target.getDate() + 1);
    }
    const timeUntilNotification = target - now;

    if (timeUntilNotification < 1000) {
      console.error("Notification time is too short:", timeUntilNotification);
      return; // Skip scheduling if the time is less than 1 second
    }

    setTimeout(() => {
      toast.info(message, {
        timeout: 20000, // Show for 10 seconds
      });
      // Reschedule for the next day
      scheduleNotification(time, message);
    }, timeUntilNotification);
  };

  const setupNotifications = async () => {
    if (isScheduled.value || !state.isLoggedIn || !state.userData?.id) {
      console.log("Notifications already scheduled or user not logged in.");
      return;
    }

    try {
      const { morningReminder, nightReminder } = await getReminders(state.userData.id);
      console.log("Reminders fetched:", { morningReminder, nightReminder });

      if (morningReminder) {
        scheduleNotification(
          morningReminder,
          "Добро утро! Време е за вашата сутришна рутина за лице!"
        );
      }
      if (nightReminder) {
        scheduleNotification(
          nightReminder,
          "Добър вечер! Време е за вашата вечерна рутина за лице!"
        );
      }
      isScheduled.value = true;
    } catch (error) {
      console.error("Failed to load reminders:", error);
    toast.error("Неуспешно зареждане на напомняния.");
    }
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState === "visible" && !isScheduled.value) {
      setupNotifications();
    }
  };

  // Watch for changes in login state or userData
  watch(
    () => [state.isLoggedIn, state.userData],
    () => {
      isScheduled.value = false; // Reset to allow rescheduling
      setupNotifications();
    },
    { deep: true }
  );

  // Run setup automatically
  onMounted(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);
    setupNotifications();
  });

  onUnmounted(() => {
    document.removeEventListener("visibilitychange", handleVisibilityChange);
  });
}
