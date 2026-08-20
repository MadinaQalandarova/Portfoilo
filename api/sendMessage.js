const https = require("https");

const TELEGRAM_BOT_TOKEN = "8461587456:AAFwVMvF9wbENcVnznYa8nKdZmAYmqNaX-M";
const CHAT_ID = "8562164104";

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function callTelegram(text) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: "HTML",
    });

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const req = https.request(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(payload),
          "User-Agent": "portfolio-contact-form/1.0",
        },
      },
      (res) => {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          try {
            resolve({ status: res.statusCode, data: JSON.parse(body) });
          } catch (err) {
            resolve({ status: res.statusCode, data: { ok: false } });
          }
        });
      },
    );

    req.setTimeout(8000, () => {
      req.destroy(new Error("Telegram API timeout"));
    });

    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch (err) {
      body = {};
    }
  }

  const { name, email, message } = body || {};

  if (!name || !email || !message) {
    res
      .status(400)
      .json({ ok: false, error: "Barcha maydonlar to'ldirilishi shart" });
    return;
  }

  if (!TELEGRAM_BOT_TOKEN || !CHAT_ID) {
    res.status(500).json({
      ok: false,
      error: "Telegram konfiguratsiyasi topilmadi",
    });
    return;
  }

  const text =
    "📬 <b>Yangi Portfolio Xabari!</b>\n\n" +
    `👤 <b>Ism:</b> ${escapeHtml(name)}\n` +
    `📧 <b>Email:</b> ${escapeHtml(email)}\n` +
    `💬 <b>Xabar:</b> ${escapeHtml(message)}`;

  try {
    const result = await callTelegram(text);

    if (result.data && result.data.ok) {
      res.status(200).json({ ok: true });
    } else {
      res.status(result.status || 500).json({
        ok: false,
        error:
          (result.data && result.data.description) || "Telegram API xatosi",
      });
    }
  } catch (err) {
    res.status(500).json({ ok: false, error: "Telegram API xatosi" });
  }
};