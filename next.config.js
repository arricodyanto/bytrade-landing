/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
    X_CMC_PRO_API_KEY: process.env.X_CMC_PRO_API_KEY
    // tambahkan variabel lingkungan lainnya di sini
  }
}

module.exports = nextConfig;
