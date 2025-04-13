import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3005"
});

export const getReminders = async (userId) => {
    if (!userId) {
      throw new Error('userId is required');
    }
    try {
      const response = await api.get('/reminders', {
        params: { userId },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching reminders:', error);
      throw error;
    }
  };