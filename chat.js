<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WhatsApp Style Landing Page</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: Arial, sans-serif;
      background-color: #ece5dd;
      display: flex;
      flex-direction: column;
      height: 100vh;
    }

    /* HEADER */
    .header {
      display: flex;
      align-items: center;
      background-color: #075E54;
      color: white;
      padding: 10px;
    }
    .header img.profile-pic {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .header .name-status {
      flex-grow: 1;
    }
    .header .name-status strong {
      display: block;
    }
    .header-icons {
      display: flex;
      gap: 15px;
    }
    .header-icons img {
      width: 22px;
      height: 22px;
      cursor: pointer;
    }

    /* BODY */
    .chat-body {
      flex: 1;
      overflow-y: auto;
      padding: 15px;
      background-image: url('https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp_background.png');
      background-size: cover;
    }
    .chat-img {
      display: block;
      max-width: 100%;
      border-radius: 10px;
      margin-bottom: 10px;
    }
    .message {
      display: inline-block;
      background: #fff;
      padding: 10px;
      border-radius: 8px;
      max-width: 80%;
      font-size: 14px;
      margin-bottom: 10px;
    }

    /* FOOTER */
    .footer {
      background: white;
      padding: 15px;
      text-align: center;
    }
    .footer p {
      font-size: 14px;
      margin-bottom: 10px;
    }
    .btn-next {
      display: inline-block;
      background: #007BFF;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 25px;
      font-size: 16px;
      text-decoration: none;
    }
    .btn-next:hover {
      background: #0069d9;
    }
  </style>
</head>
<body>

  <!-- HEADER -->
  <div class="header">
    <img src="https://via.placeholder.com/40" alt="Profile" class="profile-pic" id="profile-pic">
    <div class="name-status">
      <strong id="profile-name">Nama Kamu</strong>
      <small style="color: #25D366;">online...</small>
    </div>
    <div class="header-icons">
      <img src="https://img.icons8.com/ios-glyphs/30/ffffff/video-call.png" alt="Video Call">
      <img src="https://img.icons8.com/ios-glyphs/30/ffffff/phone.png" alt="Call">
    </div>
  </div>

  <!-- BODY -->
  <div class="chat-body">
    <img src="https://via.placeholder.com/350x400" alt="Foto Chat" class="chat-img" id="chat-image">
    <div class="message" id="chat-text">
      Halo, ini adalah teks chat yang bisa kamu ganti sendiri. 😊
    </div>
  </div>

  <!-- FOOTER -->
  <div class="footer">
    <p id="footer-text">
      Untuk melanjutkan, klik tombol di bawah ini.
    </p>
    <a href="https://blogkamu.com" class="btn-next" id="next-link">LANJUTKAN</a>
  </div>

</body>
</html>
  
