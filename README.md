# 🌤️ Weather Subscription API

A RESTful API for managing email subscriptions to weather updates. Built with Fastify, Prisma, and PostgreSQL.

## 🚀 Features Implemented

- **POST /subscribe** – Subscribe to weather updates (city + frequency)
- **GET /confirm/:token** – Confirm email subscription
- **GET /unsubscribe/:token** – Unsubscribe from weather updates
- **GET /weather?city=CityName** – Fetch current weather for a city

## 🧰 Tech Stack

- **Fastify** with TypeScript
- **Zod** – runtime validation for requests
- **Prisma ORM** – PostgreSQL integration
- **WeatherAPI.com** – external weather data source

## 🐳 Run with Docker (recommended)

This project is fully Dockerized. You can run both the API and the PostgreSQL database with a single command:

```bash
1. Create a `.env` file according to env.example
2. docker compose up --build
```

This will:

- Start a **PostgreSQL** database container
- Automatically apply **Prisma migrations**
- Start the **Fastify backend** in development mode
- Mount the source code for live reload

Once running, the API will be available at:

```
http://localhost:3000
```

### 🛠 Manual Setup (optional)

1. Create a `.env` file according to env.example
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run a PostgreSQL database manually
4. Apply database migrations:
   ```bash
   npx prisma migrate dev
   ```
5. Start the development server:
   ```bash
   npm run start:dev
   ```

## 🔍 API Overview

- **POST `/subscribe`** – Subscribe with email, city, and frequency
- **GET `/confirm/:token`** – Confirm the subscription
- **GET `/unsubscribe/:token`** – Cancel the subscription
- **GET `/weather?city=CityName`** – Fetch current weather for a specific city

All routes perform request validation via Zod schemas.

## 🚧 Future Improvements (Out of Scope)

- ⏰ **Email delivery** (daily/hourly) to subscribers
- 🧪 **Rate limiting**, **testing**, and **logging improvements**
