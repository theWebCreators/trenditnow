# TrendItNow

A modern editorial website built with React, Vite, Tailwind CSS, Framer Motion, Express, MongoDB, and Nodemailer.

## Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Express.js
- MongoDB Atlas
- Mongoose
- Nodemailer

## Project Structure

```text
trenditnow/
├── client/          # React + Vite frontend
├── server/          # Express backend
├── .env.example
└── README.md
```

## Local Setup

Clone the repository:

```bash
git clone https://github.com/theWebCreators/trenditnow.git
cd trenditnow
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm run dev
```

The frontend runs on **http://localhost:5173** and the backend runs on **http://localhost:5000**.

## Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

## MongoDB Setup

1. Create a free MongoDB Atlas cluster.
2. Create a database user.
3. Add your IP address in **Network Access**.
4. Copy the connection string from **Connect → Drivers**.
5. Paste it into `MONGODB_URI` in your `.env` file.

## Features

- Modern responsive UI
- Smooth Framer Motion animations
- Contact/booking form
- MongoDB database integration
- Email notifications with Nodemailer
- Fast Vite development workflow

## Deployment

### Frontend

Deploy the `client` folder on **Vercel**.

### Backend

Deploy the `server` folder on **Render** or another Node.js hosting provider.

## License

MIT © TheWebCreators