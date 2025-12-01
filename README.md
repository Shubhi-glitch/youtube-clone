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
📂 Folder & File Overview (Detailed)
1️⃣ Root Level

server/ → All backend code (APIs, DB models, uploads)

yourtube/ → All frontend code (Next.js app)

2️⃣ Backend – server/

Folder: server/
Files:

index.js → Main Express app entry file (starts backend server)

package.json → Backend dependencies & scripts

package-lock.json → Lock file for npm

.env → Environment variables (MongoDB URL, PORT, etc.)

Subfolders:

🔹 server/Modals/ – Mongoose Models (Database Schemas)

Auth.js → User schema (name, email, photo, channel info, etc.)

comment.js → Comment schema (video, user, text, time)

history.js → Watch history schema (user, video, timestamp)

like.js → Like schema (user, video)

video.js → Video schema (title, file path, uploader, views, likes)

watchlater.js → Watch later schema (user, video)

🔹 server/controllers/ – API Logic / Controllers

auth.js → Login, user creation/update

comment.js → Add, edit, delete, fetch comments

history.js → Add video to history, get history

like.js → Like/unlike logic, get liked videos

video.js → Upload video, get all videos, get single video

watchlater.js → Add/remove watch later, get watch later list

🔹 server/routes/ – API Routes

auth.js → Routes: /user/...

comment.js → Routes: /comment/...

history.js → Routes: /history/...

like.js → Routes: /like/...

video.js → Routes: /video/...

watchlater.js → Routes: /watch/...

Each route file connects URL endpoints to controllers.

🔹 server/filehelper/

filehelper.js → Multer/file upload configuration (where and how files are stored)

🔹 server/uploads/

Contains uploaded video files (MP4 etc.)

These are served by backend so frontend can stream the video

⚠️ Usually uploads/ ko .gitignore me daalte hain GitHub pe push karte time.

3️⃣ Frontend – yourtube/

Folder: yourtube/
Files:

package.json → Frontend dependencies & scripts

package-lock.json

next.config.ts → Next.js configuration

tsconfig.json → TypeScript config

postcss.config.mjs

next-env.d.ts

.gitignore

components.json → shadcn/ui config

Subfolders:

🔹 yourtube/public/

favicon.ico

file.svg, globe.svg, next.svg, vercel.svg, window.svg

video/ (default/public assets if any)

🔹 yourtube/src/

Main source code for frontend.

📁 yourtube/src/styles/

globals.css → Global CSS, Tailwind base styles

📁 yourtube/src/lib/ – Helpers / Context / Config

AuthContext.js → React Context for user auth (current logged-in user, login state)

axiosinstance.js → Pre-configured axios instance with backend base URL

firebase.js → Firebase configuration (API keys, auth setup)

utils.ts → Utility functions (formatting, helpers etc.)

📁 yourtube/src/components/ – Reusable Components

Files:

ChannelHeader.tsx → Channel page header (banner + info)

ChannelVideos.tsx → Videos list on channel page

Channeltabs.tsx → Tabs on channel page (Videos, About, etc.)

Comments.tsx → Comments section on video page

Header.tsx → Top navigation bar / header

HistoryContent.tsx → Layout for history videos page

LikedContent.tsx → Layout for liked videos page

RelatedVideos.tsx → List of related videos on watch page

SearchResult.tsx → Results layout for search page

Sidebar.tsx → Left sidebar navigation (Home, Explore, etc.)

VideoInfo.tsx → Video title, views, likes, channel info section

VideoUploader.tsx → Video upload form/component

Videogrid.tsx → Grid layout for multiple videos

Videopplayer.tsx → Main video player component

WatchLaterContent.tsx → Layout for watch later page

category-tabs.tsx → Category tabs bar (e.g. All, Music, Gaming)

channeldialogue.tsx → Dialog for editing channel info

videocard.tsx → Single video card (thumbnail, title, channel, views)

Subfolder: yourtube/src/components/ui/ – shadcn/ui components

avatar.tsx → Avatar UI

button.tsx → Button component

dialog.tsx → Dialog/modal component

dropdown-menu.tsx → Dropdown menu UI

input.tsx → Input field component

label.tsx → Label component

progress.tsx → Progress bar

sonner.tsx → Toast provider (for notifications)

textarea.tsx → Textarea component

📁 yourtube/src/pages/ – Next.js Pages (Routing)

Top-level files:

_app.tsx → Custom App component (global providers, AuthContext, layouts, etc.)

_document.tsx → Custom Document (HTML structure)

index.tsx → Home page (main video feed)

explore.tsx → Explore page

subscriptions.tsx → Subscriptions page

Dynamic / nested routes:

channel/

[id]/index.tsx → Channel page for a specific user/channel

watch/

[id]/index.tsx → Video watch page for a specific video

history/

index.tsx → History page

liked/

index.tsx → Liked videos page

watch-later/

index.tsx → Watch later page

search/

index.tsx → Search results page

api/ → (Default Next.js API folder, if used)

⚙️ Setup & Installation
1️⃣ Clone the Repository
git clone https://github.com/your-username/yourtube-2.0-fullstack.git
cd yourtube-2.0-fullstack


(Adjust repo name according to what you choose.)

2️⃣ Backend Setup (server/)
cd server
npm install


Create a .env file in server/:

PORT=5000
MONGO_URL=your_mongodb_connection_string


Run backend:

npm start


Backend will run at:

http://localhost:5000

3️⃣ Frontend Setup (yourtube/)
cd ../yourtube
npm install


If needed, update backend URL in src/lib/axiosinstance.js:

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: false,
});


Now run frontend:

npm run dev


Open in browser:

http://localhost:3000

🔐 Firebase Setup (Google Login)

Edit yourtube/src/lib/firebase.js and paste your Firebase config:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

🤝 Contributing

Contributions, issues and feature requests are welcome.
Feel free to fork this repo and open a pull request.

⭐ Support

If you like this project, please ⭐ the repository – it motivates me a lot!
