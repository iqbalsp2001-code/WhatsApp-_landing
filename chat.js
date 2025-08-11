// Profil
const profilePic = "https://via.placeholder.com/40";
const contactName = "Nama Kontak";

// Data chat
const chats = [
  { from: "other", text: "Halo! Ini tampilan seperti WhatsApp." },
  { from: "me", text: "Bisa ganti teks dengan mudah." },
  { from: "other", text: "Dan foto profil juga bisa diubah." }
];

// Link tombol Next
const nextLink = "https://linkkamu.com";

// Rendering
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("profile-pic").src = profilePic;
  document.getElementById("contact-name").textContent = contactName;

  const chatBody = document.getElementById("chat-body");
  chats.forEach(chat => {
    const div = document.createElement("div");
    div.className = `bubble ${chat.from}`;
    div.textContent = chat.text;
    chatBody.appendChild(div);
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    window.location.href = nextLink;
  });
});
