# Task Manager

## 📜 Project Overview

**Task Manager** is an app where you can easily manage your tasks. You can sign up and log in to save your progress and track your tasks over time. I also provided the ability to upload a user image and change the username to make the app feel more personal and user-friendly.

This project is from **DevChallenges**, but I took the opportunity to expand on the original idea by adding features like login, logout, and sign-up functionality as part of my practice.

## ⚙️ Technologies Used

- **React.js**
- **React Hook Form**
- **React Query (Tanstack)**
- **Tailwind CSS**
- **React Date Picker**
- **React Toast**
- **Supabase** (for authentication and data storage)

## 🎯 Usage

1. **Sign Up / Login**: First, sign in using your username, email, and password.
2. After logging in, you’ll be redirected to the main app.
3. You can add tasks by specifying:
   - Task name
   - Task description
   - Task status (optional)
   - Due date (optional)
4. Task status:
   - **Green** for Completed
   - **Orange** for In Progress
   - **Red** for Won’t Do
   - **Gray** if no status is chosen.
5. If the task is not completed, the due date will appear, showing how much time you have left.
6. Click on any task to view its details, edit it, or delete it.
7. In the header, when you’re logged in, your username and image will be displayed. You can click on your image to change your profile picture, username, and password.
8. **Note**: You are not allowed to change your email; it is set as read-only.

## ✨ Features

- User authentication (Login and Sign Up)
- Task creation with name, description, and status
- Task tracking with a countdown to the deadline
- Profile management (change image, username, and password)
- Fully **responsive design** that works across all screen sizes

## 🔒 Performance & Security

- The project is fast and uses **Supabase** to store data securely.
- I implemented **RLS Policies** (Row-Level Security) in **Supabase** to ensure that each user only has access to their own tasks.
- **Security**: Users cannot access tasks that are not associated with their unique **UID** (User ID). This prevents unauthorized access to other users’ data.

## 🚀 Future Improvements

- Add push notifications or reminders when a task's deadline is approaching.
- Implement a calendar view for better task management.
- Refactor the code to use **TypeScript** for added type safety.

## 📂 Repo

You can find the repository here: [repo](https://github.com/Omar-Yasser-Frontend/Task-Manager)

## 🌐 Demo

Check out the live demo here: [live demo](https://task-manager-omar.netlify.app/)
