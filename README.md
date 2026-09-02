# XYZ Agency

An editorial, college-first offline advertising website built with React, Vite, Tailwind CSS, Framer Motion, Express, MongoDB, and Nodemailer. It includes a home page, a water-label ideation case study, and a working call-booking API.

## Project structure

```
xyz-agency/
├── client/       # React + Vite site
├── server/       # Express API + Mongoose model
├── .env.example
└── README.md
```

## Local setup

Copy the example environment file to `.env` in the project root and fill in the values:

```bash
cp .env.example .env
```

Start the frontend in one terminal:

```bash
cd client
npm install
npm run dev
```

Start the backend in another terminal:

```bash
cd server
npm install
npm run dev
```

The website runs at `http://localhost:5173`; the API runs at `http://localhost:5000`.

## MongoDB Atlas

1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/atlas).
2. Create a database user and allow your current IP address under **Network Access**.
3. Click **Connect** → **Drivers**, then copy the connection string.
4. Replace `your_mongodb_connection_string` in `.env` with that URI. Include your database name, for example `mongodb+srv://user:password@cluster.example.mongodb.net/xyz-agency`.
5. After a booking, use MongoDB Compass to connect with the same URI. The saved requests appear in the `bookings` collection.

## Email notification

The server uses Gmail SMTP. Set `EMAIL_USER` to the Gmail address receiving the notifications and `EMAIL_PASS` to a [Google App Password](https://myaccount.google.com/apppasswords), not your normal password. Email is sent only after MongoDB has saved the booking.

## Booking flow

1. A visitor completes the schedule-a-call form.
2. React sends `POST /api/book-call` to Express.
3. Express validates required fields and the email format.
4. Mongoose stores the request in MongoDB.
5. Nodemailer sends the agency a `New Schedule Call Request` email containing the name, phone, company, date, time, and requirement.
6. The site displays a confirmation message to the visitor.

## Production notes

Set `CLIENT_URL` to the deployed frontend origin. Optionally set `VITE_API_URL` in the frontend deployment environment to your deployed API URL. Do not commit `.env`; it is excluded by `.gitignore`.
