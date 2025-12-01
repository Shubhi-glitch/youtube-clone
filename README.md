# 🎥 YourTube 2.0 – Full Stack YouTube Clone

**YourTube 2.0** is a full-stack YouTube-inspired video platform.

- **Frontend:** Next.js (React + TypeScript), Tailwind CSS, shadcn/ui, Firebase Google Auth  
- **Backend:** Node.js, Express, MongoDB, Mongoose, Multer  
- **Features:** Video upload, video player, likes, comments, history, watch later, liked videos, channel-style pages, responsive UI.

---

## ✨ Features

### 👤 Authentication & User
- Login with **Google** (Firebase Auth)
- User data stored in MongoDB (name, email, photo, channel name, description)
- Simple channel/profile support

### 🎬 Video Features
- Upload **MP4 videos** from browser
- Videos stored on server (`server/uploads`)
- Video metadata saved in MongoDB (title, file name, uploader, likes, views, timestamps)
- Dedicated **watch page** with player + related videos

### ❤️ Engagement
- Like / Unlike videos
- Comment on videos (add, edit, delete)
- **History** (watched videos + views count)
- **Watch Later** page
- **Liked Videos** page

### 🖥 UI/UX
- Built with **Next.js + Tailwind CSS + shadcn/ui**
- Fully **responsive** (mobile, tablet, desktop)
- Sidebar navigation (Home, Explore, Subscriptions, History, Liked, Watch Later)
- Toast messages using **sonner**
- Reusable, clean components

---

## 🧱 Tech Stack

### Frontend (folder: `yourtube/`)
- Next.js (React + TypeScript)
- Tailwind CSS
- shadcn/ui components
- Firebase Auth (Google sign-in)
- axios
- lucide-react, date-fns, sonner, next-themes

### Backend (folder: `server/`)
- Node.js
- Express
- MongoDB + Mongoose
- Multer (video upload)
- CORS, dotenv, body-parser

---

## 📁 Project Structure (High Level)

```bash
root/
├── server/        # Backend (Node + Express + MongoDB)
└── yourtube/      # Frontend (Next.js + Tailwind)
