# Connectzzzzzzz

A full-stack platform for peer connection, job listings, resource sharing, and real-time messaging. Built with React (Vite) frontend and Node.js/Express backend, using MongoDB for data storage.

---

## Features

- **User Authentication**: Register, login, and manage profiles securely.
- **Job Listings**: Browse, filter, and post job opportunities.
- **Resource Sharing**: Upload, browse, and categorize study resources.
- **Real-Time Chat**: Instant messaging with Socket.io.
- **AI Assistant**: Integrated AI features (see `AI.jsx`).
- **Anonymous Posting**: Post and view anonymous messages.

---

## Project Structure

```
Connectzzzzzzz/
├── client/         # Frontend (React + Vite)
├── src/            # Backend (Node.js/Express)
├── DB/             # MongoDB config
├── prisma/         # (Optional) Prisma ORM files
├── uploads/        # Uploaded files (auto-generated)
├── server.js       # Backend entry point
├── ...             # Deployment/config files
```

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB Atlas (or local MongoDB)

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd Connectzzzzzzz
```

### 2. Setup Environment Variables
Create a `.env` file in the root and in `client/` as needed. Example:

**Backend (`.env`):**
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```

**Frontend (`client/.env`):**
```
VITE_API_URL=https://your-backend-url.com
```

### 3. Install Dependencies

**Backend:**
```bash
npm install
```

**Frontend:**
```bash
cd client
npm install
```

### 4. Run Locally

**Backend:**
```bash
npm start
```

**Frontend:**
```bash
npm run dev
```

---

## Deployment

### Frontend (Vercel)
- Deploy the `client/` directory as a Vite/React app on [Vercel](https://vercel.com/).
- Set environment variables in the Vercel dashboard.

### Backend (Render/Railway/Heroku)
- Deploy the root project (with `server.js`) to [Render](https://render.com/), [Railway](https://railway.app/), or [Heroku](https://heroku.com/).
- Set environment variables in the platform dashboard.

### Database
- Use [MongoDB Atlas](https://www.mongodb.com/atlas) or another managed MongoDB provider.

---

## Folder Details

- `client/` - React frontend (components, pages, services, assets)
- `src/` - Express backend (controllers, models, routes, sockets)
- `DB/` - MongoDB config
- `prisma/` - (Optional) Prisma ORM files
- `uploads/` - Uploaded files (auto-generated, not tracked)

---

## Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License. 
