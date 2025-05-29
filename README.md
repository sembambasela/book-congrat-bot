# 📚 Book Celebration Bot

![Discord.js Version](https://img.shields.io/badge/discord.js-v14.19.3-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6.16.0-green)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A Discord bot that celebrates reading achievements by tracking finished books and congratulating users.

## ✨ Features
- Log finished books with `!finished <title>`
- View reading history with `!log`
- MongoDB-powered data storage
- Customizable congratulation messages
- Reading statistics tracking

## 🚀 Quick Start

### Prerequisites
- Node.js v16+
- MongoDB Atlas account or local MongoDB instance
- Discord bot token

### Installation
1. Clone the repository
 ```bash
   git clone https://github.com/your-username/book-congrat-bot.git
   cd book-congrat-bot
```

2. Install dependencies

```bash
npm install
```
3. Set up environment variables

```bash
cp .env.example .env
```
Edit .env with your credentials:

```env
DISCORD_TOKEN=your_bot_token_here
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
```
## 🛠️ Usage
Start the bot:

```bash
node bot.js
```

## Available Commands
| Command       | Description               | Example          |
|---------------|---------------------------|------------------|
| `!finished`   | Log a completed book      | `!finished Dune` |
| `!log`        | View reading history      | `!log`           |
| `!stats`	    | Show reading statistics	  | `!stats`         |

## 📦 Dependencies
| Package    | Version   | Purpose               |
|------------|-----------|-----------------------|
| discord.js | ^14.19.3  | Discord API wrapper   |
| mongoose   | ^8.15.0	 | MongoDB ODM           |
| dotenv	   | ^16.5.0	 | Environment variables |

## 🤝 Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add amazing feature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

## 📬 Contact 
LinkedIn - Semba Mbasela \
Email - mbaselasemba@gmail.com