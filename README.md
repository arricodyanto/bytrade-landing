# ByTrade Landing Page

Welcome to the ByTrade Landing Page repository! This is a website created to showcase the features and benefits of ByTrade, a trading platform for cryptocurrency and forex.

## Installation

There is no need for installation as this is a website hosted online. You can access it by visiting https://bytrade.vercel.app/.
## Run Locally


If you want to run this project on your local system, please clone or fork this repository in your device.

Clone the project

```bash
  git clone https://github.com/arricodyanto/bytrade-landing.git
```

Go to the project directory

```bash
  cd bytrade-landing
```

Install dependencies

```bash
  yarn install
  # or
  npm install
```

Before start the server, you must create a file named ".env.local" and save this lines to the file

```bash
  TELEGRAM_BOT_TOKEN=<your_bot_telegram_token>
  TELEGRAM_CHAT_ID=<your_group_chat_id>
  X_CMC_PRO_API_KEY=<your_coinmarketcap_api_key>
```

You can get the Telegram Bot Token by creating your bot with @BotFather, (https://telegram.me/BotFather)

To get your Telegram Chat ID you can open your Telegram Web, or you can read the steps in this forum, 
https://stackoverflow.com/questions/32423837/

You can create your account in Coinmarketcap.com to get the market crypto current price at, https://coinmarketcap.com/api/. There's a Basic Plan you could get, and it's totally Free!


Once finished, run the development server:

```bash
  npm run dev
  # or
  yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
## Telegram Notifier

When a new user registered, the api will send a notification to a Telegram Group Chat. Please join to https://t.me/bytradeNotifier to see the notifications' alert.

Hope you'll enjoy it!
