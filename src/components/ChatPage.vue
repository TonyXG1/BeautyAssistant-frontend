<template>
  <div class="chat-page">
    <section class="image-section">
      <img src="/imgs/senki11.jpg" alt="Senki Image" class="main-image" />
    </section>
    <main>
      <div class="new-container">
        <h1 class="chat-title">Чат</h1>
        <div class="chat-area">
          <!-- Chat messages will go here -->
          <div
            v-for="(message, index) in messages"
            :key="index"
            class="chat-message"
          >
            <template v-if="message.type === 'notification'">
              <em>{{ message.text }}</em>
            </template>
            <template v-else>
              <strong>{{ message.username }}:</strong> {{ message.text }}
            </template>
          </div>
        </div>
        <div class="controls">
          <input
            v-model="message"
            type="text"
            placeholder="Напишете съобщение..."
            class="chat-input"
            @keyup.enter="sendMessage"
          />
          <button class="send-button" @click="sendMessage">Изпрати</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { inject, onMounted, onUnmounted, ref } from "vue";
import { io } from "socket.io-client";
const state = inject("state");

const socket = io("http://localhost:3005");
const messages = ref([]);
const message = ref("");
const username = state.userData.firstName;

const sendMessage = () => {
  if (message.value.trim() !== "") {
    const data = { username: username, text: message.value };
    socket.emit("sendMessage", data); // Send message to the server
    message.value = ""; // Clear input field
  }
};

onMounted(() => {
  // Listen for incoming messages

  socket.emit("registerUser", username);

  socket.on("previousMessages", (prevMessages) => {
    messages.value = prevMessages;
  });

  socket.on("userConnected", (data) => {
    messages.value.push({
      text: data.message,
      type: "notification",
    });
  });

  socket.on("userDisconnected", (data) => {
    messages.value.push({
      text: data.message,
      type: "notification",
    });
  });

  socket.on("receiveMessage", (data) => {
    messages.value.push(data);
  });
});

onUnmounted(() => {
  socket.disconnect(); // Disconnect when the component is destroyed
});
</script>

<style scoped>
body {
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  color: #333;
  line-height: 1.6;
}

main {
  display: block;
  margin-top: 12rem;
}

.chat-title {
  margin: 5px;
  padding: 0px;
}

.main-image {
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
  box-shadow: var(--shadow);
}

.new-container {
  position: relative;
  background-color: rgb(255, 255, 255);
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 80%;
  max-width: 1100px;
  min-height: 600px;
  margin: 0 auto;
  margin-top: -33.5rem;
  display: flex;
  flex-direction: column;
}

.chat-area {
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  flex: 1;
  height: 475px;
  max-height: 475px;
  overflow-y: scroll;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: rgb(252, 252, 252);
}

.chat-message {
  margin-bottom: 8px;
  font-size: 18px;
  row-gap: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.controls {
  display: flex;
  gap: 10px;
  align-items: center;
}

.chat-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 18px;
}

.send-button {
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.send-button:hover {
  background-color: #333333;
}
</style>
